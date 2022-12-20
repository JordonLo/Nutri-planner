//the calendar
// Get the current month and year
var d = new Date();
var month = d.getMonth();
var year = d.getFullYear();
var currentDate = d.getDate();

// Get the first day of the month
var firstDay = new Date(year, month, 1);
var startingDay = firstDay.getDay();

// Get the number of days in the month
var numberOfDays = new Date(year, month + 1, 0).getDate();

// Create an array of month names
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Get the name of the current month
var currentMonth = monthNames[month];

// Create the calendar grid as a table
var calendar = '<h2>' + currentMonth + '</h2>';
calendar += '<table>';
calendar += '<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>';
calendar += '<tr>';

// Fill in the calendar with the appropriate number of blank cells
for (var i = 0; i < startingDay; i++) {
  calendar += '<td></td>';
}

// Fill in the calendar with the days of the month
for (var i = 1; i <= numberOfDays; i++) {
  var className = "";
  if (i === currentDate) {
    className = "current-date";
  }
  calendar += '<td><button class="' + className + '" data-date="' + i + '">' + i + '</button></td>';

  // If we have reached the end of a week, start a new row
  if ((i + startingDay) % 7 === 0) {
    calendar += '</tr><tr>';
  }
}

// Close the calendar grid
calendar += '</tr></table>';

// Insert the calendar into the div with the id "calendar"
document.getElementById('calendar').innerHTML = calendar;

// Jordon changes (local storage for nutrition and calories)
var nutritionInput = document.querySelector("#Nutrition");
var caloriesInput = document.querySelector("#Calories");
var saveButton = document.querySelector("#save")

saveButton.addEventListener("click",function(event) {
  event.preventDefault();

  var user = {
  Nutrition: nutritionInput.value.trim(),
  Calories: caloriesInput.value.trim(),
};

localStorage.setItem("user", JSON.stringify(user));

});

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

dailyTaskForm.addEventListener("Sumbit", function(event) {
  event.preventDefault();

  var dailytaskInput = dailytaskInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (dailytaskInput === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  dailyTasks.push(dailytaskInput);
  dailytaskInput.value = "";

  // Store updated todos in localStorage, re-render the list
  storeDailytasks();
  renderdailyTasks();
});

// Add click event to todoList element
dailytaskList.addEventListener("click", function(event) {
  var element = event.target;

  // Checks if element is a button
  if (element.matches("button") === true) {
    // Get its data-index value and remove the todo element from the list
    var index = element.parentElement.getAttribute("data-index");
    dailyTasks.splice(index, 1);

    // Store updated todos in localStorage, re-render the list
    storeDailytasks();
    renderdailyTasks();
  }
});

// Calls init to retrieve data and render it to the page on load
init()