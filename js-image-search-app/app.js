const formWrapper = document.querySelector(".form-wrapper");
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const buttonWrapper = document.querySelector(".button-wrapper");
const searchButton = document.querySelector("#search-button");
const clearButton = document.querySelector("#clear-button");
const imageListWrapper = document.querySelector(".image-list-wrapper");

runEventListeners();

function runEventListeners() {
  searchForm.addEventListener("submit", handleSearch);
  clearButton.addEventListener("click", handleClear);
}

function handleClear() {
  searchInput.value = "";
  Array.from(imageListWrapper.children).forEach((child) => child.remove());
}

function handleSearch(e) {
  e.preventDefault();

  const value = searchInput.value.trim();

  fetch(`https://api.unsplash.com/search/photos?query=${value}`, {
    method: "GET",
    headers: {
      Authorization: "Client-ID xHcMXQRLXaWPgHWSk0KtDlh5FelLV3XxrSOm4JwAQ5U",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      data.results.forEach((image) => {
        addImageToUI(image.urls.small);
      });
    })
    .catch((err) => console.log(err));
}

function addImageToUI(url) {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = url;
  img.alt = "Image";
  img.width = 400;
  img.height = 400;

  card.appendChild(img);
  imageListWrapper.appendChild(card);
}
