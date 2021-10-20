const path = require('path');
const fs = require('fs');
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
            console.log({error: errors.mapped})
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
    signup: async(req = request, res = response) => {
        try{
            const tipoUsuarios = await db.TipoUsuario.findAll({
                where: {
                    estatus: 1
                }
            });

            res.render('users/signup', {
                tipoUsuarios
            });
        }catch(err){
            console.log(err);
        }
    },
    create: async(req = request, res = response) => {
        try{

            const errors = validationResult(req);
            
            if(!errors.isEmpty() || req.errorImagen || !req.file ){
                console.log({errors: errors.mapped()});
    
                if(!req.errorImagen && req.file ){
                    fs.unlinkSync(path.join(__dirname, `../../public/images/users/${ req.file.filename }`));
                }
                
                const tipoUsuarios = await db.TipoUsuario.findAll({
                    where: {
                        estatus: 1
                    }
                });
    
                return res.render('users/signup',{
                    errors: errors.mapped(), 
                    old: req.body,
                    tipoUsuarios,
                    errorImagen: {
                        msg: (req.errorImagen) ? req.errorImagen
                            : (!req.file) ? 'EL campo de la imagen es requerido' 
                            : ''
                    }
                });     
            }

            const [nombre_primero, nombre_segundo = ''] = req.body.nombres.split(' ');
            const [apellidoP, apellidoM = ''] = req.body.apellidos.split(' ');
            
            const user = {
                foto: req.file.filename,
                nombre_primero,
                nombre_segundo,
                apellidoP,
                apellidoM,
                tipo_usuario_id: req.body.categoria,
                correo: req.body.email,
                telefono: req.body.telefono,
                passwords: bcryptjs.hashSync(req.body.password, 10)
            }
            const userNew = await db.Usuario.create( user );
            console.log(userNew);
            delete userNew.dataValues.passwords;
            req.session.userLogged = userNew.dataValues;
            res.redirect('/user/profile');
        }catch(error){
            console.log(error);
        }

        
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