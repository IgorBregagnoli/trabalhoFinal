const express = require("express");
const app = express();
const port = 3000;
const path = require('path');

const mustacheExpress = require("mustache-express");
const engine = mustacheExpress();

app.engine("mustache", engine);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "mustache");

app.use(express.urlencoded());
app.use(express.json());

app.get("/", (req, res) => {
    args = {
        'titulo': 'Página Inicial',
        'header': 'Música Hoje',
        'footer': 'Todos os direitos a um 10 reservados'
    }

    res.render("index", args);
});

app.get("/descricao", (req, res) => {
    args = {
        'titulo': 'Página de Descrição',
        'header': 'Música Hoje',
        'footer': 'Todos os direitos a um 10 reservados'
    }

    res.render("descricao", args);
});

app.get("/tecnologia", (req, res) => {
    args = {
        'titulo': 'Página de Tecnologias',
        'header': 'Música Hoje',
        'footer': 'Todos os direitos a um 10 reservados'
    }

    res.render("tecnologia", args);
});

app.get("/desenvolvedor", (req, res) => {
    args = {
        'titulo': "Página de Desenvolvedor",
        'header': 'Música Hoje',
        'footer': 'Todos os direitos a um 10 reservados'
    }

    res.render("desenvolvedor", args);
});

app.get("/contato", (req, res) => {
    args = {
        'titulo': "Página de Contatos",
        'header': 'Música Hoje',
        'footer': 'Todos os direitos a um 10 reservados'
    }

    res.render("contato", args);
});

app.listen(port, () => {
    console.log("Servidor Iniciado");
});