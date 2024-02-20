const follower = document.querySelector(".follower");
let mouseX = 0;
let mouseY = 0;
let speedX = 0;
let speedY = 0;
let posX = 0;
let posY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  speedX += ((mouseX - posX) / 5 - speedX) / 20;
  posX += speedX;
  speedY += ((mouseY - posY) / 5 - speedY) / 20;
  posY += speedY;

  follower.style.transform = `translate(${posX}px, ${posY}px) scale(${
    Math.sqrt(speedX ** 2 + speedY ** 2) / 10 + 1
  })`;

  requestAnimationFrame(animate);
}

animate();
