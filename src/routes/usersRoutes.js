const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');
const validation = require('../middlewares/validationMiddleware');
const upload = require('../middlewares/multerMiddleware');

router.get('/signup', userController.signup);
router.post('/create', upload.single('perfil') ,validation, userController.create);

router.get('/login', userController.login);

module.exports = router;