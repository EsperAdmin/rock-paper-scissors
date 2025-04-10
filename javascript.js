//Human and computer default scores
let humanScore = 0;
let computerScore = 0;

//Create function to get a ranondom choice
function getComputerChoice() {
//Use math.random to pick a number between 0 and 2
return Math.floor(Math.random() * 3);
//Return the the value.
}

let getHumanChoice = 'unknown';

const selection = document.querySelector("#selection");
selection.addEventListener("click", (event) => {
let target = event.target;
    
    switch(target.id) {
        case "rock":
        getHumanChoice = 0;
        break;

        case "paper":
        getHumanChoice = 1;
        break;

        case "scissors":
        getHumanChoice = 2;
        break;
        } 
        
        playGame();
    });
//return the true response from the else if chain.

//Function for playing the game, logic for 5 round completion 
function playGame () {

    //Declare variables for the human and computer sections to pass to the functions
    const humanSelection = getHumanChoice;
    const computerSelection = getComputerChoice();
    //Call the playRound function and pass selections
    playRound(humanSelection, computerSelection);
    function playRound(humanChoice, computerChoice) {
        //Log output to make sure it's working right.
        //console.log(`Computer: ${computerChoice} Human: ${humanChoice}`);
        
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
    }