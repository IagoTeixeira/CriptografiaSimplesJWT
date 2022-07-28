const {add} = require("../database/bancoDeDados")

function adicionaCadastro(dados){
    add(dados)
}

module.exports = adicionaCadastro