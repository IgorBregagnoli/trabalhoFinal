module.exports = (sequelize, DataTypes) => {
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

    Personagem_Habilidades.associate = (models) =>{

        Personagem_Habilidades.belongsTo(models.Personagem, {
            foreignKey: "personagem_id"
        });

        Personagem_Habilidades.belongsTo(models.Habilidade, {
            foreignKey: "habilidade_id"
        });
    }

    return Personagem_Habilidades;
}