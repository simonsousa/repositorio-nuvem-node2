const express = require("express"); //importa o módulo express neste arquivo
const app = express(); //iniciando o express

//criando a rota inicial
app.get("/", function(req,res){
    res.send("<h1>Bem vindo ao meu site!</h1><p>Abaixo do título, está o parágrafo</p>");
})

//rota do cadastro de produtos
app.get("/produtos", function(req,res){
    res.send("<h1>Lista de Produtos!</h1>");
})

//rota com parametro 
app.get("/consulta/:parametro", function(req,res){
    //req --> dados enviados pelo cliente
    //res --> resposta enviada pelo servidor de volta ao cliente
    res.send(`<h3>retorno consulta: ${req.params.parametro}</h3>`);
})

app.listen(process.env.PORT ?? 3000,function(erro){  // cria a aplicação na porta 3000
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("Servidor Iniciado.");
    }
})

