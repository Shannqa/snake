/* eslint-disable no-plusplus */
/* eslint-disable eqeqeq */
const gridSize = 20;
const gridArray = [];

export function createGridArray(size) {
  // rows
  for (let r = 0; r < size + 1; r++) {
    gridArray.push([]);
    // columns
    for (let c = 0; c < size + 1; c++) {
      gridArray[r].push(c);
    }
  }
  console.log(gridArray);
  return gridArray;
}

export default function createGrid() {
  const array = createGridArray(gridSize);

  const body = document.querySelector("body");
  const grid = document.createElement("div");

  array.forEach((row, index) => {
    row.forEach((cell) => {
      const square = document.createElement("div");
      square.classList.add("square");
      square.setAttribute("id", `r${index}c${cell}`);
      grid.appendChild(square);
    });
  });

  grid.classList.add("grid");
  body.appendChild(grid);
}

export { gridSize, gridArray };
