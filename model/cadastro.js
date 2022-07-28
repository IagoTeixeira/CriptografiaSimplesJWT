const { createHash} = require('crypto')
const adicionaCadastro = require('../repositorio/cadastro')

class Usuario{
    constructor(nome, senha){
        this.nome = nome,
        this.senha = criaCriptografia(senha)
    }
}



function criaCriptografia(senha){

    const mensagemCifrada = createHash('sha256').update(senha).digest('hex');

    return mensagemCifrada;
}

function salvaUsuario(dados){
    const usuario = new Usuario(dados.nome, dados.senha)
    return Promise.resolve(adicionaCadastro(usuario)).catch(erro => erro)
}


module.exports = salvaUsuario