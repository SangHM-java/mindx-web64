const mongoose = require('mongoose');
let count = 0;
//"mongodb+srv://mindx:mindx@cluster0.p2etmyk.mongodb.net/?retryWrites=true&w=majority"
const connectWithRetry = () => {
    mongoose
    .connect("mongodb+srv://mindx:mindx@cluster0.p2etmyk.mongodb.net/NewFacebook?retryWrites=true&w=majority")
    .then(()=>{
        console.log('MongoDB is connected')
    })
    .catch(err=>{
        console.log('MongoDB connection unsuccSessful, retry after 5 seconds. ', ++count);
        setTimeout(connectWithRetry, 5000)
    })
};

connectWithRetry();

exports.mongoose = mongoose;// import && export
