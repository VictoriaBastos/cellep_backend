// node.js é usado para rodar javascript fora do navegador, portanto não é uma lingaugem, e sim um ambiente de execução de js.
//1o - Iniciar npm: npm init. o NPM cria automaticamente um arquivo package.json 
//2o - Iniciar git : git init
// npm é o ecossistema de pacotes do node.js
// Adicionando biblioteca e frameworks. npm install <pkg-1> <pkg-2> <pkg-3>
// npm install express
// npm install -g nodemon (nodemon não roda no powershell)
// npm install ejs (renderização dos arquivos html, identifica arquivos js a serem executados pelo  servidor e arquivos html que retornam para o cliente) EJS cria arquivos do tipo html.
// criar pasta app e dentro a pasta views()
// criar pasta admin home e noticias dentro da views(para melhor organizar as pastas web)
// Criar pasta public para assets, arquivos de montagem da página (CSS,JS(lado do cliente) e Imagens)
// depois de criar arquivos de pgs no view, não esquecer de criar rotas.

const app = require('./config/server') // ./ procura a pasta do arquivo desde a raiz

// recupera as noticias presentes no arquivo mockup
const noticias = require('./mockup')

// metodo get (endereço da rota, function req,res )
// cria rota home, o '/' siginifica endereço puro, sempre leva pra home.
app.get('/',(req,res) => {
    // O EJS disponibiliza o metodo render para usar nas respostas das requisições.
    // O método render localiza o arquivo index na pasta views e retorna seu conteúdo para o cliente. O restante do caminho já foi definido lá emcima em app.set('views'...)
    res.render('home/index',{noticias:noticias.slice(0,3)})
})

app.get('/noticias',(req,res)=>{
    // na renderização é possível passar outros arquivos além do que será renderizado. Nesse caso o {} cria uma chave noticia de valor noticias(noticias = require('./mockup'))
    res.render('noticias/noticias',{noticias:noticias})
})

// criar rota notícia
app.get('/noticia',(req,res)=>{
    // recupera id noticia por get
    const id = req.query.id
    res.render('noticias/noticia',{noticia:noticias[id]})
})
app.get('/admin',(req,res)=>{
    res.render('admin/form_add_noticias')
})

app.listen(3000,()=>{ 
    console.log('Servidor rodando com o express')
})
