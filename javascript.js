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

//Function for playing the game, logic for 5 round completion 
function playGame (humanChoice, computerChoice) {

    function playRound(humanChoice, computerChoice) {
        //Log output to make sure it's working right.
        console.log(`Computer: ${computerChoice} Human: ${humanChoice}`);
        
        //create and else if chain, check if the choice is ===, the same in specific senarios.
        // 1 === draw, 2 === computer win, and 3 === human win.
        //Else if chain to manage Winner/Loser output and adding points.
        if (humanChoice === computerChoice) {
            return console.log(`IT'S A DRAW!\nHuman Score: ${humanScore}! Computer Score: ${computerScore}!`);
        } else if (humanChoice === 0 && computerChoice === 1) {
            computerScore = ++computerScore;
            return console.log(`COMPUTER WINS! PAPER BEATS ROCK!\nHuman Score: ${humanScore}! Computer Score: ${computerScore}!`);
        } else if (humanChoice === 1 && computerChoice === 2) {
            computerScore = ++computerScore;
            return console.log(`COMPUTER WINS! SCISSORS BEATS PAPER!\nHuman Score: ${humanScore}! Computer Score: ${computerScore}!`);
        } else if (humanChoice === 2 && computerChoice === 0) {
            computerScore = ++computerScore;
            return console.log(`COMPUTER WINS! ROCK BEATS SCISSORS!\nHuman Score: ${humanScore}! Computer Score: ${computerScore}!`);
        } else if (humanChoice === 2 && computerChoice === 1) {
            humanScore = ++humanScore;
            return console.log(`HUMAN WINS! SCISSORS BEATS PAPER!\nHuman Score: ${humanScore}! Computer Score: ${computerScore}!`);
        } else if (humanChoice === 0 && computerChoice === 2) {
            humanScore = ++humanScore;
            return console.log(`HUMAN WINS! ROCK BEATS SCISSORS!\nHuman Score: ${humanScore}! Computer Score: ${computerScore}!`);
        } else if (humanChoice === 1 && computerChoice === 0) {
            humanScore = ++humanScore;
            return console.log(`HUMAN WINS! PAPER BEATS ROCK!\nHuman Score: ${humanScore}! Computer Score: ${computerScore}!`)
        }
        
        }

        let roundResults = playRound(humanSelection, computerSelection);

}

//Declare variables for the human and computer sections to pass to the functions
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playGame(humanSelection, computerSelection);