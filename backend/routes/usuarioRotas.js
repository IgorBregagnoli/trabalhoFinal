const express = require("express");
const {Usuario} = require("../models");
const router = express.Router();
const passport = require("../auth/auth");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

router.get("/", passport.authenticate("jwt", {session: false}), async (req, res) => {
    try{
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        res.status(error).json({
            error: "Erro ao listar"
        });
    }
});

router.get("/:id", passport.authenticate("jwt", {session: false}), async (req, res) => {
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
});

router.get("/busca/perfil", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const userId = req.user.id;
        const usuario = await Usuario.findByPk(userId, {
            attributes: ["id", "nome", "email"]
        });
        if (usuario) {
            res.json(usuario.id);
        } else {
        res.status(404).json({
            error: "Usuário não encontrado"
        });
        }
    } catch (error) {
        res.status(500).json({
            error: "Erro ao obter perfil do usuário"
        });
    }
});

router.post("/registrar", async (req, res) => {
    const {nome, email, senha} = req.body;
    try {
        const usuario = await Usuario.create({
            nome,
            email,
            senha: await bcrypt.hash(senha, 10)
        });
        const token = jwt.sign({id: usuario.id}, "trabalhoFinal", {expiresIn: "1h"});
        res.json({usuario, token});
    } catch (error) {
        console.error("Erro ao criar usuário:", error);
        res.status(500).json({
            error: "Erro ao criar usuário"
        });
    }
});

router.post("/login", async (req, res) => {
    const {email, senha} = req.body;
    try {
        const usuario = await Usuario.findOne({
            where: {email}
        });
        if(!usuario){
            res.status(401).json({
                error: "Usuário não encontrado"
            });
            return;
        }
        const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
        if(!senhaCorreta){
            res.status(401).json({
                error: "Senha Incorreta",
            });
            return;
        }
        const token = jwt.sign({id: usuario.id}, "trabalhoFinal", {expiresIn: "1h"});
        res.json({usuario, token});
    } catch (error) {
        res.status(500).json({
            error: "Erro ao autenticar usuário"
        });
    }
});

router.put("/:id", passport.authenticate("jwt", {session: false}), async (req, res) => {
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

router.delete("/:id", passport.authenticate("jwt", {session: false}), async (req, res) => {
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