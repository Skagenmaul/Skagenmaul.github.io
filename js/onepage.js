$("#wrapper").css("overflow", "hidden");
$("#slider").css("overflow", "hidden");

var y=0;

$("#imgs").click(function () {

  if(y==0){
      y=y+400;
      $("#imgs").animate({bottom:y},500,'linear');
      nummer=nummer+1;
      console.log(nummer);
  }
  else if(y==400){
      y=y+400;
      $("#imgs").animate({bottom:y},500,'linear');
      nummer=nummer+1;
  }
  else{
    y=0;
    $("#imgs").animate({bottom:y},500,'linear');
  }

});

$("#nav1").click(function() {
    $('html, body').animate({
        scrollTop: $("#welcome").offset().top
    }, 200);
});
$("#nav2").click(function() {
    $('html, body').animate({
        scrollTop: $("#slider").offset().top
    }, 200);
});
$("#nav3").click(function() {
    $('html, body').animate({
        scrollTop: $("#menu").offset().top
    }, 200);
});
