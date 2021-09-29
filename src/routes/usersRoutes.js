const express = require('express');
const router = express.Router();

// controller
const userController = require('../controllers/usersController');

// middlewares
const { validationsSignup, validationsLogin } = require('../middlewares/validationMiddleware');

const loggedMiddleware = require('../middlewares/loggedMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const upload = require('../middlewares/multerMiddleware');

router.get('/signup', loggedMiddleware ,userController.signup);
router.post('/create',upload.single('perfil'), validationsSignup ,userController.create);

router.get('/login', loggedMiddleware ,userController.login);
router.post('/enter', validationsLogin ,userController.enter);

router.get('/profile', authMiddleware ,userController.profile);

router.get('/logout', authMiddleware, userController.logout);

module.exports = router;