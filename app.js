
const app = require('./config/server') 

const noticias = require('./mockup')

const db = require('./config/dbConnection')

app.get('/',(req,res) => {

    db.query('SELECT * FROM noticias ORDER BY id_noticia DESC LIMIT 3',function(error,result){
        
    res.render('home/index',{noticias:result.rows, title: 'Home'})
    })

})

app.get('/noticias',(req,res)=>{
    db.query('SELECT * FROM noticias ORDER BY id_noticia DESC', function (error,result){
        res.render('noticias/noticias',{noticias:result.rows, title: 'Noticias'})
    })
})

app.get('/noticia',(req,res)=>{
    const id = req.query.id
    db.query('SELECT * FROM noticias WHERE id_noticia = $1',[id],
    function(error,result){
        res.render("noticias/noticia", {noticia:result.rows[0], title:'Noticia'})
    })
})
app.get('/admin',(req,res)=>{
        if(req.session.autorizado){
        res.render('admin/form_add_noticias',{autorizado:req.session.autorizado})
        } else {
            res.render('admin/login')
        }
})

app.post('/admin/salvar-noticia', function(req,res){
    let {titulo,conteudo} = req.body

    db.query("INSERT INTO noticias(titulo,conteudo) VALUES ($1, $2)",[titulo,conteudo], function(error,result){
        res.redirect('/noticias')
    })
})

app.post('/admin/autenticar',function(req,res){
    const {usuario,senha} = req.body
    if(usuario == "root" && senha =="cellep1234"){
        req.session.autorizado = true
    }
    res.redirect("/admin")
})

app.get('/admin/sair',function(req,res){
    req.session.destroy((err)=>{
        res.redirect('/admin')
    })
})

app.listen(process.env.PORT || 3000,()=>{ 
    console.log('Servidor rodando com o express')
})
