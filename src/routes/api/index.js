const {Router} = require('express');
const router = Router();

const userRouter = require('./userRoutes');
const productRouter = require('./productRouter');

router.use('/api', userRouter);
router.use('/api', productRouter);

module.exports = router;