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

  // User Rock VS section
  
  // User Paper VS section

  // User Scissor VS section


  return computer + '' + user
} 

theGame()