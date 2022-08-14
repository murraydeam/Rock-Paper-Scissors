// The computer decision happens below
function getComputerChoice() {
  let options = ["Rock", "Paper", "Scissors"];
  randNum = options.length;
  choice = options[Math.floor(Math.random() * randNum)];
  return choice;
}

function theGame(computer, user) {
  computer = getComputerChoice()
  user = prompt('Choose your weapon')
  
  return computer + '' + user
} 

theGame()