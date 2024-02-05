const colors = ["violet", "blue", "green", "orange", "red"];

let selectedColor = "white";

function setColor(color) {
  selectedColor = color;
  document.getElementById("selected-color").style.backgroundColor = color;
}

for (let i = 0; i < colors.length; i++) {
  const newColor = document.createElement("div");
  newColor.style.backgroundColor = colors[i];
  newColor.addEventListener("click", function () {
    setColor(colors[i]);
  });
  document.getElementById("color-palette").appendChild(newColor);
}

const items = document.getElementsByTagName("path");
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function (e) {
    e.currentTarget.setAttribute("fill", selectedColor);
  });
}

document
  .getElementById("color-picker")
  .addEventListener("change", function (e) {
    setColor(e.currentTarget.value);
  });
document.getElementById("clear").addEventListener("click", function (e) {
  const items = document.getElementsByTagName("path");
  for (let i = 0; i < items.length; i++) {
    items[i].setAttribute("fill", "white");
  }
});
