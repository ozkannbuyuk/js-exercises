document.addEventListener("DOMContentLoaded", function () {
  let accordionItems = document.querySelectorAll("#accordion .accordion-item");

  accordionItems.forEach(function (item) {
    let title = item.querySelector(".accordion-title");

    title.addEventListener("click", function () {
      item.classList.toggle("active");
      let content = item.querySelector(".accordion-content");
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
});
