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
var saveBtn9 = $('#save9');
var userMemo9 = $('#userMemo9');
    saveBtn9.on('click', function (event) {
        event.preventDefault();

        var savedMemo9 = $('#userMemo9').val();
        localStorage.setItem('savedMemo9', savedMemo9); 
    });

function showMemo9() {
    var savedMemo9 = localStorage.getItem("savedMemo9");
    userMemo9 = $("#userMemo9");
    userMemo9.val(savedMemo9);
}
showMemo9();

// for 10am
var saveBtn10 = $('#save10');
var userMemo10 = $('#userMemo10');
    saveBtn10.on('click', function (event) {
        event.preventDefault();

        var savedMemo10 = $('#userMemo10').val();
        localStorage.setItem('savedMemo10', savedMemo10); 
    });

function showMemo10() {
    var savedMemo10 = localStorage.getItem("savedMemo10");
    userMemo10 = $("#userMemo10");
    userMemo10.val(savedMemo10);
}
showMemo10();

// for 11am
var saveBtn11 = $("#save11");
var userMemo11 = $("#userMemo11");
    saveBtn11.on("click", function (event) {
        event.preventDefault();

        var savedMemo11 = $("#userMemo11").val();
        localStorage.setItem("savedMemo11", savedMemo11); 
    });

function showMemo11() {
    var savedMemo11 = localStorage.getItem("savedMemo11");
    userMemo11 = $("#userMemo11");
    userMemo11.val(savedMemo11);
}
showMemo11();

// for 12pm
var saveBtn12 = $("#save12");
var userMemo12 = $("#userMemo12");
    saveBtn12.on("click", function (event) {
        event.preventDefault();

        var savedMemo12 = $("#userMemo12").val();
        localStorage.setItem("savedMemo12", savedMemo12); 
    });

function showMemo12() {
    var savedMemo12 = localStorage.getItem("savedMemo12");
    userMemo12 = $("#userMemo12");
    userMemo12.val(savedMemo12);
}
showMemo12();

// for 13
var saveBtn13 = $("#save13");
var userMemo13 = $("#userMemo13");
    saveBtn13.on("click", function (event) {
        event.preventDefault();

        var savedMemo13 = $("#userMemo13").val();
        localStorage.setItem("savedMemo13", savedMemo13); 
    });

function showMemo13() {
    var savedMemo13 = localStorage.getItem("savedMemo13");
    userMemo13 = $("#userMemo13");
    userMemo13.val(savedMemo13);
}
showMemo13();

// for 14
var saveBtn14 = $("#save14");
var userMemo14 = $("#userMemo14");
    saveBtn14.on("click", function (event) {
        event.preventDefault();

        var savedMemo14 = $("#userMemo14").val();
        localStorage.setItem("savedMemo14", savedMemo14); 
    });

function showMemo14() {
    var savedMemo14 = localStorage.getItem("savedMemo14");
    userMemo14 = $("#userMemo14");
    userMemo14.val(savedMemo14);
}
showMemo14();

// for 15
var saveBtn15 = $("#save15");
var userMemo15 = $("#userMemo15");
    saveBtn15.on("click", function (event) {
        event.preventDefault();

        var savedMemo15 = $("#userMemo15").val();
        localStorage.setItem("savedMemo15", savedMemo15); 
    });

function showMemo15() {
    var savedMemo15 = localStorage.getItem("savedMemo15");
    userMemo15 = $("#userMemo15");
    userMemo15.val(savedMemo15);
}
showMemo15();

// for 16
var saveBtn16 = $("#save16");
var userMemo16 = $("#userMemo16");
    saveBtn16.on("click", function (event) {
        event.preventDefault();

        var savedMemo16 = $("#userMemo16").val();
        localStorage.setItem("savedMemo16", savedMemo16); 
    });

function showMemo16() {
    var savedMemo16 = localStorage.getItem("savedMemo16");
    userMemo16 = $("#userMemo16");
    userMemo16.val(savedMemo16);
}
showMemo16();

// for 17
var saveBtn17 = $("#save17");
var userMemo17 = $("#userMemo17");
    saveBtn17.on("click", function (event) {
        event.preventDefault();

        var savedMemo17 = $("#userMemo17").val();
        localStorage.setItem("savedMemo17", savedMemo17); 
    });

function showMemo17() {
    var savedMemo17 = localStorage.getItem("savedMemo17");
    userMemo17 = $("userMemo17");
    userMemo17.val(savedMemo17);
}
showMemo17();