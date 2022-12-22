const CryptoJS = require("crypto-js");
require('dotenv').config();

// Encrypt
function encrypt (password){
    return ciphertext = CryptoJS.AES.encrypt(password,process.env.SCREETKEY).toString();
}

function decrypt (pass){
    const bytes  = CryptoJS.AES.decrypt(pass,process.env.SCREETKEY);
    return originalText = bytes.toString(CryptoJS.enc.Utf8);
}
module.exports = {encrypt,decrypt};