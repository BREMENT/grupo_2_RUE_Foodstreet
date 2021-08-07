const express = require('express');
const router = express.Router();
const productoController = require('../controllers/producto.js');

// formulario para ver productos
router.get('/products', productoController.products);
// formulario para detalle de producto
router.get('/detalle', productoController.detalle);

// formulario para crear producto
router.get('/crear', productoController.create);
router.post('/crear', productoController.store);

// formulario para editar producto
router.get('/:id/editar', productoController.edit);
router.put('/:id/editar', productoController.update);


module.exports = router;