// Display the current day
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));
// Display the current day
var currentTime = moment();
$("#currentTime").text(currentTime.format('LT'));

// to dyslay current hour
var currentHour = moment().hour();
console.log(currentHour);



// Color-code each timeblock based on past, present, and future
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
        showMemos(i);
    }
}
checkTime();


// Save the event in local storage when the save button is clicked in that timebloc
var index = 9;
var saveBtn = document.querySelectorAll(".saveBtn");
for (var i = 0; i < saveBtn.length; i++) {
    saveBtn[i].addEventListener("click", function (event) {
        event.preventDefault();
        console.log(index)

        var savedMemo = document.querySelector("#userMemo" + index).value;
        localStorage.setItem("savedMemo" + index, savedMemo);
        index++;
    })
};

var userMemo = document.querySelector("#userMemo");
function showMemos(i) {
    var savedMemo = localStorage.getItem("savedMemo" + i);
    var textArea = document.getElementById("userMemo" + i);
    textArea.value = savedMemo;
}