let randomNumber = Math.random();

function getComputerChoice(){
    if (randomNumber > 0 && randomNumber < 1 / 3){
        return 'rock';
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3){
        return 'paper';
    }
    else if (randomNumber >= 2 / 3 && randomNumber < 1){
        return 'scissors';
    }
}
        
        function playRound(playerSelection , computerSelection){
            return `You lose! ${playerSelection} beats ${computerSelection}`;
            
        }
        const playerSelection = 'paper';
        const computerSelection = getComputerChoice();
        
  console.log(playRound(playerSelection , computerSelection));



