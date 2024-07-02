//carregando o express
const express = require("express");
//instancio o express e carregando a biblioteca do express dentro dessa const app
const app = express();

//Lista de Games
let games = [
    {title: "Sea of Thieves", studio: "Rare", price: 30},
    {title: "WOW", studio: "Blizzard", price: 120},
    {title: "Valorant", studio: "Riot", price: 0},
    {title: "COD", studio: "Activision", price: 200},
    {title: "Minecraft", studio: "Mojang", price: 80},
    {title: "Zelda", studio: "Nintendo", price: 59},
    {title: "Red Dead", studio: "Rockstar", price: 60},
    {title: "The Witcher", studio: "CD Projekt Red", price: 40},
    {title: "Cyberpunk 2077", studio: "CD Projekt Red", price: 60},
    {title: "God of War", studio: "Santa Monica Studio", price: 39},
    {title: "Among Us", studio: "Innersloth", price: 05},
    {title: "Fortnite", studio: "Epic Games", price: 0},
    {title: "Grand Theft Auto V", studio: "Rockstar Games", price: 30}

]

const buscarGamesPorTitle = (titleGames) =>{
    return games.filter(games => games.title.toLowerCase().includes(titleGames.toLowerCase()));
};

app.get('/games', (req, res) => {

    const titleGames = req.query.busca;
    const resultado = titleGames ? buscarGamesPorTitle(titleGames) : games;

    if(resultado.length > 0){
        res.json(resultado);
    }else{
        res.status(404).send({"erro" : "Nenhuma UF encontrada"});
    }

});

app.get('/games/:idgames', (req, res) => {
    const idGames = parseInt(req.params.idgames);
    let mensagemErro = '';
    let game;

    if(!(isNaN(idgames))){
        game = games.find(u => u.id === idGames);

        if(!game){
            mensagemErro = 'UF não encontrada';
        }
    }else{
        mensagemErro = 'Requisição inválida';
    }


    if(game){
        res.json(game);
    }else{
        res.status(404).send({"erro" : mensagemErro});
    }

});

app.listen(3080, () =>{
    console.log("Servidor rodando!");
})