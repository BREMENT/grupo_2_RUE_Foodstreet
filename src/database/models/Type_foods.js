module.exports = (sequelize, dataTypes ) =>{
    const alias = 'TipoComida';
    const column = {
        tipo_comida_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        descripcion: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        estatus:{
            type: dataTypes.INTEGER,
            defaultValue: 1
        }
    };
    const config = {
        tableName: 'tipo_comidas',
        timestamps: false
    };

    const TipoComida = sequelize.define(alias, column, config);
    
    TipoComida.associate = models =>{
        TipoComida.hasMany(models.Producto, {
            foreignKey: 'tipo_comida_id',
            as: 'TipoComida_producto'
        });
    }
    return TipoComida;
}