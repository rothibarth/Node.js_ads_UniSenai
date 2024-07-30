const express = require('express');

const app = express();

app.listen(5000, ()=> {
    console.log('Servidor rodando em http://localhost:5000');
})