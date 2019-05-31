
const express = require('express');
const cors = require('cors')
const controller = require('./ComidasController')

const server = express();
server.use(cors())

server.get("/comidas", (request, response)=>{
  response.send(controller.getAll())

})

server.listen(3000);
console.log('Servidor rodando na porta 3000');