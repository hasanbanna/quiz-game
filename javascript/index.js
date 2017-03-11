// fetch data from quiz API
// https://opentdb.com/api.php?amount=10&type=multiple
$(document).ready(function(){
  var questions_answers={};
  $.ajax({
    url:"https://opentdb.com/api.php?amount=10&type=multiple",
    type:'get',
    dataType:'JSON',
    success: function(result){
      var l = result.results.length;
      for(var i = 0; i < l; i++){
        $("#quiz-area").append("<p>"+result.results[i].category +"</p>");
        $("#quiz-area").append("<p>"+result.results[i].question +"</p>");
        for(var j = 0; j < 3; j++){
        $("#quiz-area").append("<p>"+result.results[i].incorrect_answers[j] +"</p>");
        }
        $("#quiz-area").append("<p>"+result.results[i].correct_answer+"</p>");
      }

    //  console.log(result);
    }
  });

});
