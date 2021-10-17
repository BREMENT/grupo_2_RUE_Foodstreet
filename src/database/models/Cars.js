module.exports = (sequelize, dataTypes ) =>{
    const alias = 'Carrito';
    const column = {
        carrito_id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        cantidad_items:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        precio_total:{
            type: dataTypes.FLOAT,
            allowNull: false
        },
        usuario_id: {
            type: dataTypes.INTEGER
        }
    };
    const config = {
        tableName: 'carritos',
        timestamps: false
    };

    const Carrito = sequelize.define(alias, column, config);

    Carrito.associate = models =>{
        Carrito.belongsTo(models.Usuario,{
            foreignKey: 'usuario_id',
            as: 'CarritoUsuario'
        });
    }

    return Carrito;
}