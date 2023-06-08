const Habilidade = require("../models/habilidadeModel");

exports.listarHabilidades = async (req, res) => {
    try {
        const habilidades = await Habilidade.findAll();
        res.json(habilidades);
    } catch (error){
        res.status(500).json({
            error: "Erro ao listar habilidades"
        });
    }
};

exports.obterHabilidade = async (req, res) => {
    try {
        const {id} = req.params;
        const habilidade = await Habilidade.findByPk(id);
        if(!habilidade){
            res.status(404).json({
                error: "Habilidade não encontrada"
            });
            return;
        }
        res.json(habilidade);
    } catch (error) {
        res.status(500).json({
            error: "Erro ao obter habilidade"
        });
    }
};

exports.criarHabilidade = async (req, res) => {
    try {
        const {nome, descricao} = req.body;
        const novaHabilidade = await Habilidade.create({
            nome, descricao
        });
        res.json(novaHabilidade);
    } catch (error) {
        res.status(500).json({
            error: "Erro ao criar habilidade"
        });
    }
}

exports.atualizaHabilidade = async (req, res) => {
    try {
        const {id} = req.params;
        const {nome, descricao} = req.body;
        const habilidade = await Habilidade.findByPk(id);
        if(!habilidade){
            res.status(404).json({
                error: "Habilidade não encontrada"
            });
            return;
        }
        habilidade.nome = nome;
        habilidade.descricao = descricao;
        await habilidade.save();
        res.json(habilidade);
    } catch (error) {
        res.status(500).json({
            error: "Erro ao atualizar habilidade"
        });
    }
};

exports.excluirHabilidade = async (req, res) => {
    try {
        const {id} = req.params;
        const habilidade = await Habilidade.findByPk(id);
        if(!habilidade){
            res.status(404).json({
                error: "Habilidade não encontrada"
            });
            return;
        }
        await habilidade.destroy();
        res.json({
            message: "Habilidade excluída com sucesso"
        });
    } catch (error) {
        res.status(500).json({
            error: "Erro ao excluir habilidade"
        });
    }
};