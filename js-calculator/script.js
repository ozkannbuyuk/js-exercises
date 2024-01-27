var screen = document.querySelector("#screen");
var btnNumber = document.querySelectorAll(".btn--number");
var btnOpt = document.querySelectorAll(
  ".btn--operator, .btn--equals, .btn--clear"
);
var optState = false;
var opt = "";
var final = 0;

btnNumber.forEach((element) => {
  element.onclick = function () {
    this.style.fontSize = "25px";
    if (screen.textContent === "0" || optState) {
      screen.textContent = "";
    }
    screen.textContent += this.textContent;
    optState = false;
    setTimeout(() => {
      this.style.fontSize = "16px";
    }, 500);
  };
});

btnOpt.forEach((element) => {
  element.onclick = function () {
    optState = true;
    var newOpt = this.textContent;

    switch (opt) {
      case "+":
        screen.textContent = final + Number(screen.textContent);
        break;
      case "-":
        screen.textContent = final - Number(screen.textContent);
        break;
      case "*":
        screen.textContent = final * Number(screen.textContent);
        break;
      case "/":
        screen.textContent = final / Number(screen.textContent);
        break;
      case "=":
        final = Number(screen.textContent);
        break;
    }
    final = Number(screen.textContent);
    opt = newOpt;
  };
});
