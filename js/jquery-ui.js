$("document").ready(function () {
  //datepicker
  $("#datepicker").datepicker({
    showOtherMonths: true,
    selectOtherMonths: true,
    showButtonPanel: true,
    changeMonth: true,
    changeYear: true,
  });

  //   dialog

  $("#dialog").dialog({
    width: 400,
    resizable: false,
    modal: true,
    buttons: {
      Submit: function () {
        alert("Submitted");
        $(this).dialog("close");
      },
      Cancel: function () {
        alert("Cancelled");
        $(this).dialog("close");
      },
      test: () => {
        alert("test");
        $(this).dialog("close");
      },
    },
    show: {
      effect: "blind",
      duration: 1000,
    },
    hide: {
      effect: "explode",
      duration: 1000,
    },
  });

  //   accordion
  $("#accordion").accordion();

  //   draggable
  $("#draggable").draggable();

  //   sortable
  $("#sortable").sortable();
});
