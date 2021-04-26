// scores
let playerScore = 0;
let computerScore = 0;

// variables
const winMessage = "You Won!";
const loseMessage = "You Lost!";
const tieMessage = "It's A Tie!";

let roundNo = (document.querySelector("#roundNo").textContent = 1);
const msg = document.querySelector(".msg");

const container = document.querySelector(".container");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

// randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay() {
  let choices = ["Rock", "Paper", "Scissors"];
  let randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

// a single round of rock paper scissors
function playRound(playerSelection, computerSelection) {
  let win =
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper");
  let lose =
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock") ||
    (playerSelection === "Rock" && computerSelection === "Paper");

  if (win) {
    playerScore += 1;
    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + computerScore);
    console.log(`${playerSelection} beats ${computerSelection}! ${winMessage}`);
    return;
  } else if (lose) {
    computerScore += 1;
    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + computerScore);
    console.log(
      `${computerSelection} beats ${playerSelection}! ${loseMessage}`
    );
    return;
  } else if (playerSelection === computerSelection) {
    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + computerScore);
    console.log(tieMessage);
    return;
  }
}

rock.addEventListener("click", this.game.bind(this, "Rock"));
paper.addEventListener("click", this.game.bind(this, "Paper"));
scissors.addEventListener("click", this.game.bind(this, "Scissors"));

// play the game
function game(playerSelection) {
  console.log(playerSelection);
  computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
}
