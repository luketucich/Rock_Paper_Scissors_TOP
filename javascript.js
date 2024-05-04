// Randomly assigns a choice to the computer
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

// // Prompts the player with their choice
// // function getHumanChoice() {
// //     let humanChoice = prompt("Rock, Paper, or Scissors?");
// //     return humanChoice.toLowerCase();
// }

// Assigns a variable to the human and computer's choice.
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


function playRound(humanChoice, computerChoice) {
    // H-Rock vs C-Paper
    if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! 📄 beats 🪨!");
        computerScore = computerScore + 1;

        // H-Rock vs C-Scissors
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! 🪨 beats ✂️!");
        humanScore = humanScore + 1;

        // H = C (tie)
    } else if (humanChoice == computerChoice) {
        console.log(`Tie! You both picked ${humanChoice}.`)

        // H-Scissors vs C-Rock
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! 🪨 beats ✂️!");
        computerScore = computerScore + 1;

        // H-Scissors vs C-Paper
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! ✂️ beats 📄!");
        humanScore = humanScore + 1;

        // H-Paper vs C-Rock
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! 📄 beats 🪨!");
        humanScore = humanScore + 1;

        // H-Paper vs C-Scissors
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! ✂️ beats 📄!");
        computerScore = computerScore + 1;
    }
    return
}

// As you may have guessed, this sets the initial scores to 0.
let humanScore = 0;
let computerScore = 0;


//     // Announces the winner of the game.
//     if (humanScore > computerScore) {
//         console.log(`The final score was ${humanScore} to ${computerScore}.`)
//         console.log("You Win! 🏆");
//     } else if (humanScore == computerScore) {
//         console.log("Tie game! 🤝")
//     } else {
//         console.log(`The final score was ${humanScore} to ${computerScore}.`)
//         console.log("Computer Wins! 😿");
//     }
// }

// Runs the game!
playGame();