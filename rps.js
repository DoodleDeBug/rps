// scores
let playerScore = 0;
let computerScore = 0;

// variables
const winMessage = "You Won!";
const loseMessage = "You Lost!";
const tieMessage = "It's A Tie!";

const roundNo = document.querySelector('#roundNo');
const msg = document.querySelectorAll('.msg');
let score = document.querySelector('.score');
const container = document.querySelector('.container');

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

function game (playerSelection) {
      
    // randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
    function computerPlay() {
        let choices = ['rock', 'paper', 'scissors']
        let randomNumber = Math.floor(Math.random() * choices.length);
        return choices[randomNumber];
    }

    computerSelection = computerPlay();
  

    // a single round of rock paper scissors
    function playRound(playerSelection, computerSelection) {
        

        let win = (playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper');
        let lose = (playerSelection === 'paper' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'rock') || (playerSelection === 'rock' && computerSelection === 'paper');

          if (win) {
            playerScore += 1;
            console.log('Player Score: ' + playerScore);
            console.log('Computer Score: ' + computerScore);
            return `${playerSelection} beats ${computerSelection}! winMessage`;
           } else if (lose) {
            computerScore += 1;
            console.log('Player Score: ' + playerScore);
            console.log('Computer Score: ' + computerScore);
            return `${computerSelection} beats ${playerSelection}! loseMessage`;
         } else if (playerSelection === computerSelection) {
            console.log('Player Score: ' + playerScore);
            console.log('Computer Score: ' + computerScore);
            return tieMessage;
    } 

      }}

rock.addEventListener('click', game(rock){
    
});