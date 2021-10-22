const {request, response} = require('express');
const db = require('../../database/models');
const Op = db.Sequelize.Op;

const userController = {
    getUsers: async(req = request, res = response)=>{
        try {
            const pagina = Number(req.query.page) || 1;
            const paginado = pagina > 0 ? (pagina - 1) * 10 : 1;
            let respuesta = {
                meta:{
                    status: 200,
                    url: "/api/products",
                },
                msg: `Ya no hay productos en la pagina ${pagina} que busca`,
                products:[]
            };

            const [totalUser, users] = await Promise.all([
                db.Usuario.count({where:{estatus:1}}),
                db.Usuario.findAll({
                    where: {
                        estatus: 1
                    },
                    limit: 10,
                    offset: paginado,
                    attributes: [
                        'usuario_id', 
                        ['correo','email'],
                        [db.Sequelize.fn('concat', db.Sequelize.col('nombre_primero'),' ', db.Sequelize.col('nombre_segundo')), 'name'],
                        [db.Sequelize.fn('concat', '/api/users/',db.Sequelize.col('usuario_id')), 'detail']
                    ]
                })
            ]);

            if(users.length >= 1 && pagina >= 1){
                respuesta = {
                    meta: {
                        status: 200,
                        page: pagina,
                        url: `/api/users`,
                        total_users: totalUser,
                        total_page: users.length,
                        next: users.length === 10 ? `/api/users/?page=${pagina + 1}` : '',
                        previous: pagina > 1 ? `/api/users/?page=${pagina - 1}` : ''
                    },
                    users
                }
            }

            res.status(200).json(respuesta);
            
        } catch (err) {
            console.log(err);
            res.status(500).json({
                meta:{
                    status: 500,
                    url: '/api/users'
                },
                msg: err.message
            })
        }

    },
    getUser: async(req = request, res = response) =>{
        try {
            const id = Number(req.params.id);
            const [totalUsers, users] = await Promise.all([
                db.Usuario.count({where:{estatus:1}}),
                db.Usuario.findOne({
                where: {
                    estatus: 1,
                    usuario_id: id
                },
                attributes:[
                    'usuario_id',
                    ['correo', 'email'],
                    [
                        db.Sequelize.fn('concat',db.Sequelize.col('nombre_primero'),' ', db.Sequelize.col('nombre_segundo')),
                        'name'
                    ],
                    [
                        db.Sequelize.fn('concat',db.Sequelize.col('apellidoP'),' ',db.Sequelize.col('apellidoM')),
                        'last_name'
                    ],
                    ['telefono','telephone'],
                    [
                        db.Sequelize.fn('concat', '/images/users/', db.Sequelize.col('foto')),
                        'img'
                    ]
                ]
                })
            ]);

            res.status(200).json({
                meta:{
                    status: 200,
                    total_usuers: totalUsers,
                    total_page: 1,
                    url: `/api/users/${id}`
                },
                users
            });
            
        } catch (error) {
            console.log(err);
            res.status(500).json({
                meta:{
                    status: 500,
                    url: '/api/users'
                },
                msg: err.message
            })
        }
        
        
    }
};

module.exports = userController;