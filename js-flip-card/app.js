const vocabulary = [
  {
    english: "Book",
    turkish: "Kitap",
  },
  {
    english: "Computer",
    turkish: "Bilgisayar",
  },
  {
    english: "Chair",
    turkish: "Sandalye",
  },
  {
    english: "Dog",
    turkish: "Köpek",
  },
  {
    english: "Cat",
    turkish: "Kedi",
  },
  {
    english: "Table",
    turkish: "Masa",
  },
  {
    english: "Phone",
    turkish: "Telefon",
  },
  {
    english: "Pen",
    turkish: "Kalem",
  },
  {
    english: "Paper",
    turkish: "Kağıt",
  },
  {
    english: "Clock",
    turkish: "Saat",
  },
  {
    english: "Water",
    turkish: "Su",
  },
  {
    english: "Window",
    turkish: "Pencere",
  },
];

const flipcards = document.querySelector(".flipcards");

const cardCount = vocabulary.length;

console.log(cardCount);

function createCards(cardCount) {
  for (let i = 0; i < cardCount; i++) {
    const li = document.createElement("li");
    li.innerHTML = `
    <h4 class="flipcard-head">${vocabulary[i].english}</h4>
    <p class="flipcard-body">${vocabulary[i].turkish}</p>
    `;
    li.classList.add("flipcard");
    flipcards.appendChild(li);
  }
}

createCards(cardCount);

const flipbox = document.querySelectorAll(".flipcard");
console.log(flipbox);

flipbox.forEach((box) => {
  box.addEventListener("click", function () {
    box.classList.toggle("active");
  });
});
