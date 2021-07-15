const express = require('express');
const router = express.Router();
const productoController = require('../controllers/producto.js');

router.get('/producto', productoController.detalle);


module.exports = router;