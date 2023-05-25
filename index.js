const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Página inicial");
});

app.listen(port, () => {
    console.log("Servidor Iniciado");
});