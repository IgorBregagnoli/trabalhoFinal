module.exports = (sequelize, DataTypes) => {
    const Habilidade = sequelize.define("Habilidade", {
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    Habilidade.associate = (models) => {
        Habilidade.belongsToMany(models.Personagem, {
            through : "Personagem_Habilidades",
            foreignKey: "habilidade_id",
            onDelete: "CASCADE"
        });
    }
    
    return Habilidade;
}