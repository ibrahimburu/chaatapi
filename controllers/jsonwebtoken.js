const jwt = require('jsonwebtoken');
require('dotenv').config();

function createToken(id) {
    return jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24),
        data: id
    }, process.env.SCREETKEY);
};
module.exports = { createToken }