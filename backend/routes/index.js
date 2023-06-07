const express = require("express");
const router = express.Router();

const usuariosRoutes = require("./usuariosRoutes");
const personagensRoutes = require("./personagensRoutes");
const habilidadesRoutes = require("./habilidadesRoutes");
const personagemHabilidadesRoutes = require("./personagemHabilidadesRoutes");

router.use("/usuarios", usuariosRoutes);
router.use("/personagens", personagensRoutes);
router.use("/habilidades", habilidadesRoutes);
router.use("/personagem-habilidades", personagemHabilidadesRoutes);

module.exports = router;