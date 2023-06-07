const {DataTypes} = require("sequelize");
const sequelize = require("../config/database");
const Personagem = require("./personagemModel");
const Habilidade = require("./habilidadeModel");

const Personagem_Habilidades = sequelize.define("Personagem_Habiidades", {
    personagem_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    habilidade_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
});

Personagem_Habilidades.belongsTo(Personagem, {
    foreignKey: "personagem_id"
});

Personagem_Habilidades.belongsTo(Habilidade, {
    foreignKey: "habilidade_id"
});

module.exports = Personagem_Habilidades;