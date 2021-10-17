module.exports = (sequelize, dataTypes )=>{
    const alias = 'Usuario';
    const column = {
        usuario_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autorIncrement: true,
        },
        nombre_primero:{
            type: dataTypes.STRING,
            allowNull: false
        },
        nombre_segundo:{
            type: dataTypes.STRING,
            allowNull: false
        },
        apellidoP: { 
            type: dataTypes.STRING,
            allowNull: false
        },
        apellidoM: {
            type: dataTypes.STRING,
            allowNull: false
        },
        correo: { 
            type: dataTypes.STRING,
            unique: true,
            allowNull: false
        },
        passwords: {
            type: dataTypes.STRING,
            allowNull: false
        },
        foto:{
            type: dataTypes.STRING,
            allowNull: false
        },
        telefono:{
            type: dataTypes.STRING,
            allowNull: false
        },
        tipo_usuario_id:{
            type: dataTypes.INTEGER
        }
    };
    const config = {
        tableName: 'usuarios',
        timestamps: false
    }

    const Usuario = sequelize.define(alias, column, config);

    Usuario.associate = models =>{
        Usuario.belongsTo(models.TipoUsuario,{
            foreignKey: 'tipo_usuario_id',
            as: 'TipoUsuario'
        });

        Usuario.hasOne(models.Carrito,{
            foreignKey: 'usuario_id',
            as: 'UsuarioCarrito'
        });
    }

    return Usuario;
}