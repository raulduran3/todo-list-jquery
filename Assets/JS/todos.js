// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

// Click on X to Delete Todos
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
   var todoText = $(this).val();
   $(this).val("");
   $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText +  "</li>");
  }
});


$(".fa-hand-spock-o").click(function(){
  $("input[type='text']").fadeToggle();
});
