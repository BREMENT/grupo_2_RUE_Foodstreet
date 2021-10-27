module.exports = (sequelize, dataTypes ) =>{
    const alias = 'TipoCategoria';
    const column = {
        tipo_categoria_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        descripcion: {
            type: dataTypes.STRING,
            allowNull: false
        },
        estatus: {
            type: dataTypes.INTEGER,
            defaultValue: 1
        }
    };
    const config = {
        tableName: 'tipo_categorias',
        timestamps: false
    };

    const TipoCategoria = sequelize.define(alias, column, config);

    TipoCategoria.associate = models =>{
        TipoCategoria.hasMany(models.Producto, {
            foreignKey: 'tipo_categoria_id',
            as: 'TipoCategoria_Producto'
        });
    }

    return TipoCategoria;
}