import createGrid from "./grid.js";
import defaultExport, { move } from "./game.js";

function createDom() {
  const body = document.querySelector("body");
  
  createGrid();
  
  const arrows = document.createElement("div");
  const upArrow = document.createElement("div");
  const leftArrow = document.createElement("div");
  const rightArrow = document.createElement("div");
  const downArrow = document.createElement("div");

  upArrow.textContent = "UP";
  leftArrow.textContent = "LFT";
  rightArrow.textContent = "RGHT";
  downArrow.textContent = "DWN";
  
  upArrow.addEventListener("click", () => {
    move("up");
  });
  leftArrow.addEventListener("click", () => {
    move("left");
  });
  rightArrow.addEventListener("click", () => {
    move("right");
  });
  downArrow.addEventListener("click", () => {
    move("down");
  });


  arrows.appendChild(upArrow);
  arrows.appendChild(leftArrow);
  arrows.appendChild(rightArrow);
  arrows.appendChild(downArrow);

  body.appendChild(arrows);



}

export default createDom;