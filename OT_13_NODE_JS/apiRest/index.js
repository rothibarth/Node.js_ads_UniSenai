import express from 'express';
import colecaoUf from './dados.js';

const app = express();

const buscarUfsPorNome = (nomeUf) =>{
    return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(nomeUf.toLowerCase()));
};

app.get('/ufs', (req, res) => {

    const nomeUf = req.query.busca;
    const resultado = nomeUf ? buscarUfsPorNome(nomeUf) : colecaoUf;

    if(resultado.length > 0){
        res.json(resultado);
    }else{
        res.status(404).send({"erro" : "Nenhuma UF encontrada"});
    }

});

app.get('/ufs/:iduf', (req, res) => {
    const idUF = parseInt(req.params.iduf);
    let mensagemErro = '';
    let uf;

    if(!(isNaN(idUF))){
        uf = colecaoUf.find(u => u.id === idUF);

        if(!uf){
            mensagemErro = 'UF não encontrada';
        }
    }else{
        mensagemErro = 'Requisição inválida';
    }


    if(uf){
        res.json(uf);
    }else{
        res.status(404).send({"erro" : mensagemErro});
    }

});

app.listen(8080, () => {

    console.log('Servidor iniciado na porta 8080');
});