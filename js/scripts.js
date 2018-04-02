//business logic
function Listing(list) {
  this.list = list;

}
Listing.prototype.Tasking = function(){
  return this.list;
}



// user interface logic
$(document).ready(function() {
  $("#listForm").submit(function(event) {
    event.preventDefault();

  var userInput = $("#listed").val();


  var userResult = new Listing(userInput)

$("ol#tasked").append("<li>" + userResult.Tasking() + "<div class='tasks'>" + "Done" + "</div></li>");
    $(".tasks").on("click", function(){
      $(this).closest("li").remove();
  //  $(".tasks").last().click(function(){
  //        $("#show-list").show();
  //        $("#show-list h2").text(userResult.list);
  //        $(".tasks").text(userResult.list);


      $("input#listed").val("");

    });

});
});
