// variables
let playerScore = 0;
let computerScore = 0;
let round = 1;

// consts
const winMessage = "You won!";
const loseMessage = "You lost!";
const tieMessage = "It's a tie!";

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const roundNo = document.querySelector("#roundNo");
roundNo.innerText = round;

const container = document.querySelector(".container");
const msg_container = document.querySelector(".msg_container");
const score_box = document.querySelector(".score_box");

const div = document.createElement("div");
const p = document.createElement("p");

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

  while (playerScore < 5 && computerScore < 5) {
    if (win) {
      playerScore++;
      score_box.innerText = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
      roundNo.innerText = round;
      // console.log("Player Score: " + playerScore);
      // console.log("Computer Score: " + computerScore);
      div.innerText = `${playerSelection} beats ${computerSelection}! ${winMessage}`;
      msg_container.appendChild(div);
      round++;
      return;
    } else if (lose) {
      computerScore++;
      score_box.innerText = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
      roundNo.innerText = round;
      // console.log("Player Score: " + playerScore);
      // console.log("Computer Score: " + computerScore);
      div.innerText = `${computerSelection} beats ${playerSelection}! ${loseMessage}`;
      msg_container.appendChild(div);
      round++;
      return;
    } else if (playerSelection === computerSelection) {
      score_box.innerText = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
      roundNo.innerText = round;
      // console.log("Player Score: " + playerScore);
      // console.log("Computer Score: " + computerScore);
      div.innerText = `You both chose ${computerSelection}. ${tieMessage}`;
      msg_container.appendChild(div);
      round++;
      return;
    }
  }

  div.innerText = `GAME OVER`;
  msg_container.appendChild(div);
}

rock.addEventListener("click", this.game.bind(this, "Rock"));
paper.addEventListener("click", this.game.bind(this, "Paper"));
scissors.addEventListener("click", this.game.bind(this, "Scissors"));

// play the game
function game(playerSelection) {
  computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
}
