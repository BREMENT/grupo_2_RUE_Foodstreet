const express = require('express');
const indexController = require('../controllers/index.js');
const router = express.Router();


router.get('/', indexController.index);


module.exports = router;