//Human and computer default scores
let humanScore = 0;
let computerScore = 0;

//Create function to get a ranondom choice
function getComputerChoice() {
//Use math.random to pick a number between 0 and 2
return Math.floor(Math.random() * 3);
//Return the the value.
}


function getHumanChoice() {
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

function playRound(humanChoice, computerChoice) {
//Create variables to grab choice from other functions.
console.log(`Computer: ${computerChoice} Human: ${humanChoice}`);

//create and else if chain, check if the choice is ===, <, or > and output
// 1 === draw, 2 === computer win, and 3 === human win.
if (humanChoice === computerChoice) {
    return 1;
} else if (humanChoice === 0 && computerChoice === 1) {
    return 21;
} else if (humanChoice === 1 && computerChoice === 2) {
    return 22;
} else if (humanChoice === 2 && computerChoice === 0) {
    return 20;
} else if (humanChoice === 2 && computerChoice === 1) {
    return 31;
} else if (humanChoice === 0 && computerChoice === 2) {
    return 32;
} else if (humanChoice === 1 && computerChoice === 0) {
    return 30;
}
//The number are grouped up by the computers choice so 22 === "2" is computer "1" is computer picking paper. Same setup for human
//EG: human is "3" coputer picks "1" === 31, human wins and computer picked "1" for paper

}

//Declare variables for the human and computer sections to pass to the functions
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

//Variable to hold round results from playRound function
let roundResults = playRound(humanSelection, computerSelection);


//Else if chain to manage Winner/Loser output and adding points.
if (roundResults === 1) {
    console.log("IT'S A DRAW!")
    console.log(`Human Score: ${humanScore}! Computer Score: ${computerScore}!`)
} else if (roundResults === 21) {
    computerScore = ++computerScore;
    console.log("COMPUTER WINS! PAPER BEATS ROCK!")
    console.log(`Human Score: ${humanScore}! Computer Score: ${computerScore}!`)
} else if (roundResults === 22) {
    computerScore = ++computerScore;
    console.log("COMPUTER WINS! SCISSORS BEATS PAPER!")
    console.log(`Human Score: ${humanScore}! Computer Score: ${computerScore}!`)
} else if (roundResults === 20) {
    computerScore = ++computerScore;
    console.log("COMPUTER WINS! ROCK BEATS SCISSORS!")
    console.log(`Human Score: ${humanScore}! Computer Score: ${computerScore}!`)
} else if (roundResults === 31) {
    humanScore = ++humanScore;
    console.log("HUMAN WINS! SCISSORS BEATS PAPER!")
    console.log(`Human Score: ${humanScore}! Computer Score: ${computerScore}!`)
} else if (roundResults === 32) {
    humanScore = ++humanScore;
    console.log("HUMAN WINS! ROCK BEATS SCISSORS!")
    console.log(`Human Score: ${humanScore}! Computer Score: ${computerScore}!`)
} else if (roundResults === 30) {
    humanScore = ++humanScore;
    console.log("HUMAN WINS! PAPER BEATS ROCK!")
    console.log(`Human Score: ${humanScore}! Computer Score: ${computerScore}!`)
}