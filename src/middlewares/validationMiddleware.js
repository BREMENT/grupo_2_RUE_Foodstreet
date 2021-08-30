const { check } = require('express-validator');

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
    ,
    check('telefono')
    .notEmpty().withMessage('El campo no debe ir vacio').bail()
    .isMobilePhone().withMessage('El campo debe contener un numero telefonico').bail()
    ,
    check('password')
    .notEmpty().withMessage('El campo no debe ir vacio').bail()
    .isLength({min: 8}).withMessage('El password debe ser debe contener al menos 8 caracteres').bail()
    .isStrongPassword().withMessage('El password no es muy fuerte').bail()
    ,
    check('categoria')
    .notEmpty().withMessage('El campo no debe ir vacior').bail()
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

module.exports = {
    validationsSignup,
    validationsLogin
}