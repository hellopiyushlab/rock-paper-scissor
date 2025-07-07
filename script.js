function computerTurn(playerChoice, max=3) {
    let computerChoice = Math.floor(Math.random() * max); // 0, 1, or 2
    console.log(computerChoice);
    
    if (playerChoice === computerChoice) {
        console.log("draw");
    } else if (computerChoice+1 === playerChoice) {
        // console.log("player wins");
        playerWins();
    } else if (playerChoice+1 === computerChoice) {
        // console.log("computer wins");
        computerWins();
    } else if (playerChoice-2 === computerChoice) {
        // console.log("computer wins");
        computerWins();
    } else if (computerChoice-2 === playerChoice) {
        // console.log("player wins");
        playerWins();
    }
}

// const playerScore = document.getElementById("playerScore");
// const computerScore = document.getElementById("computerScore");

let playerScoreCount = 0;
let computerScoreCount = 0;

function playerWins() {
    playerScoreCount++;
    console.log("Player Score: " + playerScoreCount)
    document.getElementById("playerScore").innerHTML = "Player's Score: " + playerScoreCount;
}

function computerWins() {
    computerScoreCount++;
    console.log("Computer Score: " + computerScoreCount);
    document.getElementById("computerScore").innerHTML = "Computer's Score: " + computerScoreCount;
}