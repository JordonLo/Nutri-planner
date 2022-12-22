const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");

let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

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
const config = {
  type: 'bar',
  data: data,
  options: {
    indexAxis: 'y',
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      bar: {
        borderWidth: 2,
      }
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Chart.js Horizontal Bar Chart'
      }
    }
  },
};

const ctx = document.getElementById('myChart');
const DATA_COUNT = 24;
const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 3000};

const labels = Utils.hours({count: 24});
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Calories',
      data: Utils.numbers(NUMBER_CFG),
      borderColor: Utils.CHART_COLORS.red,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
    },
  ]
};

const actions = [
  
  {
    name: 'Add Data',
    handler(chart) {
      const data = chart.data;
      if (data.datasets.length > 0) {
        data.labels = Utils.months({count: data.labels.length + 1});

        for (let index = 0; index < data.datasets.length; ++index) {
          data.datasets[index].data.push(Utils.rand(-100, 100));
        }

        chart.update();
      }
    }
  },
  {
    name: 'Remove Data',
    handler(chart) {
      chart.data.labels.splice(-1, 1); // remove the label first

      chart.data.datasets.forEach(dataset => {
        dataset.data.pop();
      });

      chart.update();
    }
  }
];