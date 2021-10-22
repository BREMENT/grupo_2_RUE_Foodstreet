const { Router } = require('express');
const router = Router();
// TODO: crear el controlador del producto

const productController = require('../../controllers/api/productController');

router.get('/products', productController.getProducts);
router.get('/products/:id', productController.getProduct);

module.exports = router;