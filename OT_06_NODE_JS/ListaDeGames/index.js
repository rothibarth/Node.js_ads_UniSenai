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

app.listen(3080, () =>{
    console.log("Servidor rodando!");
})

app.get("/", (req, res) =>{
    res.json(games);
})

app.use(express.json());

app.post("/novogame", (req, res) =>{
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;
    let newGame = {title: title, studio: studio, price: price}

    console.log(title);
    console.log(studio);
    console.log(price); 

    res.send("OK");

});