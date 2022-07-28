const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/cadastro.db');

function createDb(){
    db.run("CREATE TABLE IF NOT EXISTS cadastro (id INTEGER PRIMARY KEY AUTOINCREMENT , nome TEXT UNIQUE, senha TEXT)", (er)=>{
        if(er){
            console.log(er)
        }
    });
}

function add(dados){
    db.run(`INSERT INTO cadastro (nome, senha) VALUES ("${dados.nome}","${dados.senha}")`, err =>{
        if(err){
            return err
        }
    })
}

function resgataSenha(nome){
    return new Promise((resolve, reject) =>{
        db.all(`SELECT senha FROM cadastro WHERE nome="${nome}"`, (err, row)=>{
            if(err){
                reject(err)
            }else{
                resolve(row) 
            }
        })
    })
}

module.exports = {createDb, add, resgataSenha}