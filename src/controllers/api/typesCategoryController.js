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
                count,
                categories
            });

        } catch (error) {
            console.log(error);
        }
    },
    getCategory: (req = request, res = response) =>{
        try {
            
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = typesCategoryController;