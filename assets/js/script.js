// Display the current day
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

// Display the current day
var currentTime = moment();
$("#currentTime").text(currentTime.format('LT'));


// Color-code each timeblock based on past, present, and future when the timeblock is viewed.
var color = document.getElementsByClassName("hour");
var date = new Date();
var currentHour = date.getHours();
console.log(currentHour);






// Save the event in local storage when the save button is clicked in that timeblock.



// Persist events between refreshes of a page