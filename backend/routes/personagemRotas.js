const express = require("express");
const {Personagem, Usuario} = require("../models");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const personagens = await Personagem.findAll();
        res.json(personagens);
    } catch (error) {
        res.status(500).json({
            error: "Erro ao listar personagens"
        });
    }
});

router.get("/:id", async (req, res) => {
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
});

router.post("/registrar", async (req, res) => {
    try {
        const {nome, classe, raca, nivel, usuarioId} = req.body;
        const usuario = await Usuario.findByPk(usuarioId);
        if(!usuario){
            res.status(404).json({
                error: "Usuário não encontrado"
            });
            return;
        }
        const personagem = await Personagem.create({
            nome,
            classe,
            raca,
            nivel,
            UsuarioId: usuarioId
        });
        return res.status(201).json(personagem);
    } catch (error) {
        return res.status(500).json({
            error: 'Erro ao criar personagem'
        });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const {nome, classe, raca, nivel} = req.body;
        const personagem = await Personagem.findByPk(id);
        if(!personagem){
            res.status(404).json({
                error: "Personagem não encontrado"
            });
            return;
        }
        personagem.nome = nome;
        personagem.classe = classe;
        personagem.raca = raca;
        personagem.nivel = nivel;
        await personagem.update({
            nome: nome,
            classe: classe,
            raca: raca,
            nivel: nivel
        });
        res.json(personagem);
    } catch (error) {
        res.status(500).json({
            error: "Erro ao atualizar o personagem"
        });
    }
});

router.delete("/:id", async (req, res) => {
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
});

module.exports = router;