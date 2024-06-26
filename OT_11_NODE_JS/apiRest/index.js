import express from 'express';
import { get } from 'http';
import colecaoUf from './dados.js';

const app = express();

app.get('/ufs', (req, res) =>{

    res.json(colecaoUf)
});

// app.get('/ufs/teste', (req ,res) =>{
//         res.send({"teste" : "teste"})
//     }
// );

// app.get('/ufs/:iduf', (req ,res) =>{

//     const idUF = req.params.iduf;

//     res.send({"teste" : `${idUF}` });
// });

app.get('/ufs/:iduf', (req, res) => {
    const idUF = parseInt(req.params.iduf);
    const uf = colecaoUf.find(u => u.id === idUF);

    res.json(uf);
}
);

app.listen(8080, () => {

    console.log('Servidor iniciado na porta 8080');
});