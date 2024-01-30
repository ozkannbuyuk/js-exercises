const boardWidth = 400;
const boardHeight = 400;

const gameBoard = document.getElementById("game-board");
gameBoard.style.width = `${boardWidth}px`;
gameBoard.style.height = `${boardHeight}px`;

const snake = [];
snake[0] = document.createElement("div");
snake[0].classList.add("snake");
snake[0].style.left = "0px";
snake[0].style.top = "0px";
gameBoard.appendChild(snake[0]);

const food = document.createElement("div");
food.classList.add("food");
food.style.left = `${Math.floor((Math.random() * boardWidth) / 20) * 20}px`;
food.style.top = `${Math.floor((Math.random() * boardHeight) / 20) * 20}px`;
gameBoard.appendChild(food);

let xPosition = 0;
let yPosition = 0;
let previousXPosition = 0;
let previousYPosition = 0;
let foodEaten = false;
document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "ArrowUp":
      if (previousYPosition !== 20) {
        yPosition -= 20;
      }
      break;
    case "ArrowDown":
      if (previousYPosition !== -20) {
        yPosition += 20;
      }
      break;
    case "ArrowLeft":
      if (previousXPosition !== 20) {
        xPosition -= 20;
      }
      break;
    case "ArrowRight":
      if (previousXPosition !== -20) {
        xPosition += 20;
      }
      break;
  }
  if (
    xPosition === parseInt(food.style.left) &&
    yPosition === parseInt(food.style.top)
  ) {
    foodEaten = true;
    food.style.left = `${Math.floor((Math.random() * boardWidth) / 20) * 20}px`;
    food.style.top = `${Math.floor((Math.random() * boardHeight) / 20) * 20}px`;
  }
  if (!foodEaten) {
    gameBoard.removeChild(snake[snake.length - 1]);
    snake.pop();
  } else {
    foodEaten = false;
  }
  previousXPosition = xPosition;
  previousYPosition = yPosition;
  snake.unshift(document.createElement("div"));
  snake[0].classList.add("snake");
  snake[0].style.left = `${xPosition}px`;
  snake[0].style.top = `${yPosition}px`;
  gameBoard.insertBefore(snake[0], gameBoard.firstChild);
});
