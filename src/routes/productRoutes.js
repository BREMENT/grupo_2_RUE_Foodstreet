const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productController.js');
const upload = require('../middlewares/multerproducto');
const { validationsProduct } = require('../middlewares/validationMiddleware');
const sellerMiddleware = require('../middlewares/sellerMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

// formulario para ver productos
router.get('/', productoController.products);
// formulario para detalle de producto authMiddleware
router.get('/detalle/:id', authMiddleware ,productoController.detalle);// autenticacion

// formulario para crear producto
router.get('/crear', sellerMiddleware ,productoController.create);
router.post('/crear/add',(req, res, next)=>{
    upload(req, res, (err)=>{
        if(err){
            console.log('Revento la creacion de producto');
            console.log(err.message);
            req.errorImagen = err.message;
        }

        next();
    });
}, validationsProduct, productoController.store);

// formulario para editar producto sellerMiddleware
router.get('/editar/:id', sellerMiddleware ,productoController.edit);
router.put('/editar/:id', (req, res, next)=>{
    upload(req, res, (err)=>{
        if(err){
            console.log('Revento en edicion');
            console.log(err.message);
            req.errorImagen = err.message;
        }
        next();
    });
} ,validationsProduct,  productoController.update);

router.get('/busqueda', productoController.busqueda);

// sellerMiddleware
router.put('/destroy/:id', sellerMiddleware ,productoController.destroy);

module.exports = router;