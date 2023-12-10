$(document).ready(function () {
  //use arrow functon
  $("#btn1").click(() => {
    $("img").css("width", "500px");
  });

  //insert a function
  //   $("#btn1").click(func1);
  //   function func1() {
  //     $("img").css("width", "500px");
  //   }

  //use anaonymous function
  //   $("#btn1").click(function () {
  //     $("img").css("width", "500px");
  //   });

  $("#btn2").dblclick(() => {
    $("img").css("width", "700px");
  });

  //this is the list of events is jquery
  //click
  //dblclick
  //mouseenter
  //mouseleave
  //hover
  //focus
  //blur
  //change
  //keydown
  //keyup
  //keypress
  //submit
  //resize
  //scroll
  //load
  //unload
  //error


});
