const jwt = require('jsonwebtoken');
require('dotenv').config();

const requireAuth = (req, res, next) => {
    const token = req.body.token;
    if(token){
        jwt.verify(token,process.env.SCREETKEY,async (err,decodedToken)=>{
            if(err){
                res.status(404).json({
                    status:false,
                    message:'hatalı token'
                });
            }else{
                let id = decodedToken.data;
                req.id = id ;
                next();
            }
        })

    }else{
        res.status(404).json({
            status:false,
            message:'giriş yapmalısınız'
        })
    }
}