/* Back-end ----------------*/












/* Front-end ----------------*/
$(document).ready(function(){
  $("#formDiv form").submit(function(event){
    var numberInput = $("input#numberInput").val();

    $(".output").show();
    event.preventDefault();
  });






});
