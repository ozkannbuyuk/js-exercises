let button = document.querySelector("button");
let menu = document.querySelector("nav");
let closeBtn = document.querySelector("nav .close-btn i");

button.addEventListener("click", function () {
  menu.style.left = 0;
});

closeBtn.addEventListener("click", function () {
  menu.style.left = "-100%";
});
