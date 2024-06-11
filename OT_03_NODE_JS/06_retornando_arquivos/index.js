//Nesta aula veremos como proceder para criar nossa primeira aplicação web com Node,js
//Para isso, utilizaremos o pacote HTTP para criar um servidor e acessá-lo por meio do browser.

var http = require("http");

var fs = require("fs");

http.createServer(function(request, response){
    fs.readFile("index.html", function(erro, conteudo){
        if(erro){
            console.log(erro);
        }else{
            response.write(conteudo);
        }
        response.end();
    })
}).listen(8081);

console.log("Servidor rodando em http://localhost:8081");