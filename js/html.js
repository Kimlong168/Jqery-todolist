$(document).ready(function () {
  $("#btn1").click(function () {
    $("#box").append("<p>Appended text</p>");
  });

  $("#btn2").click(function () {
    $("#box").prepend("<p>Prepended text</p>");
  });

  $("#btn3").click(function () {
    $("#box").before("<p>Before text</p>");
  });

  $("#btn4").click(function () {
    $("#box").after("<p>After text</p>");
  });

  //remove the selected element
  $("#btn5").click(function () {
    $("#box").remove();
  });

  //remove the child element
  $("#btn6").click(function () {
    $("#box").empty();
  });

  $("#btn7").click(function () {
    alert("Text: " + $("#test").text());
  });
  $("#btn8").click(function () {
    alert("HTML: " + $("#test").html());
  });

  $("#btn9").click(function () {
    alert("Value: " + $("#input").val());
  });

  $("#btn10").click(function () {
    alert("Value: " + $("#input").css("background-color"));
  });
  $("#btn11").click(function () {
    $("#input").css("background-color", "red");
  });

  $("#btn12").click(function () {
    $("#box").addClass('blue');
  });

  $("#btn13").click(function () {
    $("#box").removeClass('blue');
  });

  $("#btn14").click(function () {
    $("#box").toggleClass('blue');
  });
});
