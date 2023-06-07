const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Bregagnoli1*",
    database: "trabalhofinal"
});

module.exports = connection;