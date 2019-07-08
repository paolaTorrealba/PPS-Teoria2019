let btnON = false;

$('.button').click( () => {
  if(btnON){
    $('.button').removeClass('active');
    $('.button .off').removeClass('nonactive');
    $('.button .on').addClass('nonactive');
    btnON = false;
  }else{
    $('.button').addClass('active');
    $('.button .on').removeClass('nonactive');
    $('.button .off').addClass('nonactive');
    
    btnON = true;
  }
})