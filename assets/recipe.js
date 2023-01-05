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

var eBrackingElement = document.createElement('br');
eMainBoxEl.appendChild(eBrackingElement);

//clear input
eInputEl.value = "";

});
}

eButtonEl.addEventListener('click', function(){
  eUserIngredient = eInputEl.value;
  console.log(eUserIngredient);
  console.log("submitButton.addEventListener");

  egetRecipeApi(eInputEl.value);
  //if (eInputEl.value != null){ }
})