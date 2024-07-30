const express = require('express');
const path = require('path');
const app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('viwes', path.join(__dirname, '/views'));

//comment code

app.get('/', (req,res)=>{
    res.render('index', {});
});

//Comment Code
app.listen(5000, ()=> {
    console.log('Servidor rodando em http://localhost:5000');
})