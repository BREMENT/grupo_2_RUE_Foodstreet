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
        },
        estatus: {
            type: dataTypes.INTEGER,
            defaultValue: 1
        }
    };
    const config = {
        tableName: 'tipo_usuarios',
        timestamps: false
    }
    const TipoUsuario = sequelize.define(alias, column, config);

    TipoUsuario.associate = models =>{
        TipoUsuario.hasMany(models.Usuario, {
            foreignKey: 'tipo_usuario_id',
            as:'TipoUsuario_usuario'
        });
    }

    return TipoUsuario;
}