// Display the current day
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));
// Display the current day
var currentTime = moment();
$("#currentTime").text(currentTime.format('LT'));

// to dyslay current hour
var currentHour = moment().hour();
console.log(currentHour);



// Color-code each timeblock based on past, present, and future when the timeblock is viewed.
function checkTime() {
    for (var i = 9; i < 18; i++) { // workday starts at 9 and finishes at 17
        var textArea = document.getElementById("userMemo" + i) // to select textarea by id + i
        if (currentHour == i) {
            textArea.classList.add("present");
        } else if (currentHour > i) {
            textArea.classList.add("past");
        } else {
            currentHour > i
            textArea.classList.add("future");
        }
    }
}
checkTime();