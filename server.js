
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const controller = require('./ComidasController')

const server = express();
server.use(cors())

server.get("/comidas", (request, response)=>{
  response.send(controller.getAll())

})

server.post('/comidas', bodyParser.json(), (request, response) => {
  controller.add(request.body)
  response.send(201)

})

server.listen(3000);
console.log('Servidor rodando na porta 3000');