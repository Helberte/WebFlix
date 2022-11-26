
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