
/* Back-end ----------------*/
var numberArray = [];
var newArray = [];


function countDown (numberInput) {
  for (i = 1; i <= numberInput; i += 1){
  numberArray.push(i);
}
}

var pingPong = function() {
  numberArray.map(function(numberArrays){
  if (numberArrays % 15 === 0){
    newArray.push("<li>pingpong</li>");
  } else if (numberArrays % 5 === 0){
    newArray.push("<li>pong</li>");
  } else if (numberArrays % 3 === 0){
    newArray.push("<li>ping</li>");
  } else {
    newArray.push("<li>" + numberArrays + "</li");
  }
});
}

/* Front-end ----------------*/
$(document).ready(function(){
  $(".formDiv form").submit(function(event) {
    event.preventDefault();
    numberArray = [];
    newArray = [];
    var numberInput = parseInt($("input#numberInput").val());
    var array1Input = countDown(numberInput);
    var newArrayInput = pingPong();
    $(".output").html(newArray);
    this.reset();
  });
});
