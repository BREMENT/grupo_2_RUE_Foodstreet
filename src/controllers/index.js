const {request, response} = require('express');
const db = require('../database/models');

const indexController = {
    index: async(req = request, res = response)=>{

        try {
            const products = await db.Producto.findAll({
                where: {
                    estatus: 1
                },
                order:[
                    ['producto_id','desc']
                ],
                limit: 4
            });
            // console.log(products);
            res.render('inicio', {products});
        } catch (err) {
            console.log(err);
        }

    }
}

module.exports = indexController;