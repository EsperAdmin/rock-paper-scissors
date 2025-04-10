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

//Function for playing the game, logic for 5 round completion 
function playGame () {

    //Declare variables for the human and computer sections to pass to the functions
    const humanSelection = getHumanChoice;
    const computerSelection = getComputerChoice();
    //Call the playRound function and pass selections
    playRound(humanSelection, computerSelection);
    
    function playRound(humanChoice, computerChoice) {
        function convertChoice () {
            if (computerChoice === 1) {
                return "paper"
            } else if (computerChoice === 2) {
                return "scissors"
            } else {
                return "rock"
            }
        };
        

    if(computerScore < 5 && humanScore < 5) {
        if (humanChoice === computerChoice) {
            let score = document.querySelector("#scoreValue");
            let winOrLose = document.querySelector("#winOrLose");
            winOrLose.textContent = "IT'S A DRAW!";
            score.textContent = `Human: ${humanScore}! Computer: ${computerScore}!`;

            let computerPicked = document.querySelector("#computerPicked");
            computerPicked.textContent = `Computer Picked ${convertChoice()}`
        } else if (humanChoice === 0 && computerChoice === 1) {
            computerScore = ++computerScore;
            let score = document.querySelector("#scoreValue");
            let winOrLose = document.querySelector("#winOrLose");
            winOrLose.textContent = "COMPUTER WINS! PAPER BEATS ROCK!";
            score.textContent = `Human: ${humanScore}! Computer: ${computerScore}!`;

            let computerPicked = document.querySelector("#computerPicked");
            computerPicked.textContent = `Computer Picked ${convertChoice()}`
        } else if (humanChoice === 1 && computerChoice === 2) {
            computerScore = ++computerScore;
            let score = document.querySelector("#scoreValue");
            let winOrLose = document.querySelector("#winOrLose");
            winOrLose.textContent = "COMPUTER WINS! SCISSORS BEATS PAPER!";
            score.textContent = `Human: ${humanScore}! Computer: ${computerScore}!`;

            let computerPicked = document.querySelector("#computerPicked");
            computerPicked.textContent = `Computer Picked ${convertChoice()}`
        } else if (humanChoice === 2 && computerChoice === 0) {
            computerScore = ++computerScore;
            let score = document.querySelector("#scoreValue");
            let winOrLose = document.querySelector("#winOrLose");
            winOrLose.textContent = "COMPUTER WINS! ROCK BEATS SCISSORS!";
            score.textContent = `Human: ${humanScore}! Computer: ${computerScore}!`;

            let computerPicked = document.querySelector("#computerPicked");
            computerPicked.textContent = `Computer Picked ${convertChoice()}`
        } else if (humanChoice === 2 && computerChoice === 1) {
            humanScore = ++humanScore;
            let score = document.querySelector("#scoreValue");
            let winOrLose = document.querySelector("#winOrLose");
            winOrLose.textContent = "HUMAN WINS! SCISSORS BEATS PAPER!";
            score.textContent = `Human: ${humanScore}! Computer: ${computerScore}!`;

             let computerPicked = document.querySelector("#computerPicked");
            computerPicked.textContent = `Computer Picked ${convertChoice()}`
        } else if (humanChoice === 0 && computerChoice === 2) {
            humanScore = ++humanScore;
            let score = document.querySelector("#scoreValue");
            let winOrLose = document.querySelector("#winOrLose");
            winOrLose.textContent = "HUMAN WINS! ROCK BEATS SCISSORS!";
            score.textContent = `Human: ${humanScore}! Computer: ${computerScore}!`;

            let computerPicked = document.querySelector("#computerPicked");
            computerPicked.textContent = `Computer Picked ${convertChoice()}`
        } else if (humanChoice === 1 && computerChoice === 0) {
            humanScore = ++humanScore;
            let score = document.querySelector("#scoreValue");
            let winOrLose = document.querySelector("#winOrLose");
            winOrLose.textContent = "HUMAN WINS! PAPER BEATS ROCK!";
            score.textContent = `Human: ${humanScore}! Computer: ${computerScore}!`;

            let computerPicked = document.querySelector("#computerPicked");
            computerPicked.textContent = `Computer Picked ${convertChoice()}`
        }
        
        } else {
            let score = document.querySelector("#scoreValue");
            let winOrLose = document.querySelector("#winOrLose");

                if(humanScore === computerScore) {
                    winOrLose.textContent = "THE GAME ENDS IN A DRAW!";
                } else if (humanScore < computerScore) {
                    winOrLose.textContent = "COMPUTER WINS THE GAME!";
                } else {
                    winOrLose.textContent = "HUMAN WINS THE GAME!";
                }
            score.textContent = `GAME OVER! \nHuman: ${humanScore}! Computer: ${computerScore}!`;
        }
        
    }
}