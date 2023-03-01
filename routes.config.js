const UsersController = require('./controllers/users.controller'); // pendding 1

exports.routesConfig = function (app) {
    app.post('/auth/register', [
        UsersController.register
    ]);  
    app.post('/auth/login', [
        UsersController.login
    ]);  
} 


