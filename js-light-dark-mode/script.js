const ball = document.querySelector("#ball");
let isLeftSide = true;

ball.addEventListener("click", changeTheme);

function changeTheme() {
  if (isLeftSide) {
    ball.style.left = "40px";
    document.body.style.backgroundColor = "#111111";
    ball.style.backgroundColor = "#111111";
    document.querySelector(".mode-toggle").style.backgroundColor = "#ffffff";
    isLeftSide = false;
  } else {
    ball.style.left = "5px";
    document.body.style.backgroundColor = "#ffffff";
    ball.style.backgroundColor = "#ffffff";
    document.querySelector(".mode-toggle").style.backgroundColor = "#111111";
    isLeftSide = true;
  }
}
