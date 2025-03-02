document.addEventListener("DOMContentLoaded", function () {
  const shape1 = document.querySelector(".shape-1");
  const shape2 = document.querySelector(".shape-2");
  const shape3 = document.querySelector(".shape-3");
  const shape4 = document.querySelector(".shape-4");
  const container = document.querySelector(".container");

  function moveShape(shape, event, factor = 1) {
    if (!shape) return;

    const containerRect = container.getBoundingClientRect();
    const shapeRect = shape.getBoundingClientRect();

    const centerX = containerRect.width / 2;
    const centerY = containerRect.height / 2;

    const mouseX = event.clientX - containerRect.left;
    const mouseY = event.clientY - containerRect.top;

    const deltaX = (mouseX - centerX) / centerX;
    const deltaY = (mouseY - centerY) / centerY;

    const moveX = deltaX * 30 * factor;
    const moveY = deltaY * 30 * factor;

    shape.style.transform = `translate(${moveX}px, ${moveY}px)`;
  }

  container.addEventListener("mousemove", function (event) {
    moveShape(shape1, event, 1.2);
    moveShape(shape2, event, 0.8);
    moveShape(shape3, event, 1.5);
    moveShape(shape4, event, 0.6);
  });

  container.addEventListener("mouseleave", function () {
    if (shape1) shape1.style.transform = "translate(0, 0)";
    if (shape2) shape2.style.transform = "translate(0, 0)";
    if (shape3) shape3.style.transform = "translate(0, 0)";
    if (shape4) shape4.style.transform = "translate(0, 0)";
  });

  // Create a welcoming greeting based on time of day
  const hour = new Date().getHours();
  let greeting = "Welcome";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  // Update the h1 with the time-based greeting
  const h1 = document.querySelector("h1");
  if (h1) {
    h1.textContent = `${greeting}! Welcome to Big Paws`;
  }
});
