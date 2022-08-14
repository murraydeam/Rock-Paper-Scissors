function getComputerChoice() {
  let options = ["Rock", "Paper", "Scissors"];
  randNum = options.length;
  choice = options[Math.floor(Math.random() * randNum)];
  return choice;
}

getComputerChoice();

