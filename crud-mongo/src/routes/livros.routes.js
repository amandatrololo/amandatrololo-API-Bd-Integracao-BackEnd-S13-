const express = require('express')
const Livro = require('../models/livro')
const router = express.Router()


//C -> Post
router.post('/', async (req, res)=>{
    //crie um novo livro
const livro = new Livro({
    nome: req.body.nome,
    autora: req.body.autora,
    paginas: req.body.paginas,
    criadoEm: req.body.criadoEm

})
//tentar mandar uma resposta e salvar no mongo
    try{
        const novoLivro = await livro.save() //esta salvando no banco de dados
        res.status(201).json(novoLivro) // enviando resposta do servidor
    }catch (err){
        res.status(400).json({message:'err.message'})

    }
})
//R -> Método http GET
router.get('/', async (req, res)=>{
    const livros = await Livro.find() // listando todos os livros
    res.status(200).json(livros)
})

//http://localhost:3433/livros/id
//U -> Update Patch
router.patch('/:id', async (req, res)=>{
    try {
        const livro = await Livro.findById(req.params.id)
        if (livro == null) {
            return res.status(404).json({ message: 'livro não encontrado!'})
        }

        if (req.body.nome != null) {
            livro.nome = req.body.nome
        }

        if (req.body.autora != null) {
            livro.autora = req.body.autora
        }

        if (req.body.paginas != null) {
            livro.paginas = req.body.paginas
        }

        if (req.body.criadoEm != null) {
            livro.criadoEm = req.body.criadoEm
        }

        const livroAtualizado = await livro.save()
        res.json(livroAtualizado)
    
    } catch (err) {
        res.status(500).json({ message: err.message})
    }

})

//D -> Delete

router.delete('/:id', async (req, res)=>{
    try {
        const livro = await Livro.findById(req.params.id)
        if (livro == null) {
        return res.status(404).json({ message: 'livro não encontrado!'})
        }
    
        await livro.remove()
        res.json({ message: 'Livro deletado com sucesso!'})
    } catch (err) {
        return res.status(500).json({ message: err.message})
    }

})
module.exports = router