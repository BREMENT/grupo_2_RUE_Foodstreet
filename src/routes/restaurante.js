const express = require('express');
const router = express.Router();
const restauranteController = require('../controllers/restaurante.js');

router.get('/restaurante', restauranteController.detalle);


module.exports = router;