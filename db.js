const mongoose = require('mongoose');

const conn = () => {
    mongoose.connect(process.env.DB_URI,{
        dbNAme:'Chat',
        useNewUrlParser:true,
        useUnifiedTopology: true,

    }).then(()=>{
        console.log('Connected to the DB succesuly');
    }).catch((err)=>{
        console.log(err);
    })
};
module.exports = conn;