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

app.post("/register",(req,res) =>{
    const {nome} = req.body
    const {sobrenome} = req.body
    const {email} = req.body
    const {nascimento} = req.body
    const {senha} = req.body

    let SQL = "INSERT INTO usuarios ( nome, sobrenome, email, nascimento, senha) VALUES (?, ?, ?, ?, ?)"
    db.query(SQL, [nome, sobrenome, email, nascimento, senha], (err,result) => {
        console.log(err);
        
    })
})