const express = require("express");
const router = express.Router();

const usuarioRotas = require("./usuarioRotas");
const personagemRotas = require("./personagemRotas");
const habilidadeRotas = require("./habilidadeRotas");
const personagem_habilidade = require("./personagem_HabilidadesRotas");
const cargaAutomaticaRotas = require("./cargaAutomatica");

router.use("/usuarios", usuarioRotas);
router.use("/personagem", personagemRotas);
router.use("/habilidade", habilidadeRotas);
router.use("/personagem_habilidade", personagem_habilidade);
router.use("/cargaAutomatica", cargaAutomaticaRotas);

module.exports = router;