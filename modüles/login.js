const finduser = require('../controllers/findUser');
const hash = require('../crypto/hash');
const jwt = require('../controllers/jsonwebtoken');
const member = require('../models/register');

module.exports.login = async (req, res) => {
    const user = await member.find({ email: req.body.email });
    if (!(user[0])) {
        res.status(404).json({
            message: 'user not found',
            status: false,
        })

    } else if (hash.decrypt(user[0].pass) != req.body.pass) {
        res.status(404).json({
            message: 'password is wrong',
            status: false,
        })

    } else if (user[0].status != true) {
        res.status(404).json({
            message: 'unverified accounts',
            status: false,
        })

    } else {
        const token = await jwt.createToken(user.id);
        res.status(201).json({
            message: 'successful',
            status: true,
            token: token,
        })
    }
}