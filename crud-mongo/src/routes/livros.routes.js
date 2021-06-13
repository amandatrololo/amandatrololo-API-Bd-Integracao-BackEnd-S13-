const express = require('express')

const router = express.Router()
const controller = require('../controllers/livrosController')

//C -> Post
router.post('/',controller.createLivro)
//R -> Método http GET
router.get('/', controller.listaLivros)

//http://localhost:3433/livros/id
//U -> Update Patch
router.patch('/:id', controller.mudaLivros)

//D -> Delete

router.delete('/:id', controller.deletaLivros)

module.exports = router