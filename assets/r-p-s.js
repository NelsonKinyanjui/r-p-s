let playerSelection = prompt('Your choice','');
let randomNumber = Math.random();

 function getComputerChoice() {
  
    if ( randomNumber >= 0 && randomNumber < 1 /3){
    
    return  'rock';
    }
    else if (randomNumber >= 1 /3 && randomNumber < 2 / 3){
        return 'paper';
    }
    else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        return 'scissors';
    }
 }

 function playRound(playerSelection,computerSelection){
    if (playerSelection = 'paper' ){

return `You lose!  ${computerSelection} beats paper`;
    }
   else if (playerSelection = 'rock' ){

return `You lose!  ${computerSelection} beats rock`;
    }
    else if (playerSelection = 'scissors' ){

return `You lose! ${computerSelection} beats scissors`;
    }
else if (computerSelection = playerSelection){
    return 'you tied';
}
 }


