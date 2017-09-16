$(document).on("turbolinks:load", function(){
  $("#btn-start").on('click',function(){
    $("#main-area").replaceWith(playArea());
  });
  function playArea(){
    var html = "";
    html += "<h1 class='question'>Question Goes Here</h1>";
    var num_of_answers = 4;
    for(var i = 0; i < num_of_answers; i++){
    html += " <button id='btn-answer'>"+i+"</button>";
    }
    return html;
  }
});

