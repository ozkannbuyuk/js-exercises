const gameBoxes = document.querySelectorAll(".game-box");
let currentPlayer = "X";

function handleClick() {
  if (this.innerHTML) {
    return;
  }

  this.innerHTML = currentPlayer;

  if (checkWinner()) {
    alert(`Player ${currentPlayer} wins!`);
    resetGame();
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWinner() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (
      gameBoxes[a].innerHTML &&
      gameBoxes[a].innerHTML === gameBoxes[b].innerHTML &&
      gameBoxes[b].innerHTML === gameBoxes[c].innerHTML
    ) {
      return true;
    }
  }

  return false;
}

function resetGame() {
  gameBoxes.forEach((box) => {
    box.innerHTML = "";
  });
  currentPlayer = "X";
}

gameBoxes.forEach((box) => {
  box.addEventListener("click", handleClick);
});
