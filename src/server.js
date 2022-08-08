require ('dotenv').config({path: 'variaveis.env'})   //le o arquivo de variavel de ambiente (varialvel.env)

const express = require('express')
const cors = require ('cors')

const router  = require ('./routes')

const server = express();
server.use(cors()); //coloca o servidor em uso chamando o cors
server.use(express.json()) // habilita a entrada de dados em formato JSON
server.use(express.urlencoded({extended: false})) // habilita o envio de imagens

server.use('/api', router); //faz com que todos os endereços da rota tenha '/api'


server.listen(process.env.PORT,() => {
    console.log(`servidor está rodando em http://localhost:${process.env.PORT}`)
})