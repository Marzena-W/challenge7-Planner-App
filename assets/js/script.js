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
        var textArea = $('#userMemo' + i) // to select textarea by id + i
        if (currentHour == i) {
            textArea.addClass('present');
        } else if (currentHour > i) {
            textArea.addClass("past");
        } else {
            currentHour > i
            textArea.addClass("future");
        } 
    }
}
checkTime();


// Save the event in local storage when the save button is clicked in that timeblock
// for 9am
var saveBtn9 = document.querySelector("#save9");
var userMemo9 = document.querySelector("#userMemo9");
    saveBtn9.addEventListener("click", function (event) {
        event.preventDefault();

        var savedMemo9 = document.querySelector("#userMemo9").value;
        localStorage.setItem("savedMemo9", savedMemo9); 
    });

function showMemo9() {
    var savedMemo9 = localStorage.getItem("savedMemo9");
    userMemo9 = document.getElementById("userMemo9");
    userMemo9.value = savedMemo9;
}
showMemo9();

// for 10am
var saveBtn10 = document.querySelector("#save10");
var userMemo10 = document.querySelector("#userMemo10");
    saveBtn10.addEventListener("click", function (event) {
        event.preventDefault();

        var savedMemo10 = document.querySelector("#userMemo10").value;
        localStorage.setItem("savedMemo10", savedMemo10); 
    });

function showMemo10() {
    var savedMemo10 = localStorage.getItem("savedMemo10");
    userMemo10 = document.getElementById("userMemo10");
    userMemo10.value = savedMemo10;
}
showMemo10();

// for 11am
var saveBtn11 = document.querySelector("#save11");
var userMemo11 = document.querySelector("#userMemo11");
    saveBtn11.addEventListener("click", function (event) {
        event.preventDefault();

        var savedMemo11 = document.querySelector("#userMemo11").value;
        localStorage.setItem("savedMemo11", savedMemo11); 
    });

function showMemo11() {
    var savedMemo11 = localStorage.getItem("savedMemo11");
    userMemo11 = document.getElementById("userMemo11");
    userMemo11.value = savedMemo11;
}
showMemo11();

// for 12pm
var saveBtn12 = document.querySelector("#save12");
var userMemo12 = document.querySelector("#userMemo12");
    saveBtn12.addEventListener("click", function (event) {
        event.preventDefault();

        var savedMemo12 = document.querySelector("#userMemo12").value;
        localStorage.setItem("savedMemo12", savedMemo12); 
    });

function showMemo12() {
    var savedMemo12 = localStorage.getItem("savedMemo12");
    userMemo12 = document.getElementById("userMemo12");
    userMemo12.value = savedMemo12;
}
showMemo12();

// for 13
var saveBtn13 = document.querySelector("#save13");
var userMemo13 = document.querySelector("#userMemo13");
    saveBtn13.addEventListener("click", function (event) {
        event.preventDefault();

        var savedMemo13 = document.querySelector("#userMemo13").value;
        localStorage.setItem("savedMemo13", savedMemo13); 
    });

function showMemo13() {
    var savedMemo13 = localStorage.getItem("savedMemo13");
    userMemo13 = document.getElementById("userMemo13");
    userMemo13.value = savedMemo13;
}
showMemo13();

// for 14
var saveBtn14 = document.querySelector("#save14");
var userMemo14 = document.querySelector("#userMemo14");
    saveBtn14.addEventListener("click", function (event) {
        event.preventDefault();

        var savedMemo14 = document.querySelector("#userMemo14").value;
        localStorage.setItem("savedMemo14", savedMemo14); 
    });

function showMemo14() {
    var savedMemo14 = localStorage.getItem("savedMemo14");
    userMemo14 = document.getElementById("userMemo14");
    userMemo14.value = savedMemo14;
}
showMemo14();

// for 15
var saveBtn15 = document.querySelector("#save15");
var userMemo15 = document.querySelector("#userMemo15");
    saveBtn15.addEventListener("click", function (event) {
        event.preventDefault();

        var savedMemo15 = document.querySelector("#userMemo15").value;
        localStorage.setItem("savedMemo15", savedMemo15); 
    });

function showMemo15() {
    var savedMemo15 = localStorage.getItem("savedMemo15");
    userMemo15 = document.getElementById("userMemo15");
    userMemo15.value = savedMemo15;
}
showMemo15();

// for 16
var saveBtn16 = document.querySelector("#save16");
var userMemo16 = document.querySelector("#userMemo16");
    saveBtn16.addEventListener("click", function (event) {
        event.preventDefault();

        var savedMemo16 = document.querySelector("#userMemo16").value;
        localStorage.setItem("savedMemo16", savedMemo16); 
    });

function showMemo16() {
    var savedMemo16 = localStorage.getItem("savedMemo16");
    userMemo16 = document.getElementById("userMemo16");
    userMemo16.value = savedMemo16;
}
showMemo16();

// for 17
var saveBtn17 = document.querySelector("#save17");
var userMemo17 = document.querySelector("#userMemo17");
    saveBtn147addEventListener("click", function (event) {
        event.preventDefault();

        var savedMemo17 = document.querySelector("#userMemo17").value;
        localStorage.setItem("savedMemo17", savedMemo17); 
    });

function showMemo17() {
    var savedMemo17 = localStorage.getItem("savedMemo17");
    userMemo17 = document.getElementById("userMemo17");
    userMemo17.value = savedMemo17;
}
showMemo17();