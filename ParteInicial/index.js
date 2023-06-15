const express = require("express");
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;
const path = require('path');

const mustacheExpress = require("mustache-express");
const engine = mustacheExpress();

app.engine("mustache", engine);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "mustache");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    args = {
        'titulo': 'Página Inicial',
        'header': 'D20',
        'footer': 'Todos os direitos a um 10 reservados'
    }

    res.render("index", args);
});

app.get("/descricao", (req, res) => {
    args = {
        'titulo': 'Página de Descrição',
        'header': 'D20',
        'footer': 'Todos os direitos a um 10 reservados'
    }

    res.render("descricao", args);
});

app.get("/tecnologia", (req, res) => {
    args = {
        'titulo': 'Página de Tecnologias',
        'header': 'D20',
        'footer': 'Todos os direitos a um 10 reservados'
    }

    res.render("tecnologia", args);
});

app.get("/desenvolvedor", (req, res) => {
    args = {
        'titulo': "Página de Desenvolvedor",
        'header': 'D20',
        'footer': 'Todos os direitos a um 10 reservados'
    }

    res.render("desenvolvedor", args);
});

app.get("/contato", (req, res) => {
    args = {
        'titulo': "Página de Contatos",
        'header': 'D20',
        'footer': 'Todos os direitos a um 10 reservados'
    }

    res.render("contato", args);
});

app.post('/contato', (req, res) => {
    const {nome, email, assunto, mensagem} = req.body;

    const transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        secure: false,
        auth: {
            user: "21bb2a2267068c",
            pass: "97dee0f50dd65d"
        },
    });

    const mailOptions = {
        from: email,
        to: "IgorBregagnoli1@gmail.com",
        subject: assunto,
        text: `${nome} (${email}) enviou uma mensagem:\n\n${mensagem}`
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).json({
                success: false,
                message: 'Erro ao enviar o e-mail.'
            });
        } else {
            console.log('E-mail enviado:', info.response);
            res.json({
                success: true,
                message: 'E-mail enviado com sucesso!'
            });
        }
    });
});


//Usuários

app.get("/cadastro", (req, res) => {
    args = {
        'titulo': "Página de Cadastro",
        'header': 'D20',
        'footer': 'Todos os direitos a um 10 reservados'
    }

    res.render("cadastroDeUsuario", args);
});

app.get("/home", (req, res) => {
    args = {
        'titulo': "Página Home",
        'header': 'D20',
        'footer': 'Todos os direitos a um 10 reservados'
    }

    res.render("home", args);
});

app.get("/perfil", (req, res) => {
    args = {
        'titulo': "Página de Perfil",
        'header': 'D20',
        'footer': 'Todos os direitos a um 10 reservados'
    }

    res.render("perfilDeUsuario", args);
});

//Personagens

app.get("/cadastroPersonagem", (req, res) => {
    args = {
        'titulo': "Página de Cadastro do Personagem",
        'header': 'D20',
        'footer': 'Todos os direitos a um 10 reservados'
    }

    res.render("cadastroDeUsuarioPersonagem", args);
});

//Habilidades

app.get("/cadastroHabilidade", (req, res) => {
    args = {
        'titulo': "Página de Cadastro de Habilidade",
        'header': 'D20',
        'footer': 'Todos os direitos a um 10 reservados'
    }

    res.render("cadastroDeUsuarioHabilidade", args);
});
//Personagem_Habilidades

app.get("/cadastroPersonagemHabilidade", (req, res) => {
    args = {
        'titulo': "Página de Cadastro de Habilidade de Personagem",
        'header': 'D20',
        'footer': 'Todos os direitos a um 10 reservados'
    }

    res.render("cadastroDeUsuarioPersonagemHabilidade", args);
});

app.listen(port, () => {
    console.log("Servidor Iniciado");
});