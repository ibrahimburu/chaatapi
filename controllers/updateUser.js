const member = require('../models/register');

module.exports.updateUser = async(user) => {
    await member.findOneAndUpdate({id:user.id},user);
}