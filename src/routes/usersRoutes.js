const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');
const { validationsSignup, validationsLogin } = require('../middlewares/validationMiddleware');
const upload = require('../middlewares/multerMiddleware');

router.get('/signup', userController.signup);
router.post('/create', upload.single('perfil') , validationsSignup, userController.create);

router.get('/login', userController.login);
router.post('/enter', validationsLogin ,userController.enter);

module.exports = router;