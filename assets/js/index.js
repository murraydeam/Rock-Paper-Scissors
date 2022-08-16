// The computer decision happens below
function getComputerChoice() {
  let options = ["rock", "paper", "scissors"];
  randNum = options.length;
  choice = options[Math.floor(Math.random() * randNum)];
  return choice;
}

let playerSelection = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
console.log(playerSelection);
// let playerSelection = ;
let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
  // User Winning
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    let result = "Well done, you win!";
    return result;
  }
  // User Lose
  else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "paper")
  ) {
    let result = "Sorry bud, maybe next time.";
    return result;
  }
  // User Tie
  else if (
    (playerSelection === "rock" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "scissors")
  ) {
    let result = "Folks we have got ourselves a tie!";
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
console.log(
  `The computer chose ${computerSelection},\nYou chose ${playerSelection}`
);
console.log(playRound(playerSelection, computerSelection));
