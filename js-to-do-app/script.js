document.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelector("#add");
  const btn = document.querySelector("#btn");
  const list = document.querySelector("#list");

  btn.addEventListener("click", btnClick);
  list.addEventListener("click", listClick);

  function btnClick() {
    const txt = input.value;
    if (txt === "") {
      alert("You must write something!");
    } else {
      const li = document.createElement("li");
      li.classList.add("element-group__list__item");
      li.textContent = txt;
      list.insertBefore(li, list.firstElementChild);
      input.value = "";
    }
  }

  function listClick(e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    }
  }
});
