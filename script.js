const sketchArea = document.querySelector("#sketch-area");
const rangeInput = document.querySelector("#range-input");
const rangeValueText = document.querySelector("#range-value-text");

const redBtn = document.querySelector("#redBtn");
const blueBtn = document.querySelector("#blueBtn");
const blackBtn = document.querySelector("#blackBtn");
const rainbowBtn = document.querySelector("#rainbowBtn");
const eraserBtn = document.querySelector("#eraserBtn");
const resetBtn = document.querySelector("#resetBtn");

const sketchAreaSize = 450;
sketchArea.style.height = `${sketchAreaSize}px`;
sketchArea.style.width = `${sketchAreaSize}px`;

let activeColor = "white"; // Default drawing color
let isDrawing = false; // mouse not pressed

// Update active button and color
document.querySelectorAll(".btn1").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".btn1").forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    if (button === redBtn) activeColor = "red";
    else if (button === blueBtn) activeColor = "blue";
    else if (button === blackBtn) activeColor = "black";
    else if (button === rainbowBtn) activeColor = "rainbow";
    else if (button === eraserBtn) activeColor = "white";
  });
});

// Create the grid dynamically
function createGrid() {
  const rangeValue = rangeInput.value; // Get grid size from slider
  rangeValueText.textContent = `${rangeValue}x${rangeValue}`;
  sketchArea.innerHTML = ""; // Clear previous grid

  for (let i = 0; i < rangeValue * rangeValue; i++) {
    const cell = document.createElement("div");
    cell.style.height = cell.style.width = `${sketchAreaSize / rangeValue}px`;
    cell.classList.add("cell");
    sketchArea.appendChild(cell);
  }

  // Add event listeners for drawing
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mousedown", () => {
      isDrawing = true;
      applyColor(cell);
    });
    cell.addEventListener("mousemove", () => {
      if (isDrawing) applyColor(cell);
    });
  });
}

// Function to apply color to a cell
function applyColor(cell) {
  if (activeColor === "rainbow") {
    cell.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    cell.style.backgroundColor = activeColor;
  }
}

// Reset the grid
resetBtn.addEventListener("click", () => {
  document.querySelectorAll(".cell").forEach((cell) => {
    cell.style.backgroundColor = "white";
  });
});

// Handle mouse up to stop drawing
window.addEventListener("mouseup", () => {
  isDrawing = false;
});

// Initialize grid and set up the range slider listener
rangeInput.addEventListener("input", createGrid);

createGrid();
