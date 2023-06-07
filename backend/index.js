const express = require("express");
const {Sequelize} = require("sequelize");

const app = express();
const port = 3000;

app.use(express.urlencoded());
app.use(express.json());

const sequelize = new Sequelize("trabalhofinal", "root", "Bregagnoli1*", {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate().then(() => {
    console.log("Conexão com o banco de dados estabelecida com sucesso");
}).catch((error) => {
    console.error("Não foi possível conectar ao banco de dados:", error);
});

app.get("/", (req, res) => {
    res.send("Bem-vindo à API do meu projeto");
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});