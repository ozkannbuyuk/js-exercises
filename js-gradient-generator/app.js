const colorInput1 = document.getElementById("colorInput1");
const colorInput2 = document.getElementById("colorInput2");
const randomBtn = document.querySelector(".random");
const body = document.querySelector("body");
const message = document.getElementById("message");
const hexCodes = "0123456789abcdef";

colorInput1.addEventListener("input", updateGradient);
colorInput2.addEventListener("input", updateGradient);
randomBtn.addEventListener("click", applyRandomColor);

function updateGradient() {
  const firstColor = colorInput1.value;
  const secondColor = colorInput2.value;
  body.style.background = `linear-gradient(90deg, ${firstColor}, ${secondColor})`;
  updateColorMessage();
}

function getRandomHexCode() {
  return (
    "#" +
    Array.from(
      { length: 6 },
      () => hexCodes[Math.floor(Math.random() * 16)]
    ).join("")
  );
}

function applyRandomColor() {
  const firstRandom = getRandomHexCode();
  const secondRandom = getRandomHexCode();

  body.style.background = `linear-gradient(90deg, ${firstRandom}, ${secondRandom})`;
  colorInput1.value = firstRandom;
  colorInput2.value = secondRandom;
  updateColorMessage();
}

function updateColorMessage() {
  message.innerText = `background: linear-gradient(90deg, ${colorInput1.value}, ${colorInput2.value});`;
}

updateColorMessage();
applyRandomColor();
