const express = require('express');
const app = express();
const nunjucks = require('nunjucks');

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

app.listen(5000, erro => {
  if(erro){
    console.log('Deu erro');
  }else{
    console.log('Servidor levantado p:5000');
  }
});