const UserModel = require('../models/users.model');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    let user = req.body;
    await bcrypt.hash(user.password, 2).then(function(hash){
        user.password = hash;
    })
    console.log(user);
    await UserModel.createUser(user).then((result) => {
        console.log(result);
        if(result){
            res.status(200).send(result);
        }
    })
    res.send(200);
}

exports.login =  async(req,res) => {
    let user_login = req.body;
    let user_info = await UserModel.findByEmail(user_login.email);
    console.log(user_info);
    if(!user_info){
        res.status(404).send("Email not found !")
    }
    await bcrypt.compare(user_login.password, user_info.password)
    .then(function(result) {
        if(!result){
            res.status(404).send("Incorrect password !")
        }
    });

    let token = jwt.sign({ name: user_info.name , email: user_info.email}, 'Mindx2023');
    console.log(token);
    res.status(200).send({"jwt": token, message: "Login successfully !"})

}



