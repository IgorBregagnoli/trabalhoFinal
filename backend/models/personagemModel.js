const {User} = require("./usuarioModel");

module.exports = (sequelize, DataTypes) =>{
    const Personagem = sequelize.define("Personagem", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        classe: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        raca: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nivel: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: "id",
            },
        },
    });

    Personagem.associate = (models) =>{
        Personagem.belongsTo(models.User, {
            foreignKey: "user_id"
        });

        Personagem.belongsToMany(models.Habilidade, {
            through: 'Personagem_Habilidades',
            foreignKey: 'personagem_id'
        });
    }

    return Personagem;
}