const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
// rotas
const base = require('./routes/base');
const configurar = require('./routes/configurar');
const criar_senha = require('./routes/criar_senha');
const escolha_seu_plano = require('./routes/escolha_seu_plano');
const forma_pagamento = require('./routes/forma_pagamento');
const login = require('./routes/login');
const planos = require('./routes/planos');
const configurar_cartao = require('./routes/configurar_cartao');

// configuração do nunjucks
nunjucks.configure('views', {
  autoescape: true,
  noCache: true,
  express: app
})

// configuração do express
app.set('view engine', 'html');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

// uso das rotas teste
app.use(base);
app.use(configurar);
app.use(criar_senha);
app.use(escolha_seu_plano);
app.use(forma_pagamento);
app.use(login);
app.use(planos);
app.use(configurar_cartao);

app.listen(8000, erro => {
  if(erro){
    console.log('Deu erro');
  }else{
    console.log('Servidor levantado p:8000');
  }
})