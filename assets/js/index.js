

function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"];
  randNum = options.length;
  choice = options[Math.floor(Math.random() * randNum)]
  return choice
}

getComputerChoice();

