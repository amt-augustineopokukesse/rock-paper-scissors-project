//User input function
const getUserChoice = userInput => {
  //convert user input to lowercase letters
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error: Wrong input! User input should either be rock, paper, or scissors.');
  }
}
// Computer choice function
function getComputerChoice () {
  // get a whole number between 0 and 2
  const choiceNum =  Math.floor(Math.random() * 3);
  if (choiceNum === 0) {
    return 'rock';
  } else if (choiceNum === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}
// Winner determination function
function determineWinner (userChoice, computerChoice) {
  if (userChoice === 'bomb') {
    return 'You won!'; // secret cheat code
  }
  if (userChoice === computerChoice) {
    return 'It\'s a tie!';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer won!'
    } else {
      return 'You won!'
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer won!';
    } else {
      return 'You won!'
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer won!';
    } else {
      return 'You won!'
    }
  }
}
// Starting Game function
function playGame () {
  const userChoice = getUserChoice('paper');
  console.log(`Your choice is ${userChoice}!`);
  const computerChoice = getComputerChoice();
  console.log(`Computer chose ${computerChoice}!`);
  // Winner determination
  console.log(determineWinner(userChoice, computerChoice));
}
playGame();
