function isScrollEnd(container) {
  return (
    Math.floor(container.scrollLeft) + container.offsetWidth ===
    container.scrollWidth
  );
}
function isScrollBegin(container) {
  return container.scrollLeft === 0;
}
function hasHorizontalScroll(container) {
  return container.scrollWidth > container.offsetWidth;
}
function scrollControl(scrollable, container) {
  if (hasHorizontalScroll(container)) {
    if (isScrollBegin(container)) {
      scrollable.classList.remove("left");
    } else {
      scrollable.classList.add("left");
    }
    if (isScrollEnd(container)) {
      scrollable.classList.remove("right");
    } else {
      scrollable.classList.add("right");
    }
  }
}

const scrollables = document.querySelectorAll(".scrollable-content");

scrollables.forEach((scrollable) => {
  const container = scrollable.querySelector(".scrollable-inner"),
    next = scrollable.querySelector(".next"),
    prev = scrollable.querySelector(".prev");

  next.addEventListener("click", () => {
    if (isScrollEnd(container)) {
      container.scrollLeft = 0;
    }
    container.scrollLeft += container.offsetWidth - 100;
  });
  prev.addEventListener("click", () => {
    if (isScrollBegin(container)) {
      container.scrollLeft = container.scrollWidth;
    }
    container.scrollLeft -= container.offsetWidth - 100;
  });
  container.addEventListener("scroll", () =>
    scrollControl(scrollable, container)
  );
  new ResizeObserver(() => scrollControl(scrollable, container)).observe(
    container
  );
});
