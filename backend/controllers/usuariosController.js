const Usuario = require("../models/usuarioModel");

exports.listarUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({
            error: "Erro ao listar"
        });
    }
};

exports.obterUsuario = async (req, res) => {
    try {
        const {id} = req.params;
        const usuario = await Usuario.findByPk(id);
        if(!usuario){
            res.status(404).json({
                error: "Usuário não encontrado"
            });
            return;
        }
        res.json(usuario);
    } catch (error){
        res.status(500).json({
            error: "Erro ao obter usuário"
        });
    }
};

exports.criarUsuario = async (req, res) => {
    try {
        const {nome, email, senha} = req.body;
        const novoUsuario = await Usuario.create({
            nome, email, senha
        });
        res.json(novoUsuario);
    } catch (error) {
        res.status(500).json({
            error: "Erro ao criar usuário"
        });
    }
}

exports.atualizarUsuario = async (req, res) => {
    try {
        const {id} = req.params;
        const {nome, email, senha} = req.body;
        const usuario = await Usuario.findByPk(id);
        if(!usuario){
            res.status(404).json({
                error: "Usuário não encontrado"
            });
            return;
        }
        usuario.nome = nome;
        usuario.email = email;
        usuario.senha = senha;
        await usuario.save();
        res.json(usuario);
    } catch (error) {
        res.status(500).json({
            error: "Erro ao atualizar usuário"
        });
    }
};

exports.excluirUsuario = async (req, res) => {
    try {
        const {id} = req.params;
        const usuario = await Usuario.findByPk(id);
        if(!usuario){
            res.status(404).json({
                error: "Usuário não encontrado"
            });
            return;
        }
        await usuario.destroy();
        res.json({
            message: "Usuário excluído com sucesso"
        });
    } catch (error) {
        res.status(500).json({
            error: "Erro ao excluir usuário"
        });
    }
};