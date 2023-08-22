$(".sidebar").css("left", "-17%");
// ~ open sidebar
$(".open").click(function () {
    $(".sidebar").css("left", "0");
});

// ~ close sidebar
$(".close").click(function () {
    $(".sidebar").css("left", "-17%");
});


// ^ start div accordion
$(".singers h3").click(function () {
    $(this).next().slideToggle();
    $(".singers div").not($(this).next()).slideUp();
});

// ~ START COUNT DOWN SECTION
let totalDays = document.getElementById("day");
let totalHours = document.getElementById("hour");
let totalMinutes = document.getElementById("minute");
let totalSec = document.getElementById("sec");


let countDown = setInterval(function () {

    let deadline = new Date("dec 23, 2025 15:37:25").getTime();

    let todayDate = new Date().getTime();

    let remainingTime = deadline - todayDate;

    let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    totalDays.innerHTML = days;
    totalHours.innerHTML = hours;
    totalMinutes.innerHTML = minutes;
    totalSec.innerHTML = seconds;

    if (remainingTime < 0) {
        clearIntervl(countDown);
        totalDays.innerHTML = 0;
        totalHours.innerHTML = 0;
        totalMinutes.innerHTML = 0;
        totalSec.innerHTML = 0;
    }

}, 1000);

$("textarea").keyup(function () {
    let maxLength = $(this).val().length;
    $("#remainChar").text(`${100 - maxLength}`);
    if (maxLength == 100) {
        $("#remainChar").text("your available character finished");
    }
});