document.addEventListener("DOMContentLoaded", function () {
  let numbersDiv = document.getElementById("numbers");

  for (let i = 0; i < 12; i++) {
    let numberDiv = document.createElement("div");
    numberDiv.classList.add("number-text");
    numberDiv.innerText = i + 1;

    let ang = (((i + 1) * 30 - 90) / 180) * Math.PI;
    numberDiv.style.left = `${Math.cos(ang) * 300 + 400}px`;
    numberDiv.style.top = `${Math.sin(ang) * 300 + 400}px`;
    numbersDiv.appendChild(numberDiv);
  }

  function updateTime() {
    let now = new Date();
    let hourHand = document.querySelector(".hour-hand");
    hourHand.style = `transform: rotate(${now.getHours() * 30}deg)`;
    let minuteHand = document.querySelector(".minute-hand");
    minuteHand.style = `transform: rotate(${now.getMinutes() * 6}deg)`;
    let secondHand = document.querySelector(".second-hand");
    secondHand.style = `transform: rotate(${now.getSeconds() * 6}deg)`;
  }

  setInterval(updateTime, 1000);
  updateTime();
});
