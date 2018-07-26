// 

if (process.env.NODE_ENV === 'production') {
    // we are in propduction - return the prd set key
    module.exports = require('./production')
} else {
    // we are in development - return the dev set key
    module.exports = require('./development')
}