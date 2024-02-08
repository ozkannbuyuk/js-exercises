const button = document.getElementById("animate-btn");
const lottie = document.getElementById("lottie");
const wrapper = document.querySelector(".button-wrapper");
var animation = bodymovin.loadAnimation({
  container: lottie,
  path: "https://assets10.lottiefiles.com/packages/lf20_lnwg3he9.json",
  renderer: "svg/canvas/html",
  loop: false,
  autoplay: false,
});
animation.setSpeed(1.5);
animation.addEventListener(
  "complete",
  () => (wrapper.style.overflow = "hidden")
);

button.addEventListener("click", () => {
  wrapper.style.overflow = "initial";
  animation.stop();
  animation.play();
});
