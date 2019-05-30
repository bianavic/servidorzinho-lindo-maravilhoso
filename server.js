const http = require('http')
const utf8 = require('utf8')
//createServer é uma funcao que mora dentro do http modules
//ela recebe requisicoes e tb sabe dar respostas para as pessoas. 
//e com recebe funcoes ela recebe funcoes como parametros

const server = http.createServer(function (request, response){
    if (request.url === '/') { // esta barra diz que existe uma rota
        response.end('Hello Wonderful World') //resposta para o usuário
    } else if (request.url === '/comidas') {
        if (request.method === 'GET') {
            response.writeHead(200, {
                "Content-Type": "application/json", // informa q o corpo sera um json
                'Access-Control-Allow-Origin': "*"
                //"Content-Type": "text/html;charset=utf-8" //linguagem node pura
                        }) // gostaria muito que vc lesse determinados tipos, como o html
            //esse é o comando que responde no nosso postman
         //request e qdo alguem manda um get? a gente abre o postman?
        response.write(JSON.stringify(comidas)) //pediu para virar um argumento dentro da funcao stringfy
            
         response.end('<h1>Respostão do GET</h1>')
    } else if (request.method === 'POST') {
        response.writeHead(200, {
            "Content-Type": "text/html;charset=utf-8"
    })
    response.end('<h1>Respostão do GET</h1>')
    }
}
})

//servidor, quero subir na porta 3000 (eu defino o valor)
server.listen(3000)
console.log('servidorzinho rodando na porta 3000') // resposta para o servidor, a msg aparece no git