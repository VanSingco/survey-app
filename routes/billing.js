const { stripeSecretKey } = require('../config/secret');
const stripe = require('stripe')(stripeSecretKey);
const User = require('../models/user')

module.exports = (app) => {

    app.post('/api/stripe-token', (req, res) => {
        // Create a new customer and then a new charge for that customer:
        stripe.customers.create({
            email: req.body.email
        }).then(function (customer) {
            return stripe.customers.createSource(customer.id, {
                source: req.body.id
            });
        }).then(function (source) {
            return stripe.charges.create({
                amount: 500,
                currency: 'usd',
                customer: source.customer
            });
        }).then(function (charge) {
            User.findOne({_id: req.user._id}).then((user) => {
                user.credits += 5;
                user.save((err, user) => {
                    res.send(user);
                })
            });
        }).catch(function (err) {
            // Deal with an error
        });
    })

}