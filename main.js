const express = require('express');
const app = express();
const nunjucks = require('nunjucks');

// rotas
// const base = require('./routes/base');
// const configurar = require('./routes/configurar');
// const criar_senha = require('./routes/criar_senha');
// const escolha_seu_plano = require('./routes/escolha_seu_plano');
// const forma_pagamento = require('./routes/forma_pagamento');
// const login = require('./routes/login');
// const planos = require('./routes/planos');
// const configurar_cartao = require('./routes/configurar_cartao');
// const criar_perfil = require('./routes/criar_perfil');
// const primeiro_acesso_criar_perfil = require('./routes/primeiro_acesso_criar_perfil');


// rotas
const create_login = require('./routes/create_login');
const adicionar_perfil = require('./routes/adicionar_perfil');
const home_catalog = require('./routes/home_page_catalog');

// configuração do nun jucks
nunjucks.configure('views', {
  autoescape: true,
  noCache: true,
  express: app
})

// configuração do express
app.set('view engine', 'html');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

// uso das rotas
app.use(create_login);
app.use(adicionar_perfil);
app.use(home_catalog);
// app.use(criar_perfil);

// app.use(primeiro_acesso_criar_perfil);
// app.use(adicionar_perfil);

app.listen(8000, erro => {

  if(erro){
    console.log('Deu erro');
  }else{
    console.log('Servidor levantado p:8000');
  }
});