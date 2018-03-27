// JavaScript function that wraps everything, load HTML first
$(document).ready(function() {


    
// 1) Press start to begin timer and reveal questions : gameStart
//on button click, timer starts
$("body").on("click", ".start-button", function() {
  
    $(".game-container").show();
    run();
});

// 2) countdown to 60 seconds and ability to choose











// 3) final screen with tally : finalScreen
var x = 0;
var wins = 0;
var losses = 0;

//capture correct answers
//if click on correct answer: on click event

$(".correct").on("click", function() {
    wins++;
    console.log(wins);
})

//capture incorrect answers
$(".incorrect").on("click", function() {
    losses++;
    console.log(losses);
})



//timers with warning at 10 & 5 seconds left
setTimeout(fiveSeconds, 1000 * 20);

function fiveSeconds() {
    $("#time-left").append("<h2>5 Seconds Left!</h2>");
  }

function timeUp() {
  $("#time-left").append("<h2>Time's Up!</h2>");

}

//timer displaying countdown
var number = 24;

var theClock;

function run() {
    clearInterval(theClock);
    theClock = setInterval(decrement, 1000);
}

function stop() {
    clearInterval(theClock);
}

//show final screen
function finalScreen() {
    $(".stats").show();

}


function decrement() {
    number--;
    $("#countdown").html("Time Remaining: " + number + " seconds");

    //have countdown stop at zero
    if (number === 0) {
        stop();
        timeUp();
        finalScreen();
        $("#correct-answer").text("You got " + wins + " out of 10 correct.");

    }
}



})