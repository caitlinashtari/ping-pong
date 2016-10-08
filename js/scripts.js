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
  if (numberArrays % 3 === 0 && numberArrays % 15 != 0){
    newArray.push("ping");
  } else if (numberArrays % 5 === 0 && numberArrays % 15 != 0){
    newArray.push("pong");
  } else if (numberArrays % 15 === 0){
    newArray.push("pingpong");
  } else {
    newArray.push(numberArrays);
  }
});
}



/* Front-end ----------------*/
$(document).ready(function(){
  $(".formDiv form").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("input#numberInput").val());
    var array1Input = countDown(numberInput);
    pingPong();






    $(".output").text(newArray);

  });






});
