const {Router} = require('express');
const router = Router();

const userRouter = require('./userRoutes');
const productRouter = require('./productRouter');
const typeFoodRouter = require('./typeFoodRouter');
const typeCategoryRouter = require('./typeCategoryRouter');

router.use('/api', userRouter);
router.use('/api', productRouter);
router.use('/api', typeFoodRouter);
router.use('/api', typeCategoryRouter);

module.exports = router;