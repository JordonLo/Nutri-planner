

// Jordon changes (local storage for nutrition and calories)
var progressBar = document.querySelector("#progressbar");
var nutritionInput = document.querySelector("#Nutrition");
var caloriesInput = document.querySelector("#Calories");
var saveButton = document.querySelector("#save");
var calorieTracker = JSON.parse(localStorage.getItem("calorieTracker")) || {calorietotal : 0 , foodItems:[]};

saveButton.addEventListener("click",function(event) {
  event.preventDefault();

  var foodItem = {
  Nutrition: nutritionInput.value.trim(),
  Calories: parseInt(caloriesInput.value.trim()),
};
calorieTracker.foodItems.push(foodItem);
calorieTracker.calorietotal += foodItem.Calories
localStorage.setItem("calorieTracker", JSON.stringify(calorieTracker));
progressBar.setAttribute("value", calorieTracker.calorietotal);
progressBar.textContent = ((calorieTracker.calorietotal/7000)*100).toFixed(2) + "%";
});

// total calories
// Jordon changes to calories horizontal graph