const {resgataSenha} = require("../database/bancoDeDados")

function pegaSenha(nome){
    return Promise.resolve(resgataSenha(nome)).catch(err => err)
}

module.exports = pegaSenha