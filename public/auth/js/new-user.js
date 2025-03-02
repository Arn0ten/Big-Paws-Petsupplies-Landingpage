function createMovingBackground() {
  const background = document.createElement("div");
  background.className = "moving-background";
  document.body.appendChild(background);

  for (let i = 0; i < 10; i++) {
    const paw = document.createElement("div");
    paw.className = "paw";
    paw.style.left = `${Math.random() * 100}%`;
    paw.style.top = `${Math.random() * 100}%`;
    background.appendChild(paw);

    const claw = document.createElement("div");
    claw.className = "claw";
    claw.style.left = `${Math.random() * 100}%`;
    claw.style.top = `${Math.random() * 100}%`;
    background.appendChild(claw);
  }

  function moveElements() {
    document.querySelectorAll(".paw, .claw").forEach((el) => {
      el.style.transform = `translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px)`;
    });
    requestAnimationFrame(moveElements);
  }

  moveElements();
}

createMovingBackground();

// Add drag functionality
let isDragging = false;
let startX, startY;

document.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.clientX;
  startY = e.clientY;
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  const dx = e.clientX - startX;
  const dy = e.clientY - startY;
  document.querySelectorAll(".paw, .claw").forEach((el) => {
    const rect = el.getBoundingClientRect();
    el.style.left = `${rect.left + dx}px`;
    el.style.top = `${rect.top + dy}px`;
  });
  startX = e.clientX;
  startY = e.clientY;
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});
