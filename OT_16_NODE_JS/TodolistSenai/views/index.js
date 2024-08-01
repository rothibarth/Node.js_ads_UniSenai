const express = require('express');
var bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

let tasks = ['Passear com o dog', 'Ir ao mercado', 'Comprar pão'];

//comment code

app.get('/', (req,res)=>{
    res.render('index', {tasksList: tasks});
});

app.post('/', (req, res) => {
    tasks.push(req.body.task);
    res.redirect('/'); // Redireciona para a página inicial após adicionar uma nova tarefa
});

app.get('/deletar/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id >= 0 && id < tasks.length) {
        tasks.splice(id, 1);
    }
    res.redirect('/'); // Redireciona para a página inicial após deletar a tarefa
});

//Comment Code
app.listen(5000, ()=> {
    console.log('Servidor rodando em http://localhost:5000');
})
