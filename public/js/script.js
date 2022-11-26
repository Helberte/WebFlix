const card1 = document.getElementsByClassName('card-plano-1')[0];
const card2 = document.getElementsByClassName('card-plano-2')[0];
const card3 = document.getElementsByClassName('card-plano-3')[0];

const seta1 = document.getElementsByClassName('seta-1')[0];
const seta2 = document.getElementsByClassName('seta-2')[0];
const seta3 = document.getElementsByClassName('seta-3')[0];

const linha2_column1 = document.getElementsByClassName('linha-2-column-1')[0];
const linha2_column2 = document.getElementsByClassName('linha-2-column-2')[0];
const linha2_column3 = document.getElementsByClassName('linha-2-column-3')[0];

const linha3_column1 = document.getElementsByClassName('linha-3-column-1')[0];
const linha3_column2 = document.getElementsByClassName('linha-3-column-2')[0];
const linha3_column3 = document.getElementsByClassName('linha-3-column-3')[0];

const linha4_column1 = document.getElementsByClassName('linha-4-column-1')[0];
const linha4_column2 = document.getElementsByClassName('linha-4-column-2')[0];
const linha4_column3 = document.getElementsByClassName('linha-4-column-3')[0];

const linha5_column1 = document.getElementsByClassName('linha-5-column-1')[0];
const linha5_column2 = document.getElementsByClassName('linha-5-column-2')[0];
const linha5_column3 = document.getElementsByClassName('linha-5-column-3')[0];

const bt_vamos_la = document.getElementById('bt-vamos-la');
const bt_login_entrar = document.getElementById('bt-login-entrar');
const bt_configurar_proximo = document.getElementById('bt-configurar-proximo');
const bt_criar_senha_proximo = document.getElementById('bt-criar-senha-proximo');
const bt_escolha_seu_plano_proximo = document.getElementById('bt-escolha-seu-plano-proximo');
const bt_planos_proximo = document.getElementById('bt-planos-proximo');
const forma_pagamento_1 = document.getElementById('forma-paramento-1');
const bt_iniciar_associacao = document.getElementById('bt-iniciar-associacao');
const bt_criar_perfil_primeiro_acesso = document.getElementById('bt-criar-perfil-primeiro-acesso');
const container_configurar_cartao_center= document.getElementsByClassName('container-configurar-cartao-center')[0];

if(bt_vamos_la){
  bt_vamos_la.addEventListener('click', () => {
    window.location = '/login';
  });
}

if(bt_login_entrar){
  bt_login_entrar.addEventListener('click', () => {
    window.location = '/configurar';
  });
}

if(bt_configurar_proximo){
  bt_configurar_proximo.addEventListener('click', () => {
    window.location = '/criarsenha';
  });
}

if(bt_criar_senha_proximo){
  bt_criar_senha_proximo.addEventListener('click', () => {
    window.location = '/escolhaseuplano';
  });
}

if(bt_escolha_seu_plano_proximo){
  bt_escolha_seu_plano_proximo.addEventListener('click', () => {
    window.location = '/planos';
  });
}

if(bt_planos_proximo){
  bt_planos_proximo.addEventListener('click', () => {
    window.location = '/formapagamento';
  });
}

if(forma_pagamento_1){
  forma_pagamento_1.addEventListener('click', () => {
    window.location = '/configurarcartao';
  });
}


if(bt_criar_perfil_primeiro_acesso){
  bt_criar_perfil_primeiro_acesso.addEventListener('click', () => {
    window.location = '/homecatalog';
  });
}


if(bt_iniciar_associacao){
  bt_iniciar_associacao.addEventListener('click', () => {
    container_configurar_cartao_center.classList.add('animation');
    setTimeout(() => {
      window.location = '/criarperfilprimeiroacesso';
    }, 200);
    
  });
}


if(card1 && card2 && card3){
  card1.addEventListener('click', function () {
    card3.classList.remove('active')
    seta3.classList.remove('active');
    card2.classList.remove('active');
    seta2.classList.remove('active');
  
    card1.classList.add('active');
    seta1.classList.add('active');
    linha2_column1.classList.add('active');
    linha3_column1.classList.add('active');
    linha4_column1.classList.add('active');
    linha5_column1.classList.add('active');
  
    linha2_column2.classList.remove('active');
    linha3_column2.classList.remove('active');
    linha4_column2.classList.remove('active');
    linha5_column2.classList.remove('active');
  
    linha2_column3.classList.remove('active');
    linha3_column3.classList.remove('active');
    linha4_column3.classList.remove('active');
    linha5_column3.classList.remove('active');
  });


  card2.addEventListener('click', function () {
    card3.classList.remove('active')
    seta3.classList.remove('active');
    card1.classList.remove('active');
    seta1.classList.remove('active');
  
    linha2_column1.classList.remove('active');
    linha3_column1.classList.remove('active');
    linha4_column1.classList.remove('active');
    linha5_column1.classList.remove('active');
  
    linha2_column3.classList.remove('active');
    linha3_column3.classList.remove('active');
    linha4_column3.classList.remove('active');
    linha5_column3.classList.remove('active');
  
    card2.classList.add('active');
    seta2.classList.add('active');
  
    linha2_column2.classList.add('active');
    linha3_column2.classList.add('active');
    linha4_column2.classList.add('active');
    linha5_column2.classList.add('active');
  });
  
  card3.addEventListener('click', function () {
    card2.classList.remove('active')
    seta2.classList.remove('active');
    card1.classList.remove('active');
    seta1.classList.remove('active');
  
    linha2_column1.classList.remove('active');
    linha3_column1.classList.remove('active');
    linha4_column1.classList.remove('active');
    linha5_column1.classList.remove('active');
  
    linha2_column2.classList.remove('active');
    linha3_column2.classList.remove('active');
    linha4_column2.classList.remove('active');
    linha5_column2.classList.remove('active');
  
    card3.classList.add('active');
    seta3.classList.add('active');
  
    linha2_column3.classList.add('active');
    linha3_column3.classList.add('active');
    linha4_column3.classList.add('active');
    linha5_column3.classList.add('active');
  });
}
