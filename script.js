function computerTurn(playerChoice, max=3) {
    let computerChoice = Math.floor(Math.random() * max); // 0, 1, or 2
    console.log(computerChoice);
    
    if (playerChoice === computerChoice) {
        console.log("draw");
    } else if (computerChoice+1 === playerChoice) {
        console.log("player wins");
    } else if (playerChoice+1 === computerChoice) {
        console.log("computer wins");
    } else if (playerChoice-2 === computerChoice) {
        console.log("computer wins");
    } else if (computerChoice-2 === playerChoice) {
        console.log("player wins");
    }
}