function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) {
        return "rock";
    } else if (computerChoice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors?");
    return humanChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice;
const computerSelection = getComputerChoice;

function playRound(humanChoice, computerChoice) {
    // H-Rock vs C-Paper
    if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats rock!");
        computerScore = computerScore + 1;

        // H-Rock vs C-Scissors
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats scissors!");
        humanScore = humanScore + 1;

        // H = C (tie)
    } else if (humanChoice == computerChoice) {
        console.log(`You both picked ${humanChoice}! Nobody wins.`)

        // H-Scissors vs C-Rock
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats scissors!");
        computerScore = computerScore + 1;

        // H-Scissors vs C-Paper
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats paper!");
        humanScore = humanScore + 1;

        // H-Paper vs C-Rock
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats rock!");
        humanScore = humanScore + 1;

        // H-Paper vs C-Scissors
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beats paper!");
        computerScore = computerScore + 1;
    }
}
