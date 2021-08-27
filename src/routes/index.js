const express = require('express');
const indexController = require('../controllers/index.js');
const router = express.Router();


router.get('/', indexController.index);
router.get('/home',indexController.index);

module.exports = router;