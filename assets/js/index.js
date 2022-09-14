let wins = 0;
let loss = 0;
let tie = 0;
let options = ["rock", "paper", "scissors"];

// RPS-UI
const body = document.querySelector("body");

const container = document.createElement("div");
container.setAttribute("id", "container");

const content = document.createElement("div");
content.setAttribute("id", "userButtons");
content.setAttribute(
  "style",
  "display: flex; justify-content: center; gap: 2rem;"
);

body.appendChild(container);
container.appendChild(content);
content.setAttribute(
  "style",
  "display: flex; justify-content: center; gap: 2rem;"
);

const scoreDisplays = document.createElement("div");
scoreDisplays.setAttribute("id", "scoreDisplays");
scoreDisplays.setAttribute(
  "style",
  "display: flex; gap: 16px; justify-content: center; align-items: center;"
);

container.appendChild(scoreDisplays);

const winDisplay = document.createElement("div");
winDisplay.setAttribute("id", "winsDisplay");
const winsTitle = document.createElement("h2");
winsTitle.innerText = "Wins";
const winsNum = document.createElement("h3");
winsNum.setAttribute("id", "winsNum");
winsNum.textContent = wins;
winDisplay.appendChild(winsTitle);
winDisplay.appendChild(winsNum);

const lossDisplay = document.createElement("div");
lossDisplay.setAttribute("id", "lossDisplay");
const lossTitle = document.createElement("h2");
lossTitle.innerText = "Loss";
const lossNum = document.createElement("h3");
lossNum.setAttribute("id", "lossNum");

lossNum.textContent = loss;
lossDisplay.appendChild(lossTitle);
lossDisplay.appendChild(lossNum);

const tieDisplay = document.createElement("div");
tieDisplay.setAttribute("id", "tieDisplay");
const tieTitle = document.createElement("h2");
tieTitle.innerText = "Ties";
const tieNum = document.createElement("h3");
tieNum.setAttribute("id", "tieNum");

tieNum.textContent = tie;
tieDisplay.appendChild(tieTitle);
tieDisplay.appendChild(tieNum);

scoreDisplays.appendChild(winDisplay);
scoreDisplays.appendChild(lossDisplay);
scoreDisplays.appendChild(tieDisplay);

// The computer decision happens below
function getComputerChoice() {
  index = options.length;
  choice = options[Math.floor(Math.random() * index)];
  return choice;
}

function playRound(playerSelection, computerSelection) {
  // User Winning
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    let result = "Well done, you win!";
    wins++;
    document.getElementById("winsNum").innerText = wins;
    if (wins > 4) {
      return (
        alert(
          "Great! You have beaten the computer! \n Click 'okay' to play again"
        ),
        (wins = 0),
        (loss = 0),
        (tie = 0)
      );
    }
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
    document.getElementById("lossNum").innerText = loss;
    if (loss > 4) {
      return (
        alert("Maybe next time! \n Click 'okay' to play again"),
        (wins = 0),
        (loss = 0),
        (tie = 0)
      );
    }
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
    document.getElementById("tieNum").innerText = tie;
    if (tie > 8) {
      return (
        alert(
          "Try again looks like we have ourself a tie! \n Click 'okay' to play again"
        ),
        (wins = 0),
        (loss = 0),
        (tie = 0)
      );
    }
    return `${result}\n ${wins} wins, ${loss} losses, ${tie} ties`;
  }
  // Error Check for spelling & input.
  else if (
    playerSelection != "rock" ||
    playerSelection != "paper" ||
    playerSelection != "scissors"
  ) {
    let error = "Check you spelling, your must choose Rock, Paper or Scissors.";
    return error;
  }
}

const rockButton = document.createElement("button");
rockButton.setAttribute("id", "rockButton");
rockButton.textContent = "Rock!";
content.appendChild(rockButton);

rockButton.addEventListener("click", () => {
  playerSelection = "rock";
  getComputerChoice();

  console.log(
    `The player has chosen ${playerSelection}, the computer has chosen ${choice}!`
  );
  console.log(playRound(playerSelection, choice));
});

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
