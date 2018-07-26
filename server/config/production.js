module.exports = {
    database: process.env.MONGO_URI,
    secret: process.env.SECRET,
    facebook: {
        clientID: '1857452704562260',
        clientSecret: '6ecd506c7f80dfd6a90a1084ea78c7b9'
    },
    google: {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }
}