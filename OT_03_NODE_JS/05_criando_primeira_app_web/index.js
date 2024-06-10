//Nesta aula veremos como proceder para criar nossa primeira aplicação web com Node,js
//Para isso, utilizaremos o pacote HTTP para criar um servidor e acessá-lo por meio do browser.

var http = require("http");

http.createServer(function(request, response){
    response.write("Primeiros passos com Node.JS");
    response.end();
}).listen(8081);

console.log("Servidor rodando em http://localhost:8081");