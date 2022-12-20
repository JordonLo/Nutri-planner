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

// Add an event listener to each button in the calendar
var clickedDate;
var buttons = document.querySelectorAll('button');
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    clickedDate=this.getAttribute('data-date');
    console.log(clickedDate);
  });
});

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

