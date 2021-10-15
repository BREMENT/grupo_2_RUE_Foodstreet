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
        }
    };
    const config = {
        tableName: 'tipo_categorias',
        timestamps: false
    };

    // TODO: relaciones
    const TipoCategoria = sequelize.define(alias, column, config);
    return TipoCategoria;
}