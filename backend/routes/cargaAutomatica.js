const express = require("express");
const {Usuario, Personagem, Habilidade, Personagem_Habilidades} = require("../models");
const router = express.Router();

router.post("/registroAutomatico", async (req, res) => {
    try {
        const usuario1 = await Usuario.create({
            nome: "Gabriel",
            email: "gabriel@email.com",
            senha: "G@briel123"
        });
        const usuario2 = await Usuario.create({
            nome: "Sofia",
            email: "sofia@email.com",
            senha: "Sofia#2023"
        });
        const usuario3 = await Usuario.create({
            nome: "Lucas",
            email: "lucas@email.com",
            senha: "Lc$9876"
        });
        const usuario4 = await Usuario.create({
            nome: "Isabella",
            email: "isabella@email.com",
            senha: "Is@bella2023"
        });
        const usuario5 = await Usuario.create({
            nome: "Matheus",
            email: "matheus@email.com",
            senha: "M@theus456"           
        });
        const personagem1 = await Personagem.create({
            nome: "Aria Windrider",
            classe: "Ranger",
            raca: "Elfa da Floresta",
            nivel: 3,
            UsuarioId: usuario1.id
        });
        const personagem2 = await Personagem.create({
            nome: "Magnus Stormshield",
            classe: "Paladino",
            raca: "Anão da Montanha",
            nivel: 5,
            UsuarioId: usuario2.id
        });
        const personagem3 = await Personagem.create({
            nome: "Lyra Nightshade",
            classe: "Ladina",
            raca: "Meio-Elfa",
            nivel: 2,
            UsuarioId: usuario3.id
        });
        const personagem4 = await Personagem.create({
            nome: "Theron Blackthorn",
            classe: "Bruxo",
            raca: "Tiefling",
            nivel: 4,
            UsuarioId: usuario4.id
        });
        const personagem5 = await Personagem.create({
            nome: "Gwendolyn Lightfoot",
            classe: "Clériga",
            raca: "Halfling",
            nivel: 1,
            UsuarioId: usuario5.id
        });
        const novaHabilidade1 = await Habilidade.create({
            nome: "Flecha de Fogo",
            descricao: "O personagem infunde sua flecha com chamas mágicas, causando dano extra de fogo ao atingir o alvo"
        });
        const novaHabilidade2 = await Habilidade.create({
            nome: "Lâmina Sombria",
            descricao: "O personagem convoca uma lâmina de energia sombria que causa dano necrótico adicional ao atacar um inimigo."
        });
        const novaHabilidade3 = await Habilidade.create({
            nome: "Cura Curativa",
            descricao: "O personagem canaliza energia divina para curar ferimentos. Ao utilizar essa habilidade, ele recupera pontos de vida para si mesmo ou para aliados próximos."
        });
        const novaHabilidade4 = await Habilidade.create({
            nome: "Investida do Trovão",
            descricao: "O personagem se lança com grande velocidade contra um inimigo, desferindo um poderoso golpe que causa dano de trovão e empurra o alvo para trás."
        });
        const novaHabilidade5 = await Habilidade.create({
            nome: "Escudo Celestial",
            descricao: "O personagem invoca um escudo de energia celestial que o protege de ataques inimigos, concedendo uma bonificação na sua classe de armadura por um curto período de tempo."
        });
        const novaPersonagemHabilidade1 = await Personagem_Habilidades.create({
            personagem_id: personagem1.id,
            habilidade_id: novaHabilidade1.id,
            nivel: 3,
            escola: "Evocação",
            componentes: "V, S",
            alcance: "60 pés",
            dano: "1d8 de perfuração + 1d6 de fogo",
            usoDescanso: 2
        });
        const novaPersonagemHabilidade2 = await Personagem_Habilidades.create({
            personagem_id: personagem2.id,
            habilidade_id: novaHabilidade2.id,
            nivel: 5,
            escola: "Necromancia",
            componentes: "V, M (uma espada)",
            alcance: "Toque",
            dano: "2d6",
            usoDescanso: 1
        });
        const novaPersonagemHabilidade3 = await Personagem_Habilidades.create({
            personagem_id: personagem3.id,
            habilidade_id: novaHabilidade3.id,
            nivel: 3,
            escola: "Conjuração",
            componentes: "V, S",
            alcance: "Toque",
            dano: "N/A (cura)",
            usoDescanso: 3     
        });
        const novaPersonagemHabilidade4 = await Personagem_Habilidades.create({
            personagem_id: personagem4.id,
            habilidade_id: novaHabilidade4.id,
            nivel: 4,
            escola: "Transmutação",
            componentes: "V, S",
            alcance: "30 pés",
            dano: "2d8 de trovão",
            usoDescanso: 2   
        });
        const novaPersonagemHabilidade5 = await Personagem_Habilidades.create({
            personagem_id: personagem5.id,
            habilidade_id: novaHabilidade5.id,
            nivel: 1,
            escola: "Abjuração",
            componentes: "V, S",
            alcance: "Toque",
            dano: "N/A (defesa)",
            usoDescanso: 1    
        });
        res.json({
            usuario1,
            personagem1,
            novaHabilidade1,
            novaPersonagemHabilidade1
        })
    } catch (error) {
        res.status(500).json({
            error: "Erro ao cirar registros base"
        })
    }
});

module.exports = router;