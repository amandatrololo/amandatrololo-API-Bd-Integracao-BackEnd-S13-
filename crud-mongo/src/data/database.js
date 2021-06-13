require('dotenv').config()
const mongoose = require('mongoose')

//guarda na variavel connect as configuracoes do mongo: a string de conexao e as informacoes de configuracao padrao
const connect = ()=>{mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log('Mongodb conectado')) //espera a resposta de sucesso e mostra no console
.catch(err => console.err) //se a conexao der errado, pega o erro e mostra no console

}


module.exports = { connect } //exporta a variavel connect para usarmos la no server