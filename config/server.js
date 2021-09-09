// Módulo (arquivo) de configuração do app

const express = require('express');
// App vai rodar o express, portanto não precisa criar server. Pula pro Listen.
const app = express()

// recupera a biblioteca express-session instalada pelo npm
const session = require('express-session')

// Configuração do jasonparse e bodyparse

// app.use(express.json());


// define o motor de views como sendo o EJS
app.set('view engine', 'ejs')

// configurar o caminho da pasta views, as vizualizações dos arquivos html
app.set('views','./app/views')
//ERRO Cannot get: nada está sendo retornado.

// Configuração dos arquivos estáticos/assets --utilizando o metodo use da biblioteca express
// nos arquivos css e js não será necessário indicar essa parte do caminho, pois já está configurada aqui
app.use(express.static('./app/public'))

// configura o bodyparse do express
app.use(express.urlencoded({extended:true}))

// configuração do express-session. Passando como paramero um json.
app.use(session({
    secret:'g7Ey%h,M~?JKY)Hs',// chave de segurança do session
    resave:false, //otimiza para que a sessão não seja salva novamente a cada requisição
    saveUninitialized:false, //otimiza o uso do armazenamento no servidor, evitando armazenar sessões mão inicializadas
}))

module.exports = app