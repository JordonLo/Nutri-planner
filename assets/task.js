var dailytaskInput = document.querySelector("#dailytask-text");
var dailytaskList = document.querySelector("#dailytask-list");
var dailyTaskForm = document.querySelector("#dailyTask-form");
var dailytaskCountSpan = document.querySelector("#dailyTask-count");

var dailyTasks = [];

function renderdailyTasks() {
  
  dailytaskList.innerHTML = "";
  dailytaskCountSpan.textContent = dailyTasks.length;
  
  for (var i = 0; i < dailyTasks.length; i++) {
    var dailyTask = dailyTasks[i];

    var li = document.createElement("li");
    li.textContent = dailyTask;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete ✔️";

    li.appendChild(button);
    dailytaskList.appendChild(li);
  }
}

function init() {
 
  var storedDailytasks = JSON.parse(localStorage.getItem("dailyTasks"));

  if (storedDailytasks !== null) {
    dailyTasks = storedDailytasks;
  }

  renderdailyTasks();
}

function storeDailytasks() {
  localStorage.setItem("dailyTasks", JSON.stringify(dailyTasks));
}

dailyTaskForm.addEventListener("click", function(event) {
  event.preventDefault();

  // Return from function early if submitted todoText is blank
  if (dailytaskInput.value === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  dailyTasks.push(dailytaskInput.value);
  dailytaskInput.value = "";

  // Store updated todos in localStorage, re-render the list
  storeDailytasks();
  renderdailyTasks();
});

// This handles the complete button
dailytaskList.addEventListener("click", function(event) {
  var element = event.target;

  // Checks if element is a button
  if (element.matches("button") === true) {
    // Get its data-index value and remove the todo element from the list
    var index = parseInt(element.parentElement.getAttribute("data-index"));
    console.log(element.parentElement);
    console.log(index);
    dailyTasks.splice(index, 1);
    

    // Store updated todos in localStorage, re-render the list
    storeDailytasks();
    renderdailyTasks();
  }
});

// Calls init to retrieve data and render it to the page on load
init()