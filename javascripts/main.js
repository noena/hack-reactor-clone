$(document).ready(function(){
  $(".question").click(function(){
    $answer = $(this);
      $answer = $answer.next();
      $answer.slideToggle("slow");
      $(this).next().find(".answer").slideToggle("slow");
    });
});
