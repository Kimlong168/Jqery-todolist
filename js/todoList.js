loadTasks();

$(document).ready(function () {
  var oldTaskText = "";
  $("#addTask").click(() => {
    if ($("#task").val() == "") {
      // alert("Please enter a task");
      $("#dialog").dialog("open");
      return;
    }
    $("ul").append(
      '<div class="list bg-pink-600 p-2 mb-2 cursor-grab flex justify-between items-center"><li>' +
        $("#task").val() +
        "</li><div class='flex gap-2'><img width='20' src='./images/trash.png' class='delete cursor-pointer'/><img width='20' src='./images/edit.png' class='edit cursor-pointer'/></div></div>"
    );
    $("ul").find("li:last").hide().slideDown("slow");

    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    var newTask = $("#task").val();
    // Add the new task to the array
    tasks.push(newTask);

    // Save the updated tasks array to local storage
    localStorage.setItem("tasks", JSON.stringify(tasks));

    //reset the input field
    $("#task").val("");
  });

  $("#dialog").dialog({
    autoOpen: false,
    modal: true,
    buttons: {
      Ok: function () {
        $(this).dialog("close");
      },
    },
  });

  $("#dialog2").dialog({
    autoOpen: false,
    modal: true,
  });

  $(document).on("click", ".delete", function () {
    // const result = confirm("Are you sure to delete?");
    const taskToDelete = $(this).parent().parent();
    const parentNode = $(this.parentNode.parentNode);
    $("#dialog2").dialog("open");
    $("#dialog2").dialog({
      autoOpen: false,
      title: "Are you sure to delete?",
      modal: true,
      buttons: {
        Ok: function () {
          $(this).dialog("close");
          //detele task from local storage
          deleteTask(taskToDelete);
          //delete task from DOM
          parentNode
            .toggleClass("line-through")
            .slideUp("slow")
            .css("background-color", "red");
        },
      },
    });
    // if (result) {
    //   //detele task from local storage
    //   deleteTask($(this).parent().parent());
    //   //delete task from DOM
    //   $(this.parentNode.parentNode)
    //     .toggleClass("line-through")
    //     .slideUp("slow")
    //     .css("background-color", "red");
    // } else {
    //   console.log("User clicked Cancel");
    // }
  });

  $(document).on("click", ".edit", function () {
    //edit the task in DOM
    let value = $(this.parentNode.parentNode).text();
    value = value.replace(/✔️/g, "");
    oldTaskText = value;

    $(this.parentNode.parentNode).after(
      `<li class="flex items-center mb-2 "><input class="flex-1 h-[40px] w-full p-2 bg-transparent border border-pink-600 cursor-text outline-none" type="text" value="${value}"><button class="save p-2 bg-pink-600 text-white border border-pink-600 h-[40px]"><img width='20' src='./images/save.png' class=' cursor-pointer '/></button> </li>`
    );
    $(this.parentNode.parentNode).slideUp(200);
  });

  $(document).on("click", ".save", function () {
    let value = $(this.parentNode).find("input").val();

   
    if (value == "") {
      $("#dialog").dialog("option", "title", "Please enter a task");
      $("#dialog").dialog("open");
      return;
    }

    $(this.parentNode).slideUp(300);
    $(this.parentNode).after(
      `<div class="list bg-pink-600 p-2 mb-2 cursor-grab flex justify-between items-center"><li>${value}</li><div class='flex gap-2'><img width='20' src='./images/trash.png' class='delete cursor-pointer'/><img width='20' src='./images/edit.png' class='edit cursor-pointer'/></div></div>`
    );

    //edit the task in local storage
    editTask(oldTaskText, value);
  });

  //mark as done
  $(document).on("dblclick", "div.list", function () {
    $(this).toggleClass("bg-green-500");

    if ($(this).find("span").length == 0) {
      $(this.children[0]).prepend('<span class="done mr-3">✔️</span>');
    } else {
      $(this).find("span.done").remove();
    }
  });

  $("ul").sortable();

  // Function to delete a task
  function deleteTask(taskElement) {
    var taskText = taskElement.text();

    // Get tasks from local storage
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Remove the task from the array
    tasks = tasks.filter(function (task) {
      return task !== taskText;
    });

    // Save the updated tasks array to local storage
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // // Remove the task from the DOM
    // taskElement.remove();
  }

  // Function to edit a task
  function editTask(taskText, editedTask) {
    if (editedTask !== null) {
      // Get tasks from local storage
      var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

      // Find the index of the task in the array
      var index = tasks.indexOf(taskText);

      // Update the task in the array
      tasks[index] = editedTask;

      // Save the updated tasks array to local storage
      localStorage.setItem("tasks", JSON.stringify(tasks));

      // // Update the task in the DOM
      // editedTask.text(editedTask);
    }
  }
});

// Function to load tasks from local storage
function loadTasks() {
  var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  if (tasks.length > 0) {
    // Populate the to-do list with tasks from local storage
    for (var i = 0; i < tasks.length; i++) {
      addTaskToDOM(tasks[i]);
    }
  }
}

function addTaskToDOM(task) {
  $("ul").append(
    '<div class="list bg-pink-600 p-2 mb-2 cursor-grab flex justify-between items-center"><li >' +
      task +
      "</li><div class='flex gap-2'><img width='20' src='./images/trash.png' class='delete cursor-pointer'/><img width='20' src='./images/edit.png' class='edit cursor-pointer'/></div></div>"
  );
  $("ul").find("li:last").hide().slideDown("slow");
}
