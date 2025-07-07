function computerTurn(playerChoice, max=3) {
    let computerChoice = Math.floor(Math.random() * max); // 0, 1, or 2
    console.log(computerChoice);

    // changing icons
    if (playerChoice === 0) {
        document.getElementById("playerChoiceIcon").innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>';
    } else if (playerChoice === 1) {
        document.getElementById("playerChoiceIcon").innerHTML = '<i class="fa-solid fa-hand"></i>';
    } else if (playerChoice === 2) {
        document.getElementById("playerChoiceIcon").innerHTML = '<i class="fa-solid fa-hand-scissors"></i>';
    }
    
    if (computerChoice === 0) {
        document.getElementById("computerChoiceIcon").innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>';
    } else if (computerChoice === 1) {
        document.getElementById("computerChoiceIcon").innerHTML = '<i class="fa-solid fa-hand"></i>';
    } else if (computerChoice === 2) {
        document.getElementById("computerChoiceIcon").innerHTML = '<i class="fa-solid fa-hand-scissors"></i>';
    }

    // 0 -> Rock
    // 1 -> Paper
    // 2 -> Scissor


    if (playerChoice === computerChoice) {
        console.log("draw");
        document.getElementById("result").innerHTML = "DRAW";
    } 
    else if (computerChoice+1 === playerChoice) {
        document.getElementById("result").innerHTML = "YOU SCORED";
        playerWins();
    } 
    else if (playerChoice+1 === computerChoice) {
        document.getElementById("result").innerHTML = "COMPUTER SCORED";
        computerWins();
    } 
    else if (playerChoice-2 === computerChoice) {
        document.getElementById("result").innerHTML = "COMPUTER SCORED";
        computerWins();
    } 
    else if (computerChoice-2 === playerChoice) {
        document.getElementById("result").innerHTML = "YOU SCORED";
        playerWins();
    }
}

let playerScoreCount = 0;
let computerScoreCount = 0;

function playerWins() {
    playerScoreCount++; // increment the score
    console.log("Player Score: " + playerScoreCount)
    document.getElementById("playerScore").innerHTML = "Player: " + playerScoreCount;
    if (playerScoreCount === 5) {
        victory();
    }
}

function computerWins() {
    computerScoreCount++; // increment the score
    console.log("Computer Score: " + computerScoreCount);
    document.getElementById("computerScore").innerHTML = "Computer: " + computerScoreCount;
    if (computerScoreCount === 5) {
        defeat();
    }
}

function victory() {
    document.getElementById("result").innerHTML = "VICTORY!";
    computerScoreCount = 0;
    playerScoreCount = 0;
    document.getElementById("computerScore").innerHTML = "Computer: " + computerScoreCount;
    document.getElementById("playerScore").innerHTML = "Player: " + playerScoreCount;
}

function defeat() {
    document.getElementById("result").innerHTML = "DEFEAT!";
    computerScoreCount = 0;
    playerScoreCount = 0;
    document.getElementById("computerScore").innerHTML = "Computer: " + computerScoreCount;
    document.getElementById("playerScore").innerHTML = "Player: " + playerScoreCount;
}

function playAgain() {
    computerScoreCount = 0;
    playerScoreCount = 0;
    document.getElementById("computerScore").innerHTML = "Computer: " + computerScoreCount;
    document.getElementById("playerScore").innerHTML = "Player: " + playerScoreCount;
    document.getElementById("result").innerHTML = '';
    document.getElementById("playerChoiceIcon").innerHTML = '<i class="fa-solid fa-circle-question"></i>';
    document.getElementById("computerChoiceIcon").innerHTML = '<i class="fa-solid fa-circle-question"></i>';
}