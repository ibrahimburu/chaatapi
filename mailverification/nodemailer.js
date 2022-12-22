const nodemailer = require("nodemailer");
require('dotenv').config();

module.exports.sendmail = async (email, id, name) => {
    try {
        let transporter = nodemailer.createTransport({
            host: "smtp.mail.ru",
            port: 465,
            secure: true,
            auth: {
                user: process.env.user,
                pass: process.env.pass,
            }
        })
        await transporter.sendMail({
            from: '"buruSoftware 👻" <buru2425@mail.ru>', // sender address
            to: email, // list of receivers
            subject: "mail doğrulama", // Subject line
            html: `<p>mailinizi doğrulmak için <a href ="${process.env.URL}/verify/${id}/${name}" style = "color:red">buraya </a>tıklayın</p>`
        });
    } catch (err) {
        console.log(err);
        console.log("hata mail gönderilemedi");
    }
}