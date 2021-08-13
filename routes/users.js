const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController.js');

router.get('/signup', userController.signup);

router.get('/login', userController.login);

module.exports = router;