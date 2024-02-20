const ufo = document.getElementById("ufo");
const speedInput = document.getElementById("speed");
const amplitudeInput = document.getElementById("amplitude");

let time = 0;

function animate() {
  const speed = parseFloat(speedInput.value);
  const amplitude = parseFloat(amplitudeInput.value);

  time += speed;
  const yOffset = amplitude * Math.sin(time);

  ufo.style.top = yOffset + "px";

  requestAnimationFrame(animate);
}

animate();
