function computerTurn(playerChoice, max=3) {
    let computerChoice = Math.floor(Math.random() * max); // 0, 1, or 2
    console.log(computerChoice);
    
    // 0 -> Rock
    // 1 -> Paper
    // 2 -> Scissor


    if (playerChoice === computerChoice) {
        console.log("draw");
    } 
    else if (computerChoice+1 === playerChoice) {
        playerWins();
    } 
    else if (playerChoice+1 === computerChoice) {
        computerWins();
    } 
    else if (playerChoice-2 === computerChoice) {
        computerWins();
    } 
    else if (computerChoice-2 === playerChoice) {
        playerWins();
    }
}

let playerScoreCount = 0;
let computerScoreCount = 0;

function playerWins() {
    playerScoreCount++; // increment the score
    console.log("Player Score: " + playerScoreCount)
    document.getElementById("playerScore").innerHTML = "Player: " + playerScoreCount;
}

function computerWins() {
    computerScoreCount++; // increment the score
    console.log("Computer Score: " + computerScoreCount);
    document.getElementById("computerScore").innerHTML = "Computer: " + computerScoreCount;
}