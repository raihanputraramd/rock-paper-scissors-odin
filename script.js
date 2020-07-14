function resetGame() {
    let computerChoice = ['rock', 'paper', 'scissors'];
    let playerChoice = prompt('Please input Rock, Paper, or Scissors');
    let playerSelection = playerChoice.toLowerCase();
    let computerSelection = computerPlay();
    let playerCondition = [
        'Player win, rock beat scissors',
        'Player lose, paper beat rock',
        'Player win, paper beat rock',
        'Player lose, scissors beat paper',
        'Player win, scissors beat paper',
        'Player lose, rock beat scissors'
    ];
    let drawCondition = "Draw, no one win the game";


    function playRound(playerSelection, computerSelection) {
        if (playerSelection == 'rock' && computerSelection == 'rock') {
            showResult(drawCondition);
        } else if (playerSelection == 'paper' && computerSelection == 'paper') {
            showResult(drawCondition);
        } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
            showResult(drawCondition);
        } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
            showResult(playerCondition[0]);
        } else if (playerSelection == 'rock' && computerSelection == 'paper') {
            showResult(playerCondition[1]);
        } else if (playerSelection == 'paper' && computerSelection == 'rock') {
            showResult(playerCondition[2]);
        } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
            showResult(playerCondition[3]);
        } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
            showResult(playerCondition[4]);
        } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
            showResult(playerCondition[5]);
        } else {
            showResult("Please input rock , paper, or scissors")
        }
    }

    function computerPlay() {
        return computerChoice[Math.floor(Math.random() * computerChoice.length)];
    }
    playRound(playerSelection, computerSelection);
}

function showResult(playerCondition) {
    document.getElementById("resultWinOrLose").innerHTML = playerCondition;
}