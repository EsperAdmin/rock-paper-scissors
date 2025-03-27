//Human and computer default scores
let humanScore = 0;
let computerScore = 0;

//Create function to get a ranondom choice
function getComputerChoice() {
//Create 3 variables for rock, paper, and scissors === 0,1, and 2.
let rock = 0;
let paper = 1;
let scissors = 2;
//Use math.random to pick a number between 0 and 2
const getRandom = Math.floor(Math.random() * 3);
//create and else if chain to check if number is === to 1,2, or 3
if (getRandom === rock) {
    return console.log("ROCK!");
} else if (getRandom === paper) {
    return console.log("PAPER!");
} else if (getRandom === scissors){
    return console.log("SCISSORS!");
} else {
    return console.log("Uhhh... something went wrong.");
}
//return the true response from the else if chain.
}


function getHumanChoice() {
//Create variable for human choice

//Prompt the user for a choice and make it lowercase!
let choice = prompt("Pick a choice! ROCK!, PAPER!, OR SCISSORS!").toLowerCase();
//Create a else if chains for what the user inputs
if (choice === "rock") {
    return 0;
} else if (choice === "paper") {
    return 1;
} else if (choice === "scissors") {
    return 2;
} else {
    //Error number!
    return 3;
}
//return the true response from the else if chain.
}

function playRound() {

}

console.log(getHumanChoice());
getComputerChoice();