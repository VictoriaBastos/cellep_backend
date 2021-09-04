//1o - Iniciar npm: npm init
//2o - Iniciar git : git init
// Adicionando biblioteca e frameworks.
// npm install express
// npm install -g nodemon
// npm install ejs (renderização dos arquivos html, identifica arquivos js a serem executados pelo  servidor e arquivos html que retornam para o cliente) EJS cria arquivos do tipo html.
// criar pasta app e dentro a pasta views()
// criar pasta admin home e noticias dentro da views(para melhor organizar as pastas web)
// Criar pasta public para assets, arquivos de montagem da página (CSS,JS(lado do cliente) e Imagens)

const app = require('./config/server') // ./ procura a pasta do arquivo desde a raiz
// metodo get (endereço da rota, function req,res )
// cria rota home, o '/' siginifica endereço puro, sempre leva pra home.
app.get('/',(req,res) => {
    // O EJS disponibiliza o metodo render para usar nas respostas das requisições.
    // O método render localiza o arquivo index na pasta views e retorna seu conteúdo para o cliente. O restante do caminho já foi definido lá emcima em app.set('views'...)
    res.render('home/index')
})

app.get('/noticias',(req,res)=>{
    res.render('noticias/noticias')
})

app.listen(3000,()=>{ 
    console.log('Servidor rodando com o express')
})
