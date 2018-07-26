
const User = require('../models/user');
module.exports = (app, passport) => {

     // logout
     app.get('/logout', (req, res) => {
        req.logout();
        res.send('landing page')
    });
    // facebook authentication
    app.get('/auth/facebook', passport.authenticate('facebook', {scope: 'email'}));
    app.get('/auth/facebook/callback', passport.authenticate('facebook', {
        failureRedirect: '/signup',
        failureFlash: true
    }), (req, res) => {
        if (req.user) {
             return res.send('Home you are loggin');
        } else {
             return res.send('landing page');
        }
    });
      // google authentication
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['https://www.googleapis.com/auth/plus.login', 'https://www.googleapis.com/auth/plus.profile.emails.read']
    }));
    app.get('/auth/google/callback', passport.authenticate('google', {
        failureRedirect: '/signup',
        failureFlash: true
    }), (req, res) => {
         if (req.user) {
             return res.send('Home you are loggin');
         } else {
             return res.send('landing page');
         }
    });
}