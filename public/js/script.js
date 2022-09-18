const card1 = document.getElementsByClassName('card-plano-1')[0];
const card2 = document.getElementsByClassName('card-plano-2')[0];
const card3 = document.getElementsByClassName('card-plano-3')[0];

const seta1 = document.getElementsByClassName('seta-1')[0];
const seta2 = document.getElementsByClassName('seta-2')[0];
const seta3 = document.getElementsByClassName('seta-3')[0];


card1.addEventListener('click', function () {
  card3.classList.replace('active', 'desactive')
  seta3.classList.replace('active', 'desactive');
  card2.classList.replace('active', 'desactive');
  seta2.classList.replace('active', 'desactive');

  card1.classList.replace('desactive', 'active');
  seta1.classList.replace('desactive', 'active');
});

card2.addEventListener('click', function () {
  card3.classList.replace('active', 'desactive');
  seta3.classList.replace('active', 'desactive');
  card1.classList.replace('active', 'desactive');
  seta1.classList.replace('active', 'desactive');

  card2.classList.replace('desactive', 'active');
  seta2.classList.replace('desactive', 'active');
});

card3.addEventListener('click', function () {
  card2.classList.replace('active', 'desactive');
  seta2.classList.replace('active', 'desactive');
  card1.classList.replace('active', 'desactive');
  seta1.classList.replace('active', 'desactive');

  card3.classList.replace('desactive', 'active');
  seta3.classList.replace('desactive', 'active');
});
