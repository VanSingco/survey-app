
module.exports = (app, passport) => {
    app.get('/', (req, res) => {
        if (req.user) {
            res.send('login');
        } else {
            res.send('not login');
        };
    })
    // facebook authentication
    app.get('/auth/facebook', passport.authenticate('facebook', {scope: 'email'}));
    app.get('/auth/facebook/callback', passport.authenticate('facebook', {
        failureRedirect: '/signup',
        failureFlash: true
    }), (req, res) => {
         res.redirect('/');   
    });
      // google authentication
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['https://www.googleapis.com/auth/plus.login', 'https://www.googleapis.com/auth/plus.profile.emails.read']
    }));
    app.get('/auth/google/callback', passport.authenticate('google', {
        failureRedirect: '/signup',
        failureFlash: true
    }), (req, res) => {
        return res.redirect('/');   
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    })

    // logout
     app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });
}