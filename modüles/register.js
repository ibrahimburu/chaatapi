const createRegister = require('../controllers/createRegister.js');
const finduser = require('../controllers/findUser');
const hash = require('../crypto/hash');
const sendmail = require('../mailverification/nodemailer.js');
const { v4: uuidv4 } = require('uuid');


module.exports.registerUser = async (req, res) => {
    try {
        let newusers = {
            id: uuidv4(),
            name: req.body.name,
            surName: req.body.surName,
            email: req.body.email,
            pass: req.body.pass,
            status: false,
        }
        const user = await finduser.findUser(newusers.email);
        if ((user[0])) {
            res.status(404).json({
                succeded: false,
                message: 'email adresi zaten kayıtlı',
            })
        }
        else if (newusers.pass.length < 8) {
            res.status(404).json({
                succeded: false,
                message: 'şifre minumum 8 karakterden oluşmalıdır',
            })
        }
        else {
            newusers.pass = await hash.encrypt(newusers.pass);
            const status = await createRegister.createRegister(newusers);
            if (status) {
                sendmail.sendmail(newusers.email,newusers.id,newusers.name)
                res.status(201).json({
                    message: 'işlem başarılı',
                    status:true,
                    newusers,
                })
            }
            else {
                res.status(404).json({
                    message: 'işlem başarısız',
                })
            }
        }
    } catch (error) {
        res.json(error);
    }
}