const express = require("express");
const router = express.Router();

const usuarioRotas = require("./usuarioRotas");
const personagemRotas = require("./personagemRotas");
const habilidadeRotas = require("./habilidadeRotas");
const personagem_habilidade = require("./personagem_HabilidadesRotas");

router.use("/usuarios", usuarioRotas);
router.use("/personagem", personagemRotas);
router.use("/habilidade", habilidadeRotas);
router.use("/personagem_habilidade", personagem_habilidade)

module.exports = router;