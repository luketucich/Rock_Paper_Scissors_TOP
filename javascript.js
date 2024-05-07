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


// Creates variables and constants for game functionality
var roundCount = 0;
let playerScore = 0;
let computerScore = 0;
let playerChoice
let roundResult
let emoji
const playArea = document.getElementById("playArea");
const mainArea = document.getElementById("mainArea");
// 

// Creates all the sounds
const buttonClick = new Audio("Sounds/buttonClick.mp3");
const winSound = new Audio("Sounds/winSound.mp3");
const loseSound = new Audio("Sounds/loseSound.wav");
// 

// Creates the "Play Again" Button
const playAgain = document.createElement("button");
playAgain.className = "selectionButton";
playAgain.id = "playAgain";
playAgain.textContent = "Play Again";
// 

// A round is played
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        buttonClick.play();
        playerChoice = button.id;
        playRound(playerChoice, getComputerChoice());
    });
});
// 

// Play Again button functionality
playAgain.addEventListener("click", () => {
    location.reload();
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
        roundResult = (`Tie! You both picked ${playerChoiceEmoji(playerChoice)}`)

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
    document.getElementById("rulesText").textContent = `Score: ${playerScore} - ${computerScore} `;
    roundCount = roundCount + 1;

    // Ends Game After Five Rounds
    if (roundCount == 5 && playerScore > computerScore) {
        winSound.play();
        document.getElementById("roundResult").textContent = `Player won the game! 🏆`;
        document.getElementById("rulesText").textContent = `Final Score: ${playerScore} - ${computerScore} `;
        playArea.remove();
        mainArea.appendChild(playAgain);
    } else if (roundCount == 5 && computerScore > playerScore) {
        loseSound.play();
        document.getElementById("roundResult").textContent = `Computer won the game! 😥`;
        document.getElementById("rulesText").textContent = `Final Score: ${playerScore} - ${computerScore} `;
        playArea.remove();
        mainArea.appendChild(playAgain);
    }
}