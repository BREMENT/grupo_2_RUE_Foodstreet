const {request, response} = require('express');
const db = require('../../database/models');

const typesFoodController = {

    getFoods: async(req = request, res = response) => {
        try {
            const [countFoods, foods] = await Promise.all([
                db.TipoComida.count({where:{estatus:1}}),
                db.TipoComida.findAll({
                    where: {
                        estatus: 1
                    },
                    include: [{association: 'TipoComida_producto'}]
                })
            ]) 

            res.status(200).json({ 
                meta:{
                    status: 200,
                    url: '/api/foods',
                    total_foods: countFoods,
                    total_page: foods.length
                },
                foods
            });

        } catch (error) {
            console.log(error);

            res.status(500).json({
                meta: {
                    status: 500,
                    url: '/api/foods'
                },
                msg: error.message
            });
        }
    }, 
    getFood: async(req = request, res = response) =>{
        try {
            const id = Number(req.params.id);

            const [countFood, foods] = await Promise.all([
                db.TipoComida.count({where:{estatus:1}}),
                db.TipoComida.findOne({
                    where: {
                        estatus: 1,
                        tipo_comida_id: id
                    },
                    include: [{association:'TipoComida_producto'}]
                })
            ])

            res.status(200).json({
                meta:{
                    status: 200,
                    url: `/api/foods/${id}`,
                    total_food: countFood,
                    total_page: 1
                },
                foods
            });

        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = typesFoodController;