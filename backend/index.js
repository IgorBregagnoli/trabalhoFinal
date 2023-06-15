const express = require("express");
const app = express();
const port = 3001;
const db = require("./models");
const cors = require("cors");

app.use(express.urlencoded());
app.use(express.json());

app.use(cors());
const router = require("./routes/index");
app.use(router);

app.get("/", (req, res) => {
    res.send("Olá Mundo");
});

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log("Servidor Rodando na porta " + port);
    });
});