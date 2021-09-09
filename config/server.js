const express = require('express');

const app = express()

const session = require('express-session')

app.set('view engine', 'ejs')

app.set('views','./app/views')

app.use(express.static('./app/public'))

app.use(express.urlencoded({extended:true}))

app.use(session({
    secret:'g7Ey%h,M~?JKY)Hs',
    resave:false, 
    saveUninitialized:false, 
}))

module.exports = app