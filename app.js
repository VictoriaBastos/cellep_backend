//1o - Iniciar npm: npm init
//2o - Iniciar git : git init
// Adicionando biblioteca e frameworks.
// npm install express
// npm install -g nodemon
// npm install ejs (renderização dos arquivos html, identifica arquivos js a serem executados pelo  servidor e arquivos html que retornam para o cliente) EJS cria arquivos do tipo html.
// criar pasta app e dentro a pasta views()

const express = require('express');
// App vai rodar o express, portanto não precisa criar server. Pula pro Listen.
const app = express()

// define o motor de views como sendo o EJS
app.set('view engine', 'ejs')

// configurar o caminho da pasta views, as vizualizações dos arquivos html
app.set('views','./app/views')
//ERRO Cannot get: nada está sendo retornado.

// metodo get (endereço da rota, function req,res )
// cria rota home
app.get('/',(req,res) => {
    res.send(// é como o res.end no node puro, mas no express é res.send
        `<html>
            <head>
                <meta charset='UTF-8'>
                <title>Portal de notícias</title>
            </head>
            <body>
                <a href="/noticias">Notícias</a>
                <h1>Portal de notícias</h1>
            </body>
        `
) // o '/' siginifica endereço puro, sempre leva pra home.
})

app.get('/noticias',(req,res)=>{
    res.send(
        `<html>
            <head>
                <meta charset='UTF-8'>
                <title>Portal de notícias</title>
            </head>
            <body>
                <a href="/">Home</a>
                <h1>Todas as notícias</h1>
                <ul>
                    <li>Servidor Node.js com Express</li>
                    <li>NODEMON melhora a performance do desenvolvedor NODE.JS</li>
                    <li>Servidor Node.js com Express</li>
                <ul>
                
            </body>
        `
    )

})

app.listen(3000,()=>{ 
    console.log('Servidor rodando com o express')
})
