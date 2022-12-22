const express = require('express');
const verifyRouter = express.Router();
const verify = require('../modüles/verify');

verifyRouter.get('/:id/:name', (req, res) => {
    const response = verify.verify(req.params.id, req.params.name);
    if (response) {
        res.status(201).json({
            message: 'email verified',
        })
    } else {
        res.status(201).json({
            message: response,
        })}
});


module.exports = verifyRouter;