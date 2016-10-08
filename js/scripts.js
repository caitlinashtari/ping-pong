/* Back-end ----------------*/
var numberArray = [];


var number = function (numberInput){
  if (numberInput % 3 === 0 && numberInput % 15 != 0){
    return "ping";
  } else if (numberInput % 5 === 0 && numberInput % 15 != 0){
    return "pong";
  } else if (numberInput % 15 === 0){
    return "pingpong";
  } else {
    return numberInput;
  }
};



/* Front-end ----------------*/
$(document).ready(function(){
  $(".formDiv form").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("input#numberInput").val());
    numberArray.push(numberInput);
    var result = number(numberInput);


    $(".output").text(result);

  });






});
