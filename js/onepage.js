$("#wrapper").css("overflow", "hidden");
$("#imgs").css("overflow", "hidden");

var nummer = 0;

$(document).click(function () {
  if(nummer==0){

      $("#imgs").animate({bottom:"+404"},500,'linear');
      nummer=nummer+1;
  }
});
