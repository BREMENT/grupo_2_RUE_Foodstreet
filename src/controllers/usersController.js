const bcryptjs = require('bcryptjs');// true
const { validationResult } = require('express-validator');// true
const bcrypt = require('bcryptjs');
const UserModel = require('../models/Users');

const userController = {
    login: (req, res) => {
        res.render('users/login');
    },
    enter: (req, res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.render('users/login',{errors: errors.mapped(), old: req.body });
        }

        const user = UserModel.findField('email', req.body.email );
        if(user){
            const compare = bcrypt.compareSync(req.body.password, user.password);
            if( compare ){
                delete compare.password;
                req.session.userLogged = user;
                if(req.body.recordar){
                    res.cookie('recordar', user.id, {maxAge: 60000}); 
                    // el maxAge -> cambiara por ahora sera 1 minuto
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
        })

    },
    signup: (req, res) => {
        res.render('users/signup');
    },
    create: (req, res) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            res.render('users/signup',{errors: errors.mapped(), old: req.body });
            return;
        }

        const userExist = UserModel.findField('email', req.body.email);
        if(userExist){
            
            return res.render('users/signup', {
                errors: {
                    email: { msg: 'No se pudo crear el usuario con esa dirección de email'}
                },
                old: req.body });
        }

        let imagen = 'aura.jpg';
        if(req.file){
            imagen = req.file.filename;
        }

        const user = {
            imagen: imagen,
            nombres: req.body.nombres,
            apellidos: req.body.apellidos,
            email: req.body.email,
            telefono: req.body.telefono,
            password: bcryptjs.hashSync(req.body.password, 10),
            categoria: req.body.categoria
        }

        UserModel.create( user );

        res.redirect('users/login');
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