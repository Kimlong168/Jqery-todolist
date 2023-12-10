$(document).ready(function () {
  $("#btn1").click(() => {
    $("img").hide(1000);
  });
  $("#btn2").click(() => {
    $("img").show(1000);
  });
  $("#btn3").click(() => {
    $("img").toggle(1000);
  });

  $("#btn4").click(() => {
    $("img").fadeIn(1000);
  });
  $("#btn5").click(() => {
    $("img").fadeOut(1000);
  });
  $("#btn6").click(() => {
    $("img").fadeToggle(1000);
  });

  $("#btn7").click(function () {
    $("img").slideUp(1000);
  });
  $("#btn8").click(function () {
    $("img").slideDown(1000);
  });
  $("#btn9").click(function () {
    $("img").slideToggle(1000);
  });
  $("#btn10").click(function () {
    $("img").stop(1000);
  });

  $("#btn11").click(function () {
    $("img").animate(
      {
        width: "700px",
        height: "300px",
        opacity: "0.5",
      },
      2000
    );
  });

  //this is the list of effects in jquery
  //contextmenu
  //select
  //toggle
  //show
  //hide
  //fadeIn
  //fadeOut
  //fadeToggle
  //fadeTo
  //slideDown
  //slideUp
  //slideToggle
  //animate
  //delay
  //stop
  //queue
  //clearQueue
  //dequeue
  //promise
  //trigger
  //triggerHandler
  //bind
  //unbind
  //on
  //off
  //one
  //live
  //die
  //delegate
  //undelegate
  //ready
  //ajaxStart
  //ajaxStop
  //ajaxComplete
  //ajaxError
});
