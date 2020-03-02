$("#wrapper").css("overflow", "hidden");


$("#firstDown").click(function(){
console.log("hit");

  $('html, body').animate({
        scrollTop: $("#box2").offset().top
    }, 2000);



});

$("#box2").click(function(){
console.log("hit");

  $('html, body').animate({
        scrollTop: $("#wrapper").offset().top
    }, 2000);
});

// function openNav(){
//   document.getElementById("homeNav").style.height = "50%";}
//
//
// }



//test
//test2
