
function index(require, response){
  response.render('index',{
    nome: 'Webflix'
  });
}

function config_cartao(req, res){
  res.render('configurar_cartao');
}

function configurar(req, res){
  res.render('configurar');
}

function criar_perfil(req, res){
  res.render('criar_perfil');
}

function criar_senha(req, res){
  res.render('criar_senha');
}

function escolha_seu_plano(req, res){
  res.render('escolha_seu_plano');
}

function forma_pagamento(req, res){
  res.render('escolha_como_pagar');
}

function login(req, res){
  res.render('login');
}

function planos(req, res){
  res.render('planos');
}

function primeiro_acesso_criar_perfil(req, res){
  res.render('primeiro_acesso_criar_perfil');
}

module.exports = { index, 
                   config_cartao, 
                   configurar, 
                   criar_perfil, 
                   criar_senha, 
                   escolha_seu_plano, 
                   forma_pagamento, 
                   login,
                   planos,
                   primeiro_acesso_criar_perfil};