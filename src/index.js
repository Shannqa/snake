/*const snake = {
  
}*/
/*
import css from "./style.css";
*/
import createGrid from "./grid.js";
function createGrid1() {
  const gridSize = 10;
  const body = document.querySelector("body");
  const grid = document.createElement("div");
  grid.classList.add("grid");
  console.log("bbb");
  
  for (let i = 0; i < 10; i++) {
    
        /*  if (i == 0) {
        const label = document.createElement("div");
      label.classList.add("label");
      label.textContent = "a";
      grid.appendChild(label);
    
      }*/
   
    const square = document.createElement("div");
    square.classList.add("square");
    square.classList.add(`column-${i}`);
    square.textContent = "b";
    grid.appendChild(square);
    
    for (let j = 0; j < 10; j++) {
   
      const square = document.createElement("div");
      square.classList.add("square");
      grid.appendChild(square);
    
  }
    
  }
  body.appendChild(grid);
  
};

createGrid();

const snake = {
  head: "a1",
  tail: "b1"
  
}

function renderSnake() {
  
}


/*const grid = {
["X", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
["a", "a0", ]}*/





/*
function create a grid 10 x 10 boxes
snake - object for the player's snake. contains size (starting at 3), coordinates of head and tail




*/