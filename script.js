let humanScore = 0;
let computerScore = 0;

let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");
let result = document.querySelector(".result");
let humScore = document.querySelector(".humScore");
let compScore = document.querySelector(".compScore");
let body = document.querySelector("body");

humScore.textContent = "Your Score: " + humanScore;
compScore.textContent = "Computer Score: " + computerScore;

body.addEventListener("click", (e)=>{
    let playerSelection = e.target.textContent;
    playRound(playerSelection.toLowerCase(), getComputerChoice());
})

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
        result.textContent = "Computer also chose " + computerChoice + ". It's a tie!";
    }
    else if((humanChoice == 'rock' || computerChoice == 'rock') && (humanChoice == 'paper' || computerChoice == 'paper')){
        if(humanChoice == 'paper'){
            humanScore++;
        }
        else{
            computerScore++;
        }
        result.textContent = "Computer chose " + computerChoice + ". Paper beats rock!";
    }
    else if((humanChoice == 'rock' || computerChoice == 'rock') && (humanChoice == 'scissor' || computerChoice == 'scissor')){
        if(humanChoice == 'rock'){
            humanScore++;
        }
        else{
            computerScore++;
        }
        result.textContent = "Computer chose " + computerChoice + ". Rock beats scissor!";
    }
    else{
        if(humanChoice == 'scissor'){
            humanScore++;
        }
        else{
            computerScore++;
        }
        result.textContent = "Computer chose " + computerChoice + ". Scissor beats paper!";    
    }

    if(humanScore==5 || computerScore == 5){
        if(humanScore == 5){
            result.textContent = "Game over! You won!";
        }
        else{
            result.textContent = "Game over! Computer won!";
        }
        humanScore = 0;
        computerScore = 0;
    }

    humScore.textContent = "Your Score: " + humanScore;
    compScore.textContent = "Computer Score: " + computerScore;
}

function playGame(){
    // for(let i = 0; i<5; i++){
    // }
    playRound(getHumanChoice(),getComputerChoice());
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

// playGame();