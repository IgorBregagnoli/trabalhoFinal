const {Personagem, Habilidade, Personagem_Habilidades} = require("../models");

exports.associarHabilidade = async (req, res) => {
    try {
        const {personagemId, habilidadeId} = req.body;
        const personagem = await Personagem.findByPk(personagemId);
        const habilidade = await Habilidade.findByPk(habilidadeId);
        if(!personagem || !habilidade){
            return res.status(404).json({
                error: "Personagem ou habilidade não encontrados"
            });
        }
        await Personagem_Habilidades.destroy({
            where: {
                personagemId,
                habilidadeId,
            },
        });
        return res.status(200).json({
            message: "Habilidade desassociada com sucesso"
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "Ocorreu um erro ao desassociar a habilidade"
        });
    }
};