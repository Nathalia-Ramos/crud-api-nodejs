const express = require ('express')
const router = express.Router()

const controllerBiblioteca = require('./controller/bibliotecaController.js')


//Criando os endPoint
router.get('/livros', controllerBiblioteca.buscarTodos)
router.get('/livro/:id', controllerBiblioteca.buscarId)
router.post('/livros', controllerBiblioteca.inserirLivros)
router.put('/livros/:id', controllerBiblioteca.update)
router.delete('/livro/:id', controllerBiblioteca.delete)

module.exports = router 
