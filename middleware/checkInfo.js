const numbers = [0,1,2,3,4,5,6,7,8,9];
const verifyEmail = (req,res,next) => {
    let student = req.body;
    let email = student.email;

    if(email.split("").indexOf("@")<0){
        res.send("error")
    }else if(email.split('@').length != 2){
        res.send("error")
    }else if(!(email.indexOf(".com") || email.indexOf(".vn") || email.indexOf(".vip"))){
        res.send("error")
    }
    else{
        next();
    }
    
}

function checkNumber(x) {
    let index  = numbers.indexOf(Number(x));
    return index >= 0;
}

module.exports = verifyEmail;