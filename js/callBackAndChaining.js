$(document).ready(function () {
  //callback
  $("#btn1").click(function () {
    $("img").slideUp(2000, function () {
      $("img").slideDown(2000);
    });
  });

  //chaining
  $("#btn2").click(function () {
    $("img").slideUp(2000).slideDown(2000);
  });
});
