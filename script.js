const sketchArea = document.querySelector("#sketch-area");
const penBtn = document.querySelector("#pen-btn");
const randomBtn = document.querySelector("#random-btn");
const eraserBtn = document.querySelector("#eraser-btn");
const clearBtn = document.querySelector("#clear-btn");
const gridBtn = document.querySelector("#grid-btn");
const rangeInput = document.querySelector("#range-input");

let rangeValue = 16;
const containerSize = 470;

sketchArea.style.height = `${containerSize}px`;
sketchArea.style.width = `${containerSize}px`;

function createDiv() {
    for(let i=0; i < (rangeValue * rangeValue); i++) {
        const cell = document.createElement("div");
        cell.style.height = `${containerSize/rangeValue}px`;
        cell.style.width = `${containerSize/rangeValue}px`;

        cell.classList.add("cell");
        sketchArea.appendChild(cell);
    }
}
createDiv();