module.exports = (sequelize, dataTypes) =>{
    const alias = 'Producto';
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
        tipo_comida_id:{
            type: dataTypes.INTEGER
        },
        tipo_categoria_id:{
            type: dataTypes.INTEGER
        },
        descripcion:{
            type: dataTypes.STRING,
            allowNull: false,
        },
        foto: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        estatus: {
            type: dataTypes.INTEGER,
            defaultValue: 1
        }
    };
    const config = {
        tableName: 'productos',
        timestamps: false
    };

    const Producto = sequelize.define(alias, column, config);

    Producto.associate = models =>{
        Producto.belongsTo(models.TipoCategoria,{
            foreignKey: 'tipo_categoria_id',
            as: 'TipoCategoria'
        });

        Producto.belongsTo(models.TipoComida,{
            foreignKey: 'tipo_comida_id',
            as: 'TipoComida'
        });
    }
    return Producto;
}