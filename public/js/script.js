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
