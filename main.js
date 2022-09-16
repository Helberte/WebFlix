const express = require('express');
const app = express();
const nunjucks = require('nunjucks');


nunjucks.configure('views', {
  autoescape: true,
  noCache: true,
  express: app
})

app.set('view engine', 'html');
app.use(express.static('public'));


app.get('/',  (req, res) => {
  res.render('index',{
    nome: 'Webflix'
  });
})

app.get('/login',(req, res) => {
  res.render('login');
});

app.get('/configurar',(req, res) => {
  res.render('configurar');
});

app.get('/criarsenha',(req, res) => {
  res.render('criar_senha');
});

app.get('/escolhaseuplano',(req, res) => {
  res.render('escolha_seu_plano');
});


app.listen(8000, erro => {
  if(erro){
    console.log('Deu erro');
  }else{
    console.log('Servidor levantado');
  }
})