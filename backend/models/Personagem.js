module.exports = (sequelize, DataTypes) => {
    const Personagem = sequelize.define("Personagem", {
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
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    Personagem.associate = (models) => {
        Personagem.belongsTo(models.Usuario, {
            foreignKey:{
                allowNull: false,
                onDelete: "CASCADE"
            }
        });
        Personagem.belongsToMany(models.Habilidade, {
            through: "Personagem_Habilidades",
            foreignKey: "personagem_id",
            onDelete: "CASCADE"
        });
    }

    return Personagem;
}