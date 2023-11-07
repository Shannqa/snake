import { alphabet, gridSize } from "./grid.js";

console.log(alphabet);
let snake = [
  ["a", "1"],
  ["a", "2"], 
  ["a", "3"]
];

let snakeHead = snake[snake.length - 1];

let turn = [
  ];


export default function playGame() {
  
refreshSnake();
}


export function move(direction) {
  let snakeClass = document.querySelectorAll(".snake-body");

  if (direction == "up") {
    
  } else if (direction == "left") {
    
  } else if (direction == "right") {
    if (snakeHead[1] >= gridSize ) {
      return;
    }
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
    // move the head down
    snakeClass.forEach((div) => {
      div.classList.remove("snake-body");

    });
    let headLetter = snake[snake.length - 1][0]; 
    snake[snake.length - 1][0] = getNextLetter(headLetter);
    
    // each row except last
    
    for (let index = 0; index < snake.length - 1; index++) {
    snake[index][1] += 1;
    }
  
    refreshSnake();

    
/*
    snake[snake.length - 1][0] = 
    alphabet[x]
    
    find index of alphabet the same as head[0]
    change to alphabet[index + 1] */
  }
}

function refreshSnake() {
  
    snake.forEach((row) => {
    const snakeCell = document.querySelector(`#${row[0]}-${row[1]}`);
    snakeCell.classList.add("snake-body");
  });
}

function getNextLetter(letter) {
  let alphabetArray = alphabet;
  let nr = alphabetArray.indexOf(letter);
  let nextLetter = alphabetArray[nr + 1];
  return nextLetter;
}

//console.log(getNextLetter("h"));