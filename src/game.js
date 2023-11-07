import { alphabet } from "./grid.js";

console.log(alphabet);
let snake = [
  ["a", "1"],
  ["a", "2"], 
  ["a", "3"]
];


export default function playGame() {
  
refreshSnake();
}


export function move(direction) {
  
  let snakeCoords;

  if (direction == "up") {
    
  } else if (direction == "left") {
    
  } else if (direction == "right") {
    let snakeClass = document.querySelectorAll(".snake-body");
    console.log(snakeClass);
    //snakeClass
    snakeClass.forEach((div) => {
      div.classList.remove("snake-body");

    });
    snake.forEach((row) => {
      row[1]++;
    });
    
    refreshSnake();
    console.log(snake);
    
  } else if (direction == "down") {
    
  
  }
}

function refreshSnake() {
  
    snake.forEach((row) => {
    const snakeCell = document.querySelector(`#${row[0]}-${row[1]}`);
    snakeCell.classList.add("snake-body");
  });
}