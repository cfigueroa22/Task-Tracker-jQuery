$(document).ready(function () {
  $("#button").click(function () {
    var task = $("input[name=list-item]").val();
    $("#tasks").append("<li>" + task + "</li>");
  });

  $(document).on("dblclick", "li", function () {
    $(this).toggleClass("strike").fadeOut("slow");
  });

  $("input").focus(function () {
    $(this).val(" ");
  });
});
