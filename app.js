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
// npm install pgs
// npm install express-session
const app = require('./config/server') // ./ procura a pasta do arquivo desde a raiz

// recupera as noticias presentes no arquivo mockup
const noticias = require('./mockup')

const db = require('./config/dbConnection')

// metodo get (endereço da rota, function req,res )
// cria rota home, o '/' siginifica endereço puro, sempre leva pra home.
app.get('/',(req,res) => {

    db.query('SELECT * FROM noticias ORDER BY id_noticia DESC LIMIT 3',function(error,result){
        // console.log(result.rows)
        // O EJS disponibiliza o metodo render para usar nas respostas das requisições.
    // O método render localiza o arquivo index na pasta views e retorna seu conteúdo para o cliente. O restante do caminho já foi definido lá emcima em app.set('views'...)
    res.render('home/index',{noticias:result.rows})
    })

})

app.get('/noticias',(req,res)=>{
    db.query('SELECT * FROM noticias ORDER BY id_noticia DESC', function (error,result){
        res.render('noticias/noticias',{noticias:result.rows})
    })
})

// criar rota notícia
app.get('/noticia',(req,res)=>{
    // recupera id noticia por get
    const id = req.query.id
    // $1 é substituito por próximo parâmetro
    db.query('SELECT * FROM noticias WHERE id_noticia = $1',[id],
    function(error,result){
        res.render("noticias/noticia", {noticia:result.rows[0]})
    })
})
app.get('/admin',(req,res)=>{
        if(req.session.autorizado){
        res.render('admin/form_add_noticias',{autorizado:req.session.autorizado})
        } else {
            res.render('admin/login')
        }
})

// Rota responsável por salvar as notícias
app.post('/admin/salvar-noticia', function(req,res){
    // recuperação das informações passadas por POST
    let {titulo,conteudo} = req.body

    db.query("INSERT INTO noticias(titulo,conteudo) VALUES ($1, $2)",[titulo,conteudo], function(error,result){
        res.redirect('/noticias')
    })
})

// rota responsável por autenticar o usuário
app.post('/admin/autenticar',function(req,res){
    const {usuario,senha} = req.body

    if(usuario == "root" && senha =="cellep1234"){
        req.session.autorizado = true
    }

    res.redirect("/admin")
})

// montar rota sair
app.get('/admin/sair',function(req,res){
    req.session.destroy((err)=>{
        res.redirect('/admin')
    })
})

app.listen(3000,()=>{ 
    console.log('Servidor rodando com o express')
})
