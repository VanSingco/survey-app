const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../models/user');
const {secret, facebook} = require('../config/secret');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id , done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    })
});

passport.use(new FacebookStrategy({
    clientID: facebook.clientID,
    clientSecret: facebook.clientSecret,
    profileFields: ['email', 'name', 'displayName', 'photo'],
    callbackURL: '/auth/facebook/callback',
    passReqToCallback: true
}, (req, token, refreshToken, profile, done) => {
    User.findOne({facebook: profile.id}).then((user) => {
       if(user) return done(null, user);
        const newUser = new User();
        newUser.facebook = profile.id;
        newUser.email = profile._json.email;
        newUser.username = profile._json.first_name.replace(/\s/g, ''); // remove space;
        newUser.fullname = profile.displayName;
        newUser.photo = `https://graph.facebook.com/${profile.id}/picture?type=large`;
        newUser.fbTokens.push({token});
        newUser.save((err) => {
            done(null, newUser);
        });
    }).catch((err) => done(err));
}));