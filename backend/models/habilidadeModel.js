const {DataTypes} = require("sequelize");
const sequelize = require("../config/database");

const Habilidade = sequelize.define("Habilidade", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Habilidade;