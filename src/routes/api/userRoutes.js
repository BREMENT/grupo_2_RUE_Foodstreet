const { Router } = require('express');
const router = Router();

const userController = require('../../controllers/api/userController');

router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUser);

module.exports = router;