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

app.get('/home',(req, res) => {
  res.render('login');
});


app.listen(8000, erro => {
  if(erro){
    console.log('Deu erro');
  }else{
    console.log('Servidor levantado');
  }
})