const { Router } = require('express');
const router = Router();

const typesCategoryController = require('../../controllers/api/typesCategoryController');

router.get('/categories', typesCategoryController.getCategories);
router.get('/categories/:id', typesCategoryController.getCategory);

module.exports = router;