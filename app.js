const express = require('express');
const app = express();
const cors = require('cors');
const conn = require('./db.js');
require('dotenv').config();
const bodyParser = require("body-parser")
const authMiddlewares = require('./middlewares/authMiddleware');
app.use(cors());
app.use(bodyParser());
const registerRouter = require('./routes/registerRouter');
const loginRouter = require('./routes/loginRouter');
const verifyRouter = require('./routes/verifyRouter');
conn();
const PORT = process.env.PORT || 8080;
app.use('/register',registerRouter);
app.use('/login',loginRouter);
app.use('/verify',verifyRouter);


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT} listening...`)
})