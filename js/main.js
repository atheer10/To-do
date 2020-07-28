console.log("hello world");

$(document).ready(function () {
  $("#close").click(function () {
    $(".menu").toggle();
    $("#menu-on").show();
  });
  $("#menu-on").click(function () {
    $(".menu").toggle();
    $("#menu-on").hide();
  });
});
