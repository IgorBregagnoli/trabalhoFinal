const {DataTypes} = require("sequelize");
const sequelize = require("../config/database");
const User = require("./usuarioModel");
const Habilidade = require("./habilidadeModel");

const Personagem = sequelize.define("Personagem", {
    id: {
        type: DataTypes.INTEGER,
        primeryKey: true,
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

Personagem.belongsTo(User, {
    foreignKey: "user_id"
});

Personagem.belongsToMany(Habilidade, {
    through: 'Personagem_Habilidades',
    foreignKey: 'personagem_id'
});

module.exports = Personagem;