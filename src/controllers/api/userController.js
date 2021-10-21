const {request, response} = require('express');
const db = require('../../database/models');
const Op = db.Sequelize.Op;

const userController = {
    getUsers: (req = request, res = response)=>{
        db.Usuario.findAll({
            where: {
                estatus: 1
            },
            attributes: [
                'usuario_id', 
                ['correo','email'], //Select CONCAT(nombre_primer, ' ', nombre_segundo) as nombre from usuarios;
                [db.Sequelize.fn('concat', db.Sequelize.col('nombre_primero'),' ', db.Sequelize.col('nombre_segundo')), 'name'],
                [db.Sequelize.fn('concat', '/api/users/',db.Sequelize.col('usuario_id')), 'detail']
                // select concat('/api/users/',usuario_id) as detail from usuarios;
            ]
        }).then( data =>{
          
            res.status(200).json({
                meta: {
                    status: 200,
                    total: data.length,
                    url: `/api/users`
                },
                users: data
            });
        })
        .catch(console.log);// TODO: enviar el error

    },
    getUser: (req = request, res = response) =>{
        const id = Number(req.params.id);
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
        .then( data =>{
            res.status(200).json({
                meta:{
                    status: 200,
                    total: 1,
                    url: `/api/users/${id}`
                },
                users: data
            })
        })
        .catch(console.log)//TODO: mandar el error 

    }
};

module.exports = userController;