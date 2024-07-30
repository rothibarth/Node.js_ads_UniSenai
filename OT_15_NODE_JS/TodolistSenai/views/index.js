const express = require('express');
const path = require('path');
const app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/'));

let tasks = ['Passear com o dog', 'Ir ao mercado', 'Comprar pão'];

//comment code

app.get('/', (req,res)=>{
    res.render('index', {tasksList: tasks});
});

//Comment Code
app.listen(5000, ()=> {
    console.log('Servidor rodando em http://localhost:5000');
})
