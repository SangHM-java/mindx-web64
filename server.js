const express = require('express');
const app = express(); 

const routes = require('./routes.config');

// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
//     if (req.method === 'OPTIONS') {
//         return res.sendStatus(200);
//     } else {
//         return next();
//     }
// });

// ADD THIS
var cors = require('cors');
app.use(cors());

app.use(express.json());

// app.use((req, res, next) => {
//     console.log("first middleware");
//     next();
// })

routes.routesConfig(app); 


app.listen(4000, function () {
    console.log('app listening at port %s', 4000);
});
