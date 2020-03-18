$("#wrapper").css("overflow", "hidden");
$("#slider").css("overflow", "hidden");

var nummer = 0;

$("#slider").click(function () {
  if(nummer==0){

      $("#imgs").animate({bottom:"+404"},500,'linear');
      nummer=nummer+1;
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
