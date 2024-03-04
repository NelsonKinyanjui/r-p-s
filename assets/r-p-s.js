 let randomNumber = Math.random();
 
 function getComputerChoice(){

    if (randomNumber > 0 && randomNumber < 1 / 3){
        return 'rock'
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3){
        return 'paper';
    }
    else if (randomNumber >= 2 / 3 && randomNumber < 1 ){
        return 'scissors';
    }

 }
 function playRound(playerSelection , computerSelection){
    if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock'){
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors'){
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper'){
        return "A tie!";
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock'){
        return "A tie!";
         
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper'){
        return `You Lose! ${playerSelection} beats ${computerSelection}.`;
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors'){
         return `You win! ${playerSelection} beats ${computerSelection}.`;
    }
    
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'sccissors'){
        return "A tie!";
    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock'){
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper'){
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    }

 }
 const computerSelection = getComputerChoice();
 const playerSelection = prompt("your choice","")
 

 console.log(playRound(playerSelection ,computerSelection));

