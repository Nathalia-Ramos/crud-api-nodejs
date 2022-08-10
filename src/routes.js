const express = require ('express')
const router = express.Router()
const mysql = require('mysql')
const bcrypt = require('bcrypt')

const controllerBiblioteca = require('./controller/bibliotecaController.js')
const controllerUsuario = require('./controller/usuariosController.js')



//Rotas biblioteca
router.get('/livros', controllerBiblioteca.buscarTodos)
router.get('/livro/:id', controllerBiblioteca.buscarId)
router.post('/livros', controllerBiblioteca.inserirLivros)
router.put('/livros/:id', controllerBiblioteca.update)
router.delete('/livro/:id', controllerBiblioteca.delete)


//Rotas usuários
router.post('/cadastroUsuario', controllerUsuario.cadastroUsuario)
router.get('/usuarios', controllerUsuario.listarUsuario)
router.get('/usuarios/:id_usuario', controllerUsuario.usuarioID)
router.put('/usuarios/:id_usuario', controllerUsuario.updateUsuario)
router.delete('/usuarios/:id_usuario', controllerUsuario.deleteUsuario)



module.exports = router 
