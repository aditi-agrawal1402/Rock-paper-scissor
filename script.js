let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let choices = ['rock','paper','scissor'];
    let rand = Math.floor(Math.random()*3);
    return choices[rand];
}

function getHumanChoice(){
    let choice = prompt("What is your choice?");
    return choice;
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice == computerChoice){
        console.log("Tie!");
    }
    else if((humanChoice == 'rock' || computerChoice == 'rock') && (humanChoice == 'paper' || computerChoice == 'paper')){
        if(humanChoice == 'paper'){
            humanScore++;
        }
        else{
            computerScore++;
        }
        console.log("Paper beats rock!");
    }
    else if((humanChoice == 'rock' || computerChoice == 'rock') && (humanChoice == 'scissor' || computerChoice == 'scissor')){
        if(humanChoice == 'rock'){
            humanScore++;
        }
        else{
            computerScore++;
        }
        console.log("Rock beats scissor!");
    }
    else{
        if(humanChoice == 'scissor'){
            humanScore++;
        }
        else{
            computerScore++;
        }
        console.log("Scissor beats paper!");
    }

}

function playGame(){
    for(let i = 0; i<5; i++){
        playRound(getHumanChoice(),getComputerChoice());
    }
    if(humanScore > computerScore){
        console.log("Yay! you won!");
    }
    else if(humanScore < computerScore){
        console.log("Better luck next time!");
    }
    else{
        console.log("It's a tie!");
    }
}

playGame();