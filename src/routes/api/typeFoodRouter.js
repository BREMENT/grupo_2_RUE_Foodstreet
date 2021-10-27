const { Router } = require('express');
const router = Router();

const typesFoodController = require('../../controllers/api/typesFoodController');

router.get('/foods', typesFoodController.getFoods);
router.get('/foods/:id', typesFoodController.getFood);

module.exports = router;