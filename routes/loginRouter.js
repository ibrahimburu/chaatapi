const express = require('express');
const loginRouter = express.Router();
const login = require('../modüles/login');

loginRouter.post('/',login.login);



module.exports=loginRouter;