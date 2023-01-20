// Display the current day
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

var time = moment();
// $("#currentTime").text(time.format('LTS'));
$("#currentTime").text(time.format('LTS'));

var time = moment().format("HH:mm:ss");
$("#4a").text(time);



// Color-code each timeblock based on past, present, and future when the timeblock is viewed.

// Save the event in local storage when the save button is clicked in that timeblock.

// Persist events between refreshes of a page