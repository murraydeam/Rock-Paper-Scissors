let wins = 0;
let loss = 0;
let tie = 0;
let options = ["rock", "paper", "scissors"];

// The computer decision happens below
function getComputerChoice() {
  index = options.length;
  choice = options[Math.floor(Math.random() * index)];
  return choice;
}

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
    return `${result}\n ${wins} wins, ${loss} losses, ${tie} ties`;
  }
  // User Lose
  else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors")
  ) {
    let result = "Sorry bud, maybe next time.";
    loss++;
    return `${result}\n ${wins} wins, ${loss} losses, ${tie} ties`;
  }
  // User Tie
  else if (
    (playerSelection === "rock" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "scissors")
  ) {
    let result = "Folks we have got ourselves a tie!";
    tie++;
    return `${result}\n ${wins} wins, ${loss} losses, ${tie} ties`;
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

// RPS-UI
const body = document.querySelector("body");

const container = document.createElement("div");
container.setAttribute("id", "container");

const content = document.createElement("div");
content.setAttribute("id", "content");
content.setAttribute(
  "style",
  "display: flex; justify-content: center; gap: 2rem;"
);

body.appendChild(container);
container.appendChild(content);

const rockButton = document.createElement("button");
rockButton.setAttribute("id", "rockButton");
rockButton.textContent = "Rock!";
content.appendChild(rockButton);

rockButton.addEventListener('click', () => {
  playerSelection = 'rock'
  getComputerChoice()

  console.log(`The player has chosen ${playerSelection}, the computer has chosen ${choice}!`)
  console.log(playRound(playerSelection, choice))
})

const paperButton = document.createElement("button");
paperButton.setAttribute("id", "paperButton");
paperButton.textContent = "Paper!";
content.appendChild(paperButton);

paperButton.addEventListener("click", () => {
  playerSelection = "paper";
  getComputerChoice();

  console.log(
    `The player has chosen ${playerSelection}, the computer has chosen ${choice}!`
  );
  console.log(playRound(playerSelection, choice));
});

const scissorsButton = document.createElement("button");
scissorsButton.setAttribute("id", "scissorsButton");
scissorsButton.textContent = "Scissors!";
content.appendChild(scissorsButton);

scissorsButton.addEventListener("click", () => {
  playerSelection = "scissors";
  getComputerChoice();

  console.log(
    `The player has chosen ${playerSelection}, the computer has chosen ${choice}!`
  );
  console.log(playRound(playerSelection, choice));
});
