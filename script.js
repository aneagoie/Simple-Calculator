$(document).ready(function() {

    $('.num, .sym, .equal, .clear').hover(function(){
      $(this).css("opacity", "0.9");
    })
    $('.num, .sym, .equal, .clear').mouseleave(function(){
      $(this).css("opacity", "1");
    })

       num1= "";
       num2= "";
    $('.num').click(function() {
      var i = $('.console').text();
      if ( i === "+" || i === "-" || i === "*" || i === "/" ) {
        $('.console').empty();
      }
      $('.console').append($(this).text());

     });
    $('.sym').click(function() {
     if (num1 === "") {
      num1 = $('.console').text();
      }
     $('.console').empty();
      $('.console').append($(this).text());
      symbol = $('.console').text();
     });
  $('.clear').click(function() {
     $('.console').empty();
      num1= "";
       num2= "";
       });
   $('.equal').click(function() {
    if (num2 === "") {
      num2 = $('.console').text();
      }
     $('.console').empty();
      var int1 = Number(num1);
      var int2 = Number(num2);
      var finalanswer = "";
      if (symbol === "+") {
        finalanswer = adding(int1, int2);
      } else if (symbol === "-") {
        finalanswer = subtract(int1, int2);
      }
       else if (symbol === "*") {
        finalanswer = multiply(int1, int2);
    } else {
      finalanswer = divide(int1, int2);
    }

      $('.console').append(finalanswer);

      num1 = "";
      num2 = "";


       });



var adding = function(numX, numY) {
    var answer = numX+numY;
    return answer;
};
var subtract = function(numX, numY) {
    var answer = numX-numY;
    return answer;
};
var divide = function(numX, numY) {
    var answer = numX / numY;
    return answer;
};
var multiply = function(numX, numY) {
    var answer = numX*numY;
    return answer;
};

  });
