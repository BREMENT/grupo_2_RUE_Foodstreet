const express = require('express');
const carritoController = require('../controllers/carrito.js');
const router = express.Router();


router.get('/carrito', carritoController.carrito);


module.exports = router;