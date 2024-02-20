const follower = document.querySelector(".follower");
let mouseX = 0;
let mouseY = 0;
let posX = 0;
let posY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  posX += (mouseX - posX) / 100;
  posY += (mouseY - posY) / 100;

  follower.style.transform = `translate(${posX}px, ${posY}px)`;

  requestAnimationFrame(animate);
}

animate();
