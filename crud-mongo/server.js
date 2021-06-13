const express = require('express') //importa o express
const app = express() // cria a instancia do express


// conectar o mongo com o mongoose
const db = require('./src/data/database')
db.connect()

app.use(express.json())

// usar as rotas
const livrosRouter = require('./src/routes/livros.routes')
app.use('/livros', livrosRouter)

app.listen(3433, ()=> console.log('servidor funcionando bonitinho')) //subindo o servidor



