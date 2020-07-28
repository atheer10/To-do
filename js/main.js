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

//   $("#tasks-menu").click(function () {
//     $(".tasklist").show();
//     $(".coming").hide();
//   });

//   $("ul li").click(function () {
//     $("li").removeClass("active");
//     $(this).addClass("active");
//   });
// });

// if ($("ul li").hasClass(".active") {
//     // Do something if class exists
// } else {
//     // Do something if class does not exist
// }

// if ($(".mydivclass")[0]) {
//     // Do something if class exists
// } else {
//     // Do something if class does not exist
// }

// if ($("#tasks-menu").hasClass("active")) {
//   //   $(".tasklist").hide();
//   $("p").hide();
// } else {
//   $(".coming").hide();
