const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (requisicao, resposta) => {
    resposta.render('home');
});

app.get('/sobre', (requisicao, resposta) => {
    resposta.render('sobre');
});


app.listen(3000, () => {
    console.log('Servidor inicializado');
});