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


//ELENA CODE FOR RECIPE

var eMainBoxEl = document.getElementById('recipe-box');
var eButtonEl = document.getElementById('eSubmitButton');
var eInputEl = document.getElementById('ingredient-input');
var eUserIngredient;

//examlpe of input for test
//var eUserIngredient="chicken";

//Getting the API recipes
function egetRecipeApi(eUserIngredient){

console.log(eUserIngredient);

//While working on a webpage keep link commented. Our limits for API requests 10/minute.

var eURLlink=('https://api.edamam.com/api/recipes/v2?type=public&q='+eUserIngredient+'&app_id=26800874&app_key=4551b6207ecf91cbd1f06e8bd5cc6327&diet=balanced');
console.log(eURLlink);

fetch(eURLlink)
.then(function(response){
  return response.json();
})
.then(function(data){
  console.log(data);
  console.log(data.hits[0].recipe.calories);
  console.log(data.hits[0].recipe.images.SMALL.url);
  console.log(data.hits[0].recipe.label);
  console.log(data.hits[0].recipe.totalTime);
  console.log(data.hits[0].recipe.url);
  console.log(data.hits[0].recipe.ingredientLines);

  //getting data from user recipe request to create a card in html
  var eRecipeName = data.hits[0].recipe.label;
  var eCoockingTime = data.hits[0].recipe.totalTime;  
  var eRecipeCalories = data.hits[0].recipe.calories;
  var eImageLink = data.hits[0].recipe.images.SMALL.url;
  var eIngredientsArray = data.hits[0].recipe.ingredientLines;
  var eRecipeLinkOrig = data.hits[0].recipe.url;
  
//creating new html card inside Recipes and Meals box :
  
var eCardEl = document.createElement('div');
eCardEl.setAttribute("class","card");
eMainBoxEl.appendChild(eCardEl);

var eCardContentsEl = document.createElement('div');
eCardContentsEl.setAttribute("class","card-content");
eCardEl.appendChild(eCardContentsEl);

var eMediaEl = document.createElement('div');
eMediaEl.setAttribute("class","media");
eCardContentsEl.appendChild(eMediaEl);

var eMediaLeftEl = document.createElement('div');
eMediaLeftEl.setAttribute("class","media-left");
eMediaEl.appendChild(eMediaLeftEl);

var eFigureEl = document.createElement('figure');
eFigureEl.setAttribute("class","image is-200x200");
eMediaLeftEl.appendChild(eFigureEl);

var eImgEl = document.createElement('img');
eImgEl.setAttribute("src",eImageLink);
eImgEl.setAttribute("alt",eRecipeName);
eFigureEl.appendChild(eImgEl);

var eMediaContentEl = document.createElement('div');
eMediaContentEl.setAttribute("class","media-content");
eMediaEl.appendChild(eMediaContentEl);

var eRecipeTitleEl = document.createElement('p');
eRecipeTitleEl.setAttribute("class","title is-4");
eRecipeTitleEl.textContent = eRecipeName;
eMediaContentEl.appendChild(eRecipeTitleEl);

var eCookingTimeEl = document.createElement('p');
eCookingTimeEl.setAttribute("class","subtitle is-6");
eCookingTimeEl.textContent = 'Cooking time: ' + eCoockingTime + ' min.';
eMediaContentEl.appendChild(eCookingTimeEl);

var eCaloriesEl = document.createElement('p');
eCaloriesEl.setAttribute("class","subtitle is-6");
eCaloriesEl.textContent = 'Calories: ' + eRecipeCalories;
eMediaContentEl.appendChild(eCaloriesEl);


var eContentEl = document.createElement('div');
eContentEl.setAttribute("class","content");
eCardContentsEl.appendChild(eContentEl);

var eIngredientsListEl = document.createElement('p');
eIngredientsListEl.setAttribute("class","subtitle is-6");
eIngredientsListEl.textContent = 'Ingredients:';
eContentEl.appendChild(eIngredientsListEl);

//list of ingredients
for (let e = 0; e < eIngredientsArray.length; e++) {
  const element = eIngredientsArray[e];
  var eIngredientEl = document.createElement('p');
  eIngredientEl.setAttribute("class","subtitle is-6");
  eIngredientEl.textContent = '-  ' + element + ';';
  eContentEl.appendChild(eIngredientEl);
}

var eCookingLinkEl = document.createElement('a');
eCookingLinkEl.setAttribute("href",eRecipeLinkOrig);
eCookingLinkEl.textContent = '-- Cooking details --';
eContentEl.appendChild(eCookingLinkEl);

});
}

eButtonEl.addEventListener('click', function(){
  eUserIngredient = eInputEl.value;
  console.log(eUserIngredient);
  console.log("submitButton.addEventListener");

  egetRecipeApi(eInputEl.value);
  //if (eInputEl.value != null){ }
})
