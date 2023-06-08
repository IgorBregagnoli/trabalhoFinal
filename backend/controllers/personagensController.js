const Personagem = require("../models/personagemModel");

exports.listarPersonagens = async (req, res) => {
    try {
        const personagens = await Personagem.findAll();
        res.json(personagens);
    } catch (error) {
        res.status(500).json({
            error: "Erro ao listar personagens"
        });
    }
};

exports.obterPersonagem = async (req, res) => {
    try {
        const {id} = req.params;
        const personagem = await Personagem.findByPk(id);
        if(!personagem){
            res.status(404).json({
                error: "Personagem não encontrado"
            });
        }
        res.json(personagem);
    } catch (error) {
        res.status(500).json({
            error: "Erro ao obter personagem"
        });
    }
};

exports.criarPersonagem = async (req, res) => {
    try {
        const {nome, classe, raca, nivel, user_id} = req.body;
        const novoPersonagem = await Personagem.create({
            nome, classe, raca, nivel, user_id
        });
        res.json(novoPersonagem);
    } catch (error) {
        res.status(500).json({
            error: "Erro ao criar personagem"
        });
    }
};

exports.atualizarPersonagem = async (req, res) => {
    try {
        const {id} = req.params;
        const {nome, classe, raca, nivel, user_id} = req.body;
        const personagem = await Personagem.findByPk(id);

        if(!personagem){
            res.status(404).json({error: "Personagem não encontrado"});
            return;
        }

        personagem.nome = nome;
        personagem.classe = classe;
        personagem.raca = raca;
        personagem.nivel = nivel;
        personagem.user_id = user_id;
        await personagem.save();
        res.json(personagem);
    } catch (error) {
        res.status(500).json({
            error: "Erro ao atualizar personagem"
        });
    }
};

exports.excluirPersonagem = async (req, res) => {
    try {
        const {id} = req.params;
        const personagem = await Personagem.findByPk(id);
        if(!personagem){
            res.status(404).json({
                error: "Personagem não encontrado"
            });
            return;      
        }
        await personagem.destroy();
        res.json({
            error: "Personagem excluído com sucesso"
        });
    } catch (error) {
        res.status(500).json({
            error: "Erro ao excluir personagem"
        });
    }
}