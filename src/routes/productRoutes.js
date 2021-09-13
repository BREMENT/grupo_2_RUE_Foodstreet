const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productController.js');
const upload = require('../middlewares/multerproducto');
const { validationsProduct } = require('../middlewares/validationMiddleware');
const sellerMiddleware = require('../middlewares/sellerMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

// formulario para ver productos
router.get('/', productoController.products);
// formulario para detalle de producto
router.get('/detalle/:id', authMiddleware, productoController.detalle);// autenticacion

// formulario para crear producto
router.get('/crear', sellerMiddleware ,productoController.create);
router.post('/crear', upload.single('productImage'), validationsProduct ,productoController.store);

// formulario para editar producto
router.get('/editar/:id', sellerMiddleware ,productoController.edit);
router.put('/editar/:id', validationsProduct,  productoController.update);

router.delete('/destroy/:id', sellerMiddleware ,productoController.destroy);

module.exports = router;