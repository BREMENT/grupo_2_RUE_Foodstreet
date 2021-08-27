const { v4: uuidv4 } = require('uuid');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const path = require('path');
const fs = require('fs');

const pathFile = path.join(__dirname, '../data/user.json');
const userList = JSON.parse(fs.readFileSync(pathFile, 'utf-8'));

const userController = {
    login: (req, res) => {
        res.render('users/login');
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

        let imagen = '';
        if(!req.file){
            imagen = 'aura.jpg';
        }else{
            imagen = req.file.filename;
        }

        const user = {
            id: uuidv4(),
            imagen: imagen,
            nombres: req.body.nombres,
            apellidos: req.body.apellidos,
            email: req.body.email,
            telefono: req.body.telefono,
            password: bcryptjs.hashSync(req.body.password, 10),
            categoria: req.body.categoria
        }

        userList.push( user );
        fs.writeFileSync(pathFile, JSON.stringify(userList,null,2));

        res.send('se registro el usuario');
    }

};

module.exports = userController;