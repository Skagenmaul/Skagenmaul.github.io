$("#wrapper").css("overflow", "hidden");
$("#imgs").css("overflow", "show");

var nummer = 0;

$(document).ready(function () {
  if(nummer==0){

      $("#imgs").animate({bottom:"+404"},500,'linear');
      nummer=nummer+1;
  }
});
