const rpsButtons = document.querySelectorAll(".rpsButton");
const playerScore = document.getElementById("player-score");
const playerchoiceDiv = document.getElementById("playerchoice");
const computerchoiceDiv = document.getElementById("computerchoice");
const result = document.getElementById("result");
const endGameButton = document.getElementById("endGameButton");

let score = 0;

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * rpsButtons.length);
  return rpsButtons[randomIndex].value;
}

function updateScore(newScore) {
  playerScore.innerText = newScore;
}

function updateChoices(playerChoice, computerChoice) {
  playerchoiceDiv.innerText = playerChoice;
  computerchoiceDiv.innerText = computerChoice;
}

function updateResultMessage(message) {
  result.innerText = message;
}

function displayResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    updateResultMessage("It's a draw");
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    score += 1;
    updateScore(score);
    updateChoices(playerChoice, computerChoice);
    updateResultMessage("You win!");
  } else {
    score -= 1;
    updateScore(score);
    updateChoices(playerChoice, computerChoice);
    updateResultMessage("You lose");
  }
}

function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  displayResult(playerChoice, computerChoice);
}

rpsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    playGame(button.value);
  });
});

endGameButton.addEventListener("click", () => {
  score = 0;
  updateScore("");
  updateChoices("", "");
  updateResultMessage("");
});
