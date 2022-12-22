const express = require('express');
const registerRouter = express.Router();
const register = require('../modüles/register');

registerRouter.post('/',register.registerUser);

module.exports = registerRouter;