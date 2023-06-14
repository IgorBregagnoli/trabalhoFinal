const express = require("express");
const {Personagem, Habilidade, Personagem_Habilidades} = require("../models");
const router = express.Router();
const passport = require("../auth/auth");

router.get("/", passport.authenticate("jwt", {session: false}), async (req, res) => {
    try {
        const personagemHabilidades = await Personagem_Habilidades.findAll();
        res.json(personagemHabilidades);
    } catch (error) {
        res.status(500).json({
            error: "Erro ao listar as habilidades dos personagens"
        });
    }
});

router.get("/personagem/:id", passport.authenticate("jwt", {session: false}), async (req, res) => {
    try {
        const {id} = req.params;
        const personagemHabilidades = await Personagem_Habilidades.findAll({
            where: {
                personagem_id: id
            }
        });
        if(!personagemHabilidades){
            res.status(404).json({
                error: "Habilidade de personagem não encontrada"
            });
            return;
        }
        res.json(personagemHabilidades);
    } catch (error) {
        res.status(500).json({
            error: "Erro ao obter a habilidade de personagem"
        });
    }
});

router.get("/habilidade/:id", passport.authenticate("jwt", {session: false}), async (req, res) => {
    try {
        const {id} = req.params;
        const personagemHabilidades = await Personagem_Habilidades.findAll({
            where: {
                habilidade_id: id
            }
        });
        if(!personagemHabilidades){
            res.status(404).json({
                error: "Habilidade de personagem não encontrada"
            });
            return;
        }
        res.json(personagemHabilidades);
    } catch (error) {
        res.status(500).json({
            error: "Erro ao obter a habilidade de personagem"
        });
    }
});

router.get("/personagem/:id/habilidade/:id2", passport.authenticate("jwt", {session: false}), async (req, res) => {
    try {
        const {id, id2} = req.params;
        const personagemHabilidades = await Personagem_Habilidades.findAll({
            where: {
                personagem_id: id,
                habilidade_id: id2
            }
        });
        if(!personagemHabilidades){
            res.status(404).json({
                error: "Habilidade de personagem não encontrada"
            });
            return;
        }
        res.json(personagemHabilidades);
    } catch (error) {
        res.status(500).json({
            error: "Erro ao obter a habilidade de personagem"
        });
    }
});

router.post("/registrar", passport.authenticate("jwt", {session: false}), async (req, res) => {
    try {
        const {personagemId, habilidadeId, nivel, escola, componentes, alcance, dano, usoDescanso} = req.body;
        const personagem = await Personagem.findByPk(personagemId);
        if(!personagem){
            res.status(404).json({
                error: "Personagem não encontrado"
            });
            return;
        }
        const habilidade = await Habilidade.findByPk(habilidadeId);
        if(!habilidade){
            res.status(404).json({
                error: "Habilidade não encontrada"
            });
            return;
        }
        const novaPersonagemHabilidade = await Personagem_Habilidades.create({
            personagem_id: personagemId,
            habilidade_id: habilidadeId,
            nivel,
            escola,
            componentes,
            alcance,
            dano,
            usoDescanso      
        });
        res.json(novaPersonagemHabilidade);
    } catch (error) {
        res.status(500).json({
            error: "Erro ao criar a habilidade do personagem"
        });
    }
});

router.put("/personagem/:id/habilidade/:id2", passport.authenticate("jwt", {session: false}), async (req, res) => {
    try {
        const {id, id2} = req.params;
        const {nivel, escola, componentes, alcance, dano, usoDescanso} = req.body;
        const personagemHabilidades = await Personagem_Habilidades.findOne({
            where: {
                personagem_id: id,
                habilidade_id: id2
            }
        });
        if(!personagemHabilidades){
            res.status(404).json({
                error: "Habilidade de personagem não encontrada"
            });
            return;
        }
        personagemHabilidades.nivel = nivel;
        personagemHabilidades.escola = escola;
        personagemHabilidades.componentes = componentes;
        personagemHabilidades.alcance = alcance;
        personagemHabilidades.dano = dano;
        personagemHabilidades.usoDescanso = usoDescanso;
        res.json(personagemHabilidades);
        await personagemHabilidades.update({
            nivel: nivel,
            escola: escola,
            componentes: componentes,
            alcance: alcance,
            dano: dano,
            usoDescanso: usoDescanso
        });
    } catch (error) {
        res.status(500).json({
            error: "Erro ao atualizar habilidade do personagem"
        });
    }
});

router.delete("/personagem/:id/habilidade/:id2", passport.authenticate("jwt", {session: false}), async (req, res) => {
    try {
        const {id, id2} = req.params;
        const personagemHabilidades = await Personagem_Habilidades.findOne({
            where: {
                personagem_id: id,
                habilidade_id: id2
            }
        });
        if(!personagemHabilidades){
            res.status(404).json({
                error: "Habilidade de personagem não encontrada"
            });
            return;
        }
        await personagemHabilidades.destroy();
        res.json({
            message: "Habilidade de personagem excluída com sucesso"
        })
    } catch (error) {
        res.status(500).json({
            error: "Erro ao excluir a habilidade de personagem"
        });
    }
});

module.exports = router;