const follower = document.querySelector(".follower");
let posX = 0;
let targetX = 0;

document.addEventListener("mousedown", (e) => {
  targetX = e.clientX;
});

function animate() {
  posX += (targetX - posX) / 10;
  follower.style.transform = `translate(${posX}px, ${100}px)`;
  requestAnimationFrame(animate);
}

animate();
