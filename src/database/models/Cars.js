module.exports = (sequelize, dataTypes ) =>{
    const alias = 'Carrito';
    const column = {
        carrito_id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        // TODO: usuario_id
        cantidad_items:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        precio_total:{
            type: dataTypes.FLOAT,
            allowNull: false
        }
    };
    const config = {
        tableName: 'carritos',
        timestamps: false
    };
    // TODO: relaciones
    const Carrito = sequelize.define(alias, column, config);
    return Carrito;
}