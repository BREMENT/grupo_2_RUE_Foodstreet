// const UserModel = require('../helpers/Users');
const {request, response} = require('express');
const db = require('../database/models');

const adminLoggedMiddleware = async (req = request, res = response, next)=>{
    res.locals.isLogged = false;

    let recordar = req.cookies.recordar;
    const user = await db.Usuario.findByPk( recordar );

    if(user){
        console.log(user);
        req.session.userLogged = user;
    }

    if(req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.user = req.session.userLogged;
    }

    next();
}

module.exports = adminLoggedMiddleware;