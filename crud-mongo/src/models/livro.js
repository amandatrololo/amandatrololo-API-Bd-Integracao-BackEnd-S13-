const mongoose = require('mongoose')


const livroSchema = new mongoose.Schema({
    //nome
    nome:{
        type: String,
        required: true
    },
    //autora
    autora:{
        type: String,
        required: true
    },
    //quantidade de paginas
    paginas:{
        type: Number,
        required: true
    },
    //data de criação
    criadoEm:{
        type: Date,
        required: true,
        default: new Date
    }
})


module.exports= mongoose.model('livro', livroSchema) //propriedade model transforma todo o esquema em uma soma, e joga no mongo