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
        }
    };
    const config = {
        tableName: 'tipo_comidas',
        timestamps: false
    };
    // TODO: relaciones
    const TipoComida = sequelize.define(alias, column, config);
    return TipoComida;
}