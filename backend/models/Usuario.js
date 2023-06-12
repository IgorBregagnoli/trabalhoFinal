module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define("Usuario", {
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    Usuario.associate = (models) => {
        Usuario.hasMany(models.Personagem, {
            onDelete: "CASCADE",
            hooks: true
        });
    }

    return Usuario;
}