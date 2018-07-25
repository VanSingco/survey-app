const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const {database} = require('./server/config/secret')

const app = express();

// connect to mongodb database
// mongoose.Promise = global.Promise;
// mongoose.connect(database);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('Hello FullStact React And NodeJS')
})

const PORT = process.env.PORT || 5000;
app.listen(PORT , () => {
    console.log(`App is running at port: ${PORT}`);
})