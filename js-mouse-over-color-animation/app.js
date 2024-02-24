const container = document.querySelector(".container");
const colors = [
  "#FFC300",
  "#FF5733",
  "#C70039",
  "#900C3F",
  "#581845",
  "#2274A5",
  "#32936F",
  "#56B870",
];

createBoxes(255);

function createBoxes(count) {
  for (let i = 0; i < count; i++) {
    const boxEl = document.createElement("div");
    boxEl.classList.add("box");
    container.appendChild(boxEl);
  }
}

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("mouseover", function () {
    const randomIndex = Math.floor(Math.random() * colors.length);
    box.style.backgroundColor = colors[randomIndex];
  });

  box.addEventListener("mouseout", function () {
    setTimeout(function () {
      box.style.backgroundColor = "#444";
    }, 2000);
  });
});
