const {request, response} = require('express');
const db = require('../../database/models');

const productController = {
    getProducts: (req = request, res = response)=>{
        db.Producto.findAll({
            where:{
                estatus: 1
            },
            attributes:[
                ['producto_id', 'id'],
                ['nombre','name'],
                ['descripcion', 'description'],
                [
                    db.Sequelize.fn('concat', '/api/products/',db.Sequelize.col('producto_id')),
                    'detail'
                ]
            ],
            include:[
                {association: 'TipoComida'},
                {association: 'TipoCategoria'}
            ]
        })
        .then(data =>{
            console.log(data);
            res.status(200).json({
                meta:{
                    status: 200,
                    url: '/api/products',
                    total: data.length
                },
                products: data
            });
        })
        .catch(console.log);

    },
    getProduct: (req = request, res = response)=>{
        res.status(200).json({msg: 'ready'});
    }

}

module.exports = productController;