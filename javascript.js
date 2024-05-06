// Initializes the scores at "0"
let playerScore = 0;
let computerScore = 0;
// 

// Get the Computer's Choice and Assign it to a Variable "computerChoice"
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
// 


// 
let playerChoice
let roundResult
let emoji
const buttonClick = new Audio("buttonClick.mp3");
// 

// Upon clicking the buttons, a round is played
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        buttonClick.play();
        playerChoice = button.id;
        playRound(playerChoice, getComputerChoice());
    });
});
// 

// Returns the player's choice as an emoji
function playerChoiceEmoji(playerChoice) {
    if (playerChoice == "paper") {
        return ("📄");
    } else if (playerChoice == "rock") {
        return ("🪨");
    } else {
        return ("✂️");
    }
}
// 

// The logic for a round
function playRound(playerChoice, computerChoice) {
    // H-Rock vs C-Paper
    if (playerChoice == "rock" && computerChoice == "paper") {
        roundResult = ("You lose! 📄 beats 🪨");
        computerScore = computerScore + 1;

        // H-Rock vs C-Scissors
    } else if (playerChoice == "rock" && computerChoice == "scissors") {
        roundResult = ("You win! 🪨 beats ✂️");
        playerScore = playerScore + 1;

        // H = C (tie)
    } else if (playerChoice == computerChoice) {
        roundResult = (`Tie! You both picked ${playerChoiceEmoji(playerChoice)}.`)

        // H-Scissors vs C-Rock
    } else if (playerChoice == "scissors" && computerChoice == "rock") {
        roundResult = ("You lose! 🪨 beats ✂️");
        computerScore = computerScore + 1;

        // H-Scissors vs C-Paper
    } else if (playerChoice == "scissors" && computerChoice == "paper") {
        roundResult = ("You win! ✂️ beats 📄");
        playerScore = playerScore + 1;

        // H-Paper vs C-Rock
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        roundResult = ("You win! 📄 beats 🪨");
        playerScore = playerScore + 1;

        // H-Paper vs C-Scissors
    } else if (playerChoice == "paper" && computerChoice == "scissors") {
        roundResult = ("You lose! ✂️ beats 📄");
        computerScore = computerScore + 1;
    }
    document.getElementById("playerScore").textContent = `${playerScore}`;
    document.getElementById("computerScore").textContent = `${computerScore}`;
    document.getElementById("roundResult").textContent = `${roundResult}`;

    if (playerScore == 3) {
        alert(`You win! The final score was ${playerScore} to ${computerScore}.`);
        playerScore = 0;
        computerScore = 0;
        console.clear();
    } else if (computerScore == 3) {
        alert(`You lose! The final score was ${playerScore} to ${computerScore}.`);
        playerScore = 0;
        computerScore = 0;
        console.clear();
    }
}
// 