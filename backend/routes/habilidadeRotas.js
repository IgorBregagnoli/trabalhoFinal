const express = require("express");
const {Habilidade} = require("../models");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const habilidades = await Habilidade.findAll();
        res.json(habilidades);
    } catch (error) {
        res.status(500).json({
            error: "Erro ao listar habilidades"
        });
    }
});

router.get("/:id", async (req, res) => {
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
});

router.post("/registrar", async (req, res) => {
    try {
        const {nome, descricao} = req.body;
        const novaHabilidade = await Habilidade.create({
            nome,
            descricao
        });
        res.json(novaHabilidade);
    } catch (error) {
        res.status(500).json({
            error: "Erro ao criar a habilidade"
        });
    }
});

router.put("/:id", async (req, res) => {
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
        await habilidade.update({
            nome: nome,
            descricao: descricao
        })
        res.json(habilidade);
    } catch (error) {
        res.status(500).json({
            error: "Erro ao atualizar habilidade"
        });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const habilidade = await Habilidade.findByPk(id);
        if(!habilidade){
            res.status(404).json({
                error: "Habilidade não encontrada"
            });
        }
        await habilidade.destroy();
        res.json({
            message: "Habilidade excluída com sucesso"
        });
    } catch (error) {
        res.status(500).json({
            error: "Erro ao excluirr habilidade"
        });
    }
});

module.exports = router;