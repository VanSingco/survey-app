const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const passport = require('passport')

const {database, secret} = require('./server/config/secret')

const app = express();

// connect to mongodb database
mongoose.Promise = global.Promise;
mongoose.connect(database, { useNewUrlParser: true }, (err) => {
    if (err) console.log(err);
    console.log('Connected tothe database');
});

// store a session into database
const sessionStore = new MongoStore({url: database, autoReconnect: true});
const sessionMiddleware = session({
    resave: true,
    saveUninitialized: true,
    secret: secret,
    store: sessionStore
})
// passport facebook auth and google auth
require('./server/passport/passport-facebook');
require('./server/passport/passport-google');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// storing session to database
app.use(sessionMiddleware);

// passport middleware
app.use(passport.initialize());
app.use(passport.session());


require('./server/routes/user')(app, passport);
require('./server/routes/billing')(app);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    const path = require('path')
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client/build/index.html'))
    })
}


const PORT = process.env.PORT || 5000;
app.listen(PORT , () => {
    console.log(`App is running at port: ${PORT}`);
})