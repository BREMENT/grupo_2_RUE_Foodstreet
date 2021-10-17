const db = require('../database/models');
const Op = db.Sequelize.Op;

const validationExistEmail = async(email) =>{

    const exist = await db.Usuario.findOne({
        where:{
            correo: email
        }
    });

    if(exist){
        throw new Error("El correo ya esta registrado");
    }

}

const validationExistNumber = async(numero) =>{
    
    const exist = await db.Usuario.findOne({
        where: {
            telefono: numero
        }
    });
    if(exist){
        throw new Error("El numero ya esta registrado");
    }
}

module.exports = {
    validationExistEmail,
    validationExistNumber
}