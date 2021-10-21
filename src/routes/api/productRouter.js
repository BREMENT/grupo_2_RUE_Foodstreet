const { Router } = require('express');
const router = Router();
// TODO: crear el controlador del producto
router.get('/products', (req, res)=>{
    res.status(200).json({msg: 'ready'});
});

router.get('/products/:id', (req, res)=>{
    res.status(200).json({msg: 'ready'});
});

module.exports = router;