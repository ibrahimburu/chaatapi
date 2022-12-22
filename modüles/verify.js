const findUser = require('../controllers/findUser');
const updateUser = require('../controllers/updateUser');

module.exports.verify = async (id, name) => {
    try {
        const user = await findUser.findUserwithid(id);
        if(user[0].name=name){
            let newuser={
                id:user[0].id,
                name:user[0].name,
                surName:user[0].surName,
                pass:user[0].pass,
                status:true,
                uploadedAt:user[0].uploadedAt
            }
            updateUser.updateUser(newuser);
            return true;
        }else{
            return false;
        } 
    } catch (error) {
        return error;
    }
}