const express = require('express')
const app = express()
const mysql = require('mysql2')
const cors = require("cors")

app.listen(5174, () => {
    console.log('Servidor rodando na porta 5174');   
})

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "pos54321",
    database: "cadastro-formulae"
})

app.use(cors())
app.use(express.json())

app.post("/login", (req, res) => {
    const { email, senha } = req.body;

    let SQL = "SELECT nome FROM usuarios WHERE email = ? AND senha = ?";
    db.query(SQL, [email, senha], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erro ao autenticar usuário');
        }
        if (result.length > 0) {
            // Autenticação bem-sucedida
            return res.status(200).json({ nome: result[0].nome });
        } else {
            // Credenciais inválidas
            return res.status(401).send('Email ou senha incorretos');
        }
    });
});