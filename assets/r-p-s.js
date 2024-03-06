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
    let computerScore = 0;
    let playerScore = 0;
 function scoreBoard(computerScore ,playerScore){

    

    if (computerScore > playerScore ){
        console.log(computerScore);
        console.log('Computer Wins You Lose, good luck next time');

    }
    else if (playerScore > computerScore){
        console.log(playerScore);
        console.log('You Win Bravo!')
    }

 }
 function playRound(playerSelection , computerSelection){
    if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock'){
        playerScore ++;
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors'){
        computerScore ++;
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
        
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper'){
        return "A tie!";
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock'){
        return "A tie!";
         
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper'){
        computerScore ++;
        return `You Lose! ${playerSelection} beats ${computerSelection}.`;
        
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors'){
        playerScore ++;
         return `You win! ${playerSelection} beats ${computerSelection}.`;
    }
    
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'sccissors'){
        return "A tie!";
    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock'){
        computerScore ++;
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper'){
        playerScore ++;
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    }

 }
 const computerSelection = getComputerChoice();
 const playerSelection = prompt("your choice","")

 const btn = document.querySelectorAll('.btn');
 btn.forEach(onclick => {
    playRound(playerSelection , computerSelection)
    
 });
 const output = document.querySelector('.output');
 
 

//  to figure out how to out-put score and console.log it.
 
/*function playGame (){
    
    for(i=0; i < 6; i++){
        scoreBoard(computerScore , playerScore);
        playRound(playerSelection , computerSelection);

    } 
    
   

 }
 console.log(playGame());
*/
