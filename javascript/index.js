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
        $("#quiz-area").append("<h1>Question 1</h1>");
        $("#quiz-area").append("<h2>Category -- "+result.results[0].category +"</h2>")
        $("#quiz-area").append("<h2>"+result.results[0].question +"</h2>");
        var possible_answers ="<ul>";
        for(var j = 0; j < 3; j++){
        possible_answers+="<li>"+result.results[0].incorrect_answers[j] +"</li>";
        }
        possible_answers+="<li>"+result.results[0].correct_answer+"</li>";
        possible_answers+="</ul>";
        $("#quiz-area").append(possible_answers);

    }
  });

});
