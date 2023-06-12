module.exports = (sequelize, DataTypes) => {
    const Personagem_Habilidades = sequelize.define("Personagem_Habilidades", {
        personagem_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        habilidade_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        nivel: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        escola: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        componentes: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        alcance: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        dano: {
            type: DataTypes.STRING,
            allowNull: true
        },
        usoDescanso: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    });

    return Personagem_Habilidades;
}