let wins = 0;
let loss = 0;
let tie = 0;
let options = ["rock", "paper", "scissors"];

// The computer decision happens below
function getComputerChoice() {
  index = options.length
  choice = options[Math.floor(Math.random() * index)];
  return choice;
}

// let playerSelection = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
// console.log(playerSelection);
// let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
  userWins = 0;
  // User Winning
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    let result = "Well done, you win!";
    wins++;
    return result;
  }
  // User Lose
  else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "paper")
  ) {
    let result = "Sorry bud, maybe next time.";
    loss++;
    return result;
  }
  // User Tie
  else if (
    (playerSelection === "rock" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "scissors")
  ) {
    let result = "Folks we have got ourselves a tie!";
    tie++;
    return result;
  }
  // Error Check for spelling & input.
  else if (
    playerSelection != "rock" ||
    playerSelection != "paper" ||
    playerSelection != "scissors"
  ) {
    let result =
      "Check you spelling, your must choose Rock, Paper or Scissors.";
    return result;
  }
}

function game() {
  for (let i = 0; i <= 5; i++) {
    console.log(`Round ${i}`);
    computerSelection = getComputerChoice();
    playerSelection = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
    console.log(playRound(playerSelection, computerSelection));

    console.log(`Nice job, user score ${wins}, computer score ${loss}`);
  }
}

game();

// Out puts for fun
// console.log(
//   `The computer chose ${computerSelection},\nYou chose ${playerSelection}`
// );
// console.log(playRound(playerSelection, computerSelection));
