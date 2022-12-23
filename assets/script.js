// const daysTag = document.querySelector(".days"),
// currentDate = document.querySelector(".current-date"),
// prevNextIcon = document.querySelectorAll(".icons span");

// let date = new Date(),
// currYear = date.getFullYear(),
// currMonth = date.getMonth();

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