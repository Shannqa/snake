const gridSize = 20;
const alphabet = "xabcdefghijklmnopqrstuvwxyz".split('');


export function createGridArray(size) {

  const gridArray = [];
    // rows
    for (let r = 0; r < size + 1; r++) {
    gridArray.push([]);
      // columns
      for (let c = 0; c < size + 1; c++) {
        if (c == 0) {
          // column with letters
          gridArray[r].push(`${alphabet[r]}`);
        } else if (r == 0) {
          // row with numbers
          gridArray[r].push(c);
        } else {
          gridArray[r].push(`${alphabet[r]}-${c}`);
        }
      
      }
    }
    return gridArray;
  }
  
export default function createGrid() {
  const array = createGridArray(gridSize);
  console.log(array);

  const body = document.querySelector("body");
  const grid = document.createElement("div");
  
  array.forEach((row, rowIndex) => {

    row.forEach((cell, index) => {
      const square = document.createElement("div");

      if (rowIndex == 0) {
        square.textContent = cell;
      }

      if (index == 0) {
        square.textContent = cell;
      }

    square.classList.add("square");
    square.setAttribute("id", `${cell}`);
    //square.textContent = array[cell];
    grid.appendChild(square);

    });
  });
  
  grid.classList.add("grid");
  body.appendChild(grid);
  
}


export { alphabet, gridSize };