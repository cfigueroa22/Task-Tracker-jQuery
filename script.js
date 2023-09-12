$(document).ready(function () {
  $("#button").click(function () {
    var task = $("#task-input").val();
    $("#tasks").append("<li id='task'>" + task + "</li>");
  });

  $(document).on("dblclick", "#task", function () {
    $(this).toggleClass("strike").fadeOut("slow");
  });

  $("input").focus(function () {
    $(this).val(" ");
  });
});
