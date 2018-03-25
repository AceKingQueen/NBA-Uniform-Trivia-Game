
//display jersey # and player as a switch? or just type in?
//each button has jersey number - format as table? Would that be easiest?
//Decide how to present options.

//have separate array of wrong nba names to add as options, get one random old school name then a second random new school name

//timer on start button that ends game after 60 seconds

// JavaScript function that wraps everything, load HTML first
$(document).ready(function() {



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

//tally & display score
$("#correct-answer").text("You got " + wins + " correct.");
$("#incorrect-answer").text("You got " + losses + " incorrect.");


//timers with warning at 10 & 5 seconds left
setTimeout(fiveSeconds, 1000 * 50);
setTimeout(tenSeconds, 1000 * 55);

function fiveSeconds() {
    $("#time-left").append("<h2>10 Seconds Left!</h2>");
  }

function tenSeconds() {
    $("#time-left").append("<h2>5 Seconds Left!</h2>");
  }

function timeUp() {
  $("#time-left").append("<h2>Time's Up!</h2>");
}

//timer displaying countdown
var number = 60;

var intervalId;


//on button click, timer starts
// $(".btn btn-primary btn-lg btn-block").on("click", run()
// );

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function stop() {
    clearInterval(intervalId);
}

function decrement() {
    number--;
    $("#countdown").html("Time Remaining: " + number + " seconds");

    //have countdown stop at zero
    if (number === 0) {
        stop();
        timeUp()
;    }
}

run();

})