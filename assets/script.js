// const daysTag = document.querySelector(".days"),
// currentDate = document.querySelector(".current-date"),
// prevNextIcon = document.querySelectorAll(".icons span");

// let date = new Date(),
// currYear = date.getFullYear(),
// currMonth = date.getMonth();
const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");

// const months = ["January", "February", "March", "April", "May", "June", "July",
//               "August", "September", "October", "November", "December"];
// const renderCalendar = () => {
//     let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), 
//     lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
//     lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), 
//     lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); 
//     let liTag = "";
//     for (let i = firstDayofMonth; i > 0; i--) { 
//         liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
//     }
//     for (let i = 1; i <= lastDateofMonth; i++) { 
//         let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
//                      && currYear === new Date().getFullYear() ? "active" : "";
//         liTag += `<li class="${isToday}">${i}</li>`;
//     }
//     for (let i = lastDayofMonth; i < 6; i++) { 
//         liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
//     }
//     currentDate.innerText = `${months[currMonth]} ${currYear}`; 
//     daysTag.innerHTML = liTag;
// }


// // Fill in the calendar with the days of the month
// for (var i = 1; i <= numberOfDays; i++) {
//   var className = "";
//   if (i === currentDate) {
//     className = "current-date";
//   }
//   calendar += '<td><button class="' + className + '" data-date="' + i + '">' + i + '</button></td>';

//   // If we have reached the end of a week, start a new row
//   if ((i + startingDay) % 7 === 0) {
//     calendar += '</tr><tr>';
//   }
// }

// // Close the calendar grid
// calendar += '</tr></table>';

// // Insert the calendar into the div with the id "calendar"
// document.getElementById('calendar').innerHTML = calendar;

// // Jordon changes (local storage for nutrition and calories)
// // Fill in the calendar with the days of the month
// for (var i = 1; i <= numberOfDays; i++) {
//   var className = "";
//   if (i === currentDate) {
//     className = "current-date";
//   }
//   calendar += '<td><button class="' + className + '" data-date="' + i + '">' + i + '</button></td>';
// renderCalendar();
// prevNextIcon.forEach(icon => { 
//     icon.addEventListener("click", () => { 
//         currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
//         if(currMonth < 0 || currMonth > 11) { 
//             date = new Date(currYear, currMonth);
//             currYear = date.getFullYear(); 
//             currMonth = date.getMonth(); 
//         } else {
//             date = new Date(); 
//         }
//         renderCalendar();
//     });
// });

//   // If we have reached the end of a week, start a new row
//   if ((i + startingDay) % 7 === 0) {
//     calendar += '</tr><tr>';
//   }
// }

// // Close the calendar grid
// calendar += '</tr></table>';

// // Insert the calendar into the div with the id "calendar"
// document.getElementById('calendar').innerHTML = calendar;
const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];
const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), 
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), 
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); 
    let liTag = "";
    for (let i = firstDayofMonth; i > 0; i--) { 
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }
    for (let i = 1; i <= lastDateofMonth; i++) { 
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }
    for (let i = lastDayofMonth; i < 6; i++) { 
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; 
    daysTag.innerHTML = liTag;
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
// Fill in the calendar with the days of the month
for (var i = 1; i <= numberOfDays; i++) {
  var className = "";
  if (i === currentDate) {
    className = "current-date";
  }
  calendar += '<td><button class="' + className + '" data-date="' + i + '">' + i + '</button></td>';
renderCalendar();
prevNextIcon.forEach(icon => { 
    icon.addEventListener("click", () => { 
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
        if(currMonth < 0 || currMonth > 11) { 
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear(); 
            currMonth = date.getMonth(); 
        } else {
            date = new Date(); 
        }
        renderCalendar();
    });
});

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

dailyTaskForm.addEventListener("click", function(event) {
  event.preventDefault();

  // var dailytaskInput = dailytaskInput.value.trim();

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

// Jordon changes to calories horizontal graph
