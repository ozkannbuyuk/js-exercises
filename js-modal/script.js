document.addEventListener("DOMContentLoaded", function () {
  var openModalButton = document.querySelector("#openModal");
  var modal = document.querySelector("#modal");
  var modalForm = document.querySelector("#modalForm");
  var closeModalButton = document.querySelector("#closeModal");

  openModalButton.addEventListener("click", function () {
    modal.style.display = "flex";
    setTimeout(function () {
      modalForm.style.left = "50%";
    }, 200);
  });

  closeModalButton.addEventListener("click", function () {
    console.log("Clicked close button");
    modal.style.display = "none";
  });
});
