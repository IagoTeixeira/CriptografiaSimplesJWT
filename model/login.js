const jwt = require("jsonwebtoken")
const { createHash } = require('crypto')
const pegaSenha = require("../repositorio/login")

async function login(dados){
    try{
        const nome = await pegaSenha(dados.nome)
        const mensagemCifrada = createHash('sha256').update(dados.senha).digest('hex');
        if(nome[0].senha === mensagemCifrada){
            const chaveSecreta = "chaveSuperSecreta"
            const token = jwt.sign(
                {
                    nome: dados.nome,
                    ExpiresIn: "1d"
                }, chaveSecreta,
            )
            return Promise.resolve(token)
        }
    }catch{
        return Promise.reject("Login ou senha inválido")  
    }
      
}

module.exports = login