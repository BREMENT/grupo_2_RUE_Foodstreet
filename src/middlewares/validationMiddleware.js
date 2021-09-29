const { check } = require('express-validator');
const UserModel = require('../models/Users');

const validationsSignup = [
    check('nombres')
    .notEmpty().withMessage('El campo no debe ir vacio').bail()
    .isAlpha('es-ES', {ignore: '\s'}).withMessage('El valor debe ser alfabetico').bail()
    .isLength({min: 3}).withMessage('El campo debe contener al menos 3 caracteres').bail()
    ,
    check('apellidos')
    .notEmpty().withMessage('El campo no debe ir vacio').bail()
    .isAlpha('es-ES',{ignore: '\s'}).withMessage('El valor debe ser alfabetico').bail()
    .isLength({min: 3}).withMessage('El campo debe contener almenos 3 caracteres').bail()
    ,
    check('email')
    .notEmpty().withMessage('El campo email no debe ir vacio').bail()
    .isEmail().withMessage('El campo debe de contener un email valido').bail()
    .custom( (value)=>{
        const emailExist = UserModel.findField('email', value);
        if(emailExist){
            throw new Error('adsdsd');
        }
        return true;
    })
    ,
    check('telefono')
    .notEmpty().withMessage('El campo no debe ir vacio').bail()
    .isMobilePhone().withMessage('El campo debe contener un numero telefonico').bail()
    .custom( (value)=>{
        const numberExist = UserModel.findField('telefono', value);
        if(numberExist){
            throw new Error("El numero telefonico que ingreo ya existe");
        }
        return true;
    })
    ,
    check('password')
    .notEmpty().withMessage('El campo no debe ir vacio').bail()
    .isLength({min: 8}).withMessage('El password debe ser debe contener al menos 8 caracteres').bail()
    .isStrongPassword().withMessage('El password no es muy fuerte').bail()
    ,
    check('categoria')
    .notEmpty().withMessage('El campo no debe ir vacior').bail(),
];

const validationsLogin = [
    check('email')
    .notEmpty().withMessage('El campo email no debe ir vacio').bail()
    .isEmail().withMessage('El campo debe de contener un email valido').bail()
    ,
    check('password')
    .notEmpty().withMessage('El campo no debe ir vacio').bail()
    .isLength({min: 8}).withMessage('El password debe ser debe contener al menos 8 caracteres').bail()
    .isStrongPassword().withMessage('El password no es muy fuerte').bail()
    ,
]

const validationsProduct = [
    check('name')
    .notEmpty().withMessage('El campo del nombre no debe ir vacio').bail()
    .isLength({min: 5}).withMessage('El campo debe contener almenos 3 caracteres').bail()
    .isAlpha('es-ES',{ignore: '\s'}).withMessage('El campo debe ser alfabetico').bail()
    ,
    check('price')
    .notEmpty().withMessage('El campo del precio no debe ir vacio').bail()
    .isFloat().withMessage('El campo debe ser un float').bail()
    ,
    check('discount')
    .notEmpty().withMessage('El campo del descuento no debe ir vacio').bail()
    .isFloat().withMessage('El campo debe contener un descuento numerico').bail()
    ,
    check('category')
    .notEmpty().withMessage('Se debe seleccionar alguna categoria').bail()
    ,
    check('food_type')
    .notEmpty().withMessage('Se debe seleccionar algun tipo de comida').bail()
    ,
    check('description')
    .notEmpty().withMessage('El campo de la descripción no debe ir vacio').bail()
    .isAlpha('es-ES',{ignore: '\s'}).withMessage('El campo debe ser alfabetico').bail()
    .isLength({min: 20}).withMessage('').bail()
    ,
]

module.exports = {
    validationsSignup,
    validationsLogin,
    validationsProduct
}