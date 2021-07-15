const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.js');

router.get('/registro', userController.sigup);

router.get('/login', userController.login);

module.exports = router;