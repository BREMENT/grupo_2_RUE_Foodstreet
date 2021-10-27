const {request, response} = require('express');
const db = require('../../database/models');

const typesCategoryController = {
    getCategories: async(req = request, res = response) =>{
        try {
            const [count, categories] = await Promise.all([
                db.TipoCategoria.count({where:{estatus:1}}),
                db.TipoCategoria.findAll({
                    where:{
                        estatus: 1
                    },
                    include: [{association: 'TipoCategoria_Producto'}]
                })
            ]);

            res.status(200).json({
                meta:{
                    status: 200,
                    url: '/api/categories',
                    total_categories: count,
                    total_page: categories.length
                },
                categories
            });

        } catch (error) {
            console.log(error);
            res.status(500).json({
                meta: {
                    status: 500,
                    url: '/api/categories'
                },
                msg: error.message
            })
        }
    },
    getCategory: async(req = request, res = response)=>{
        try {
            const id = Number(req.params.id);
            const [count, categories] = await Promise.all([
                db.TipoCategoria.count({where:{estatus:1}}),
                db.TipoCategoria.findOne({
                    where: {
                        estatus: 1,
                        tipo_categoria_id: id
                    },
                    include: [{association: 'TipoCategoria_Producto'}]
                })
            ]);

            res.status(200).json({
                meta:{
                    status: 200,
                    url: `/api/categories/${id}`,
                    total_categories: count,
                    total_page: 1
                },
                categories
            });

        } catch (error) {
            console.log(error);
            res.status(500).json({
                meta: {
                    status: 500,
                    url: '/api/categories'
                },
                msg: error.message
            })
        }
    }
}

module.exports = typesCategoryController;