// let playerSelection = prompt('Your choice','');
let randomNumber = Math.random();

 function getComputerChoice() {
  
    if ( 0 < randomNumber < 0.3){
    
    return  'rock';
    }
    else if (0.3 <= randomNumber <= 0.6){
        return 'paper';
    }
    else {
        return 'scissors';
    }
 }

 console.log(getComputerChoice());
 console.log(randomNumber);


