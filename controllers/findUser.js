const member = require('../models/register');

module.exports.findUser = async(emaill) => {
const user = await member.find({email:emaill});
return(user);
}
module.exports.findUserwithid = async(id) => {
    const user = await member.find({id:id});
    return(user);
    }