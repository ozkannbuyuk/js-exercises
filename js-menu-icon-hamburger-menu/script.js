document.addEventListener("DOMContentLoaded", function () {
  let menuIcon = document.querySelector(".menu-icon");

  menuIcon.addEventListener("click", function () {
    this.classList.toggle("open");
  });
});
