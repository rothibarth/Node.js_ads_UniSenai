import Express from 'Express';

const app = Express();

app.get('/', (req, res) =>
res.send("<h3>Rotas no Express</h3><p>Rota '/'")
);

app.listen(3000, () =>
console.log('Servidor iniciado na porta 3000')
);

