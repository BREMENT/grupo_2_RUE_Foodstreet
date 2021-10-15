const bcryptjs = require('bcryptjs');// true
const { validationResult } = require('express-validator');// true
const {request, response} = require('express');
// const UserModel = require('../helpers/Users');

const db = require('../database/models');
const Op = db.Sequelize.Op;

const userController = {
    login: (req = request, res = response) => {
        res.render('users/login');
    },
    enter: async(req =request, res = response)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.render('users/login',{errors: errors.mapped(), old: req.body });
        }

        try{
            const user = await db.Usuario.findOne({
                where:{
                    correo: req.body.email
                }
            });

            if(user){
                const comparacion = bcryptjs.compareSync(req.body.password, user.passwords);
                if(comparacion){
                    delete user.dataValues.passwords;
                    req.session.userLogged = user.dataValues;
                    if(req.body.recordar){
                        res.cookie('recordar', user.dataValues.usuario_id, {maxAge: 60000}); 
                    }

                    return res.redirect('/user/profile');
                }

                return res.render('users/login',{
                    errors:{
                        email: { msg: 'Favor de verificar su password o su email'},
                        password: { msg: 'Favor de verificar su password o su email'}
                    }, old: {email: req.body.email}
                });
            }

            return res.render('users/login',{
                errors: {
                    email: { msg: 'Favor de verificar su password o su email'},
                    password: { msg: 'Favor de verificar su password o su email'}
                }, old: {email: req.body.email}
            });

        }catch(err){
            console.log(err);
        }

    },
    signup: (req = request, res = response) => {
        res.render('users/signup');
    },
    create: async(req = request, res = response) => {
        const errors = validationResult(req);
        
        if(!errors.isEmpty()){
            console.log({errors: errors.mapped()});
            return res.render('users/signup',{errors: errors.mapped(), old: req.body });
            
        }
        
        const [nombre_primero, nombre_segundo = ''] = req.body.nombres.split(' ');
        const [apellidoP, apellidoM = ''] = req.body.apellidos.split(' ');
        
        const user = {
            foto: req.file.filename,
            nombre_primero,
            nombre_segundo,
            apellidoP,
            apellidoM,
            correo: req.body.email,
            telefono: req.body.telefono,
            passwords: bcryptjs.hashSync(req.body.password, 10)
        }

        try{
           const userNew = await db.Usuario.create( user );
           console.log(userNew);
        }catch(error){
            console.log(error);
        }

        res.redirect('/user/login');
    },
    profile: (req, res)=>{
        res.render('users/profile', {user: req.session.userLogged });
    },
    logout: (req, res) => {
        req.session.destroy();
        res.clearCookie('recordar');
        return res.redirect('/');
    }

};

module.exports = userController;