
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const controller = require('./ComidasController')

const server = express()
server.use(cors())
server.use(bodyParser.json())

server.get('/comidas', (request, response) => {
  response.send(controller.getAll())
})

server.post('/comidas', (request, response) => {
  controller.add(request.body)
})

server.delete('/comidas/:id', (request, response) => {
  controller.remove(request.params.id)
  response.sendStatus(204)
})

server.put('./comidas/:id', (request, response) => {
  controller.change(request.body)
  response.sendStatus(204)
})

server.listen(3000)
console.log('Servidor rodando na porta 3000')