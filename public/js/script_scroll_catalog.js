
function mouse_sobre(v, id){
  let scrool = document.getElementById(id);
  scrool.classList.toggle('active');
}
function mouse_saiu(v, id){
  let scrool = document.getElementById(id);
  scrool.classList.toggle('active');
}

function to_left(){
  let list_films = document.getElementsByClassName('active')[0];  
  var valor_left = 0;

  if(list_films.style.marginLeft){
    valor_left =  parseInt(list_films.style.marginLeft,10) + (window.screen.width / 2);
  }else{
    valor_left = window.screen.width / 2;
  }

 
  list_films.style.marginLeft = valor_left + 'px';

  if(parseInt(list_films.style.marginLeft,10) > 0){    
    list_films.style.marginLeft = "0";
  }
}

function to_right(){  
  let list_films = document.getElementsByClassName('active')[0];
  var valor_left = 0;

  if(list_films.style.marginLeft){
    valor_left = parseInt(list_films.style.marginLeft,10) - (window.screen.width / 2);
  }else{
    valor_left =(window.screen.width / 2) * -1;
  }

  if ((window.screen.width - list_films.clientWidth) > valor_left) {
    valor_left = window.screen.width - list_films.clientWidth - 80;
  }
  list_films.style.marginLeft = valor_left + 'px';
}

// configuração do modal

var fade = document.getElementById('id-fade');
var modal = document.getElementById('id-modal');
var bt_sair = document.getElementById('bt-sair');
var bt_add_filme = document.getElementById('li-add-filme');

var toggleHide = function(){
  [fade, modal].forEach((el) => el.classList.toggle('hide'));
}

bt_add_filme.addEventListener('click', toggleHide);
bt_sair.addEventListener('click', toggleHide);
fade.addEventListener('click', toggleHide);

// configraçao para carregar a imagem

function readImage(){
  if(this.files && this.files[0]){
    var file = new FileReader();
    file.onload = function(e){
      document.getElementById('img_filme').src = e.target.result;
    };
    file.readAsDataURL(this.files[0]);    
    document.getElementById('nome_image').value = this.files[0].name;
  }
}

document.getElementById('imgem-filme').addEventListener('change', readImage, false);