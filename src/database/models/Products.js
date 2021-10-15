module.exports = (sequelize, dataTypes) =>{
    const alias = '';
    const column = {
        producto_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        precio: {
            type: dataTypes.FLOAT,
            allowNull: false,
        },
        descuento:{
            type: dataTypes.FLOAT,
            allowNull: true,
        },
        // TODO: tipo_comida_id
        // TODO: tipo_categoria_id
        descripcion:{
            type: dataTypes.STRING,
            allowNull: false,
        },
        foto: {
            type: dataTypes.STRING,
            allowNull: false,
        }
    };
    const config = {
        tableName: 'productos',
        timestamps: false
    };

    //TODO: relaciones

    const Producto = sequelize.define(alias, column, config);
    return Producto;
}