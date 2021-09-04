// Módulo (arquivo) de configuração do app

const express = require('express');
// App vai rodar o express, portanto não precisa criar server. Pula pro Listen.
const app = express()

// define o motor de views como sendo o EJS
app.set('view engine', 'ejs')

// configurar o caminho da pasta views, as vizualizações dos arquivos html
app.set('views','./app/views')
//ERRO Cannot get: nada está sendo retornado.

// Configuração dos arquivos estáticos/assets --utilizando o metodo use da biblioteca express
// nos arquivos css e js não será necessário indicar essa parte do caminho, pois já está configurada aqui
app.use(express.static('./app/public'))


module.exports = app