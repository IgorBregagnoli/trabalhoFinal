module.exports = (sequelize, DataTypes) => {
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

    return Habilidade;
}