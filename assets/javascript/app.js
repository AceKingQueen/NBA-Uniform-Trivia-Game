
//display jersey # and player as a switch? or just type in?
//each button has jersey number - format as table? Would that be easiest?
//Decide how to present options.

//have separate array of wrong nba names to add as options, get one random old school name then a second random new school name

//timer on start button that ends game after 60 seconds

var wins = 0;
var losses = 0;

//capture correct answers
//if click on correct answer: on click event

$("#correct").on("click", function() {
    wins++;
    console.log(wins);
})

//capture incorrect answers
$(".incorrect").on("click", function() {
    losses++;
    console.log(losses);
})
//tally score



//CSS styling give all elements padding
