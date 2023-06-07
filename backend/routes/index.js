const userRoutes = require("./usersRoutes");
const personagensRoutes = require("./personagensRoutes");
const habilidadesRoutes = require("./habilidadesRoutes");

const router = express.Router();

router.use("/usuarios", userRoutes);
router.use("/personagens", personagensRoutes);
router.use("/habilidades", habilidadesRoutes);

module.exports = router;