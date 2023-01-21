// Display the current day
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));
// Display the current day
var currentTime = moment();
$("#currentTime").text(currentTime.format('LT'));

// to dyslay current hour
var currentHour = moment().hour();
console.log(currentHour);



btn9.addEventListener("click", function (event) {
    event.preventDefault();
    var savedMemo9 = document.querySelector("#userMemo9").value;
    localStorage.setItem("savedMemo9", savedMemo9);
    console.log("savedMemo9", savedMemo9);
});

var userMemo9 = document.querySelector("#userMemo9");
function showMemos() {
    var savedMemo9 = localStorage.getItem("savedMemo9", savedMemo9);
    userMemo9.textContent(savedMemo9);
}