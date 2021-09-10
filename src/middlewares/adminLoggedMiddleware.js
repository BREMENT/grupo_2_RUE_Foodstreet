const UserModel = require('../models/Users');

function adminLoggedMiddleware(req, res, next){
    res.locals.isLogged = false;

    let recordar = req.cookies.recordar;
    const user = UserModel.findById( recordar );
    if(user){
        req.session.userLogged = user;
    }

    if(req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.user = req.session.userLogged;
    }

    next();
}

module.exports = adminLoggedMiddleware;