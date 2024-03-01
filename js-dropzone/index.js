const dropArea = document.querySelector(".dropArea");

dropArea.addEventListener("dragover", (e) => {
  e.preventDefault();
  e.target.classList.add("over");
});

dropArea.addEventListener("dragleave", (e) => {
  e.target.classList.remove("over");
});

dropArea.addEventListener("drop", (e) => {
  e.preventDefault();
  const file = e.dataTransfer.files[0];
  const fileReader = new FileReader();
  fileReader.onload = (result) => {
    const img = document.createElement("img");
    img.src = result.target.result;
    dropArea.innerHTML = "";
    dropArea.appendChild(img);
  };
  fileReader.readAsDataURL(file);
});
