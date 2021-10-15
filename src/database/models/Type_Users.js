module.exports = (sequelize, dataTypes ) =>{
    const alias = 'TipoUsuario';
    const column = {
        tipo_usuario_id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        descripcion:{
            type: dataTypes.STRING,
            allowNull: false
        }
    };
    const config = {
        tableName: 'tipo_usuarios',
        timestamps: false
    }

    // TODO: relaciones

    const TipoUsuario = sequelize.define(alias, column, config);
    return TipoUsuario;
}