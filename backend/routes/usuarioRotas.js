const express = require("express");
const {Usuario} = require("../models");
const router = express.Router();

router.get("/", async (req, res) => {
    try{
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        res.status(error).json({
            error: "Erro ao listar"
        });
    }
});

router.get("/:id", async (req, res) => {
    try{
        const {id} = req.params;
        const usuario = await Usuario.findByPk(id);
        if(!usuario){
            res.status(404).json({
                error: "Usuário não encontrado"
            });
            return;
        }
        res.json(usuario);
    } catch (error) {
        res.status(500).json({
            error: "Erro ao obter usuário"
        });
    }
})

router.post("/registrar", async (req, res) => {
    const {nome, email, senha} = req.body;
    try {
        const usuario = await Usuario.create({
            nome,
            email,
            senha
        });
        res.json(usuario);
    } catch (error) {
        console.error("Erro ao criar usuário:", error);
        res.status(500).json({
            error: "Erro ao criar usuário"
        });
    }
});

router.put("/:id", async (req, res) => {
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
        await usuario.update({
            nome: nome,
            email: email,
            senha: senha,
        });
        res.json(usuario);
    } catch (error) {
        res.status(500).json({
            error: "Erro ao atualizar usuário"
        });
    }
});

router.delete("/:id", async (req, res) => {
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
            error: "Erro ao excluir"
        });
    }
});

module.exports = router;