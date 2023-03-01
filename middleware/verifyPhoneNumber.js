const numbers = [0,1,2,3,4,5,6,7,8,9];
const verifyPhoneNumber = (req,res,next) => {
    let student = req.body;
    let phone = student.phone;

    console.log(phone.split('').every(checkNumber));
    if(phone.length <= 0){
        res.send("Phone is Required!");
    }else if(phone.length > 12 || phone.length < 10){
        res.send("Phone number is not valid!");
    }
    else if(phone.charAt(0) != '0'){
        res.send("Phone number is not VietNam!");
    }
    else if(!phone.split('').every(checkNumber)){
        res.send("Phone number is not valid!");
    }
    else{
        next();
    }
    
}

function checkNumber(x) {
    let index  = numbers.indexOf(Number(x));
    return index >= 0;
}

module.exports = verifyPhoneNumber;