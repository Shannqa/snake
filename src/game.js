import { alphabet, gridSize } from "./grid.js";

console.log(alphabet);
let snakeOld = [
  ["a", "1"],
  ["a", "2"], 
  ["a", "3"]
];

let snake = [ // each segment in a diff array
  ["b", "5", "right"], //head
  ["b", "4", "right"],
  ["b", "3", "right"],
  ["b", "2", "right"],
  ["b", "1", "right"] // tail
]

console.log(snake);

let snake1 = [ // go down
  ["b", "5", "down"], //head
  ["a", "5", "right"],
  ["a", "4", "right"],
  ["a", "3", "right"],
  ["a", "2", "right"] // tail
]
let snake2 = [ // go down
  ["c", "5", "down"], //head
  ["b", "5", "down"],
  ["a", "5", "right"],
  ["a", "4", "right"],
  ["a", "3", "right"] // tail
]
let snake3 = [ // go left
  ["c", "4", "left"], //head
  ["c", "5", "down"],
  ["b", "5", "down"],
  ["a", "5", "right"],
  ["a", "4", "right"] // tail
]

let snake4 = [ // go left
  ["c", "3", "left"], //head
  ["c", "4", "left"],
  ["c", "5", "down"],
  ["b", "5", "down"],
  ["a", "5", "right"] // tail
]
// numbers right left
// letters up down
let snakeHead = snake[0];

let turn = [
  ];


export default function playGame() {
  
refreshSnake();
}


export function move(direction) {
  let snakeClass = document.querySelectorAll(".snake-body");

  if (direction == "up") {
    let letterBefore = snake[0][0];
    
    // is move valid? 
    if (letterBefore == "a") return;

    // move valid
    snakeClass.forEach((div) => {
      div.classList.remove("snake-body");

    });
    let letterAfter = getLetter(letterBefore, "previous");

    snake.unshift([letterAfter, `${snake[0][1]}`, `${direction}`
         ]);
    snake.pop();

    refreshSnake();

  } else if (direction == "left") {
    let numberBefore = Number(snake[0][1]);
    let numberAfter = numberBefore - 1;
    
    // is move valid?
    if (snake[0][1] <= 0) return;
  
    // move valid
    snakeClass.forEach((div) => {
      div.classList.remove("snake-body");
    });

//console.log(numberAfter);
    snake.unshift([snake[0][0], numberAfter, direction]);
    snake.pop();
    
    console.log(snake);

    refreshSnake();
    
  } else if (direction == "right") {
    let numberBefore = Number(snake[0][1]);
    let numberAfter = numberBefore + 1;
    // is move valid?
    if (snake[0][1] >= gridSize) return;
  
    // move valid
    snakeClass.forEach((div) => {
      div.classList.remove("snake-body");
    });

//console.log(numberAfter);
    snake.unshift([snake[0][0], numberAfter, direction]);
    snake.pop();
    
    console.log(snake);

    refreshSnake();
    /*
    console.log(snakeClass);
    //snakeClass
    snakeClass.forEach((div) => {
      div.classList.remove("snake-body");

    });
    snake.forEach((row) => {
      row[1]++;
    });
    
    refreshSnake();*/

  } else if (direction == "down") {
    let letterBefore = snake[0][0];
    
    // is move valid? 
    if (letterBefore == `${alphabet[gridSize]}`) return;

    // move valid
    snakeClass.forEach((div) => {
      div.classList.remove("snake-body");

    });
    let letterAfter = getLetter(letterBefore, "next");

    snake.unshift([letterAfter, `${snake[0][1]}`, `${direction}`
         ]);
    snake.pop();

    refreshSnake();
  }
}

function refreshSnake() {
  
    snake.forEach((row) => {
    const snakeCell = document.querySelector(`#${row[0]}-${row[1]}`);
    snakeCell.classList.add("snake-body");
  });
}

function getLetter(letter, action) {
  let alphabetArray = alphabet;
  let nr = alphabetArray.indexOf(letter);
  if (action == "previous") {
    let previousLetter = alphabetArray[nr - 1];
  return previousLetter;
  } else {
    let nextLetter = alphabetArray[nr + 1];
    return nextLetter;
  }
}

//console.log(getNextLetter("h"));