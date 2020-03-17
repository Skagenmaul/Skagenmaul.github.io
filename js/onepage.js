$("#imgs").css("overflow","hidden"); // gömmer allt utanför boxen
var nummer = 0; //variabel som används för att veta vart i slider man är
var element = document.querySelector("#slider");
$("#shrimps").click(function(){


    $("#imgs").animate({bottom:"+504px"});
    $("#slider").css("background-color", "green");


  console.log("hej");

});
$("nav").click(function(){

  element.scrollIntoView({ behavior: 'smooth'});

});
