const express = require("express")
const salvaUsuario = require("./model/cadastro")
const { createDb } = require("./database/bancoDeDados")
const login = require("./model/login")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(3000,()=>{
    createDb()
    console.log("Servidor online")
})

app.post("/cadastro", (req, res) =>{
    const data = req.body
    salvaUsuario(data)
        .then(() => res.json({message: "salvo com sucesso"}))
        .catch(erro => res.status(404).json(erro))
})

app.post("/login", (req, res) =>{
    const data = req.body
    login(data)
        .then(element => res.json(element))
        .catch(erro => res.status(404).json(erro))
})

