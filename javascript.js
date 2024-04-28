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

// Prompts the player with their choice
function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors?");
    return humanChoice.toLowerCase();
}

// Assigns a variable to the human and computer's choice.
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playGame() {
    // This function determines who wins a single round and updates the score.
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

    // This runs the first round and displays the score.
    playRound(humanSelection, computerSelection);
    console.log(`${humanScore} to ${computerScore}`)

    // This runs the second round, updates new selections, and displays the score.
    const humanSelection2 = getHumanChoice();
    const computerSelection2 = getComputerChoice();
    playRound(humanSelection2, computerSelection2);
    console.log(`${humanScore} to ${computerScore}`)

    // This runs the third round, updates new selections, and displays the score.
    const humanSelection3 = getHumanChoice();
    const computerSelection3 = getComputerChoice();
    playRound(humanSelection3, computerSelection3);
    console.log(`${humanScore} to ${computerScore}`)

    // This runs the fourth round, updates new selections, and displays the score.
    const humanSelection4 = getHumanChoice();
    const computerSelection4 = getComputerChoice();
    playRound(humanSelection4, computerSelection4);
    console.log(`${humanScore} to ${computerScore}`)

    // This runs the final round, updates new selections, and displays the score.
    const humanSelection5 = getHumanChoice();
    const computerSelection5 = getComputerChoice();
    playRound(humanSelection5, computerSelection5);
    console.log(`${humanScore} to ${computerScore}`)

    // Announces the winner of the game.
    if (humanScore > computerScore) {
        console.log(`The final score was ${humanScore} to ${computerScore}.`)
        console.log("You Win! 🏆");
    } else if (humanScore == computerScore) {
        console.log("Nobody wins. You both SUCK!")
    } else {
        console.log(`The final score was ${humanScore} to ${computerScore}.`)
        console.log("Computer Wins! 😿");
    }
}

// Runs the game!
playGame();