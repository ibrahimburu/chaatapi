const member = require('../models/register');

module.exports.createRegister = async (newusers) => {
    let status = false;
        try {
            await member.create(newusers);
            status = true;
            return(status);
            
        } catch (error) {
           console.log(error)
           return(status);
        }
    }


module.exports;