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

// numbers right left
// letters up down
let snakeHead = snake[0];
let timer = null;

function setClearInterval() {
  if (timer) {
    clearInterval(timer);
  } 
    timer = setInterval(snakeTimer, 2000, [snake[0][2]]);
}

export function snakeTimer(direction) {
  let currentDirection = direction[0];
  console.log(currentDirection);
  
  if (direction == "up") {
    // block moving opposite way

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

  } 
}

export default function playGame() {
  
refreshSnake();

}


export function move(direction) {
  /* add when timer works
  // if the head is already moving in the same direction as the user wants, do nothing
  if (direction == snake[0][2]) return;
  */
  let snakeClass = document.querySelectorAll(".snake-body");


  if (direction == "up") {
    // block moving opposite way
    if (snake[0][2] == "down") return;

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
    // block moving opposite way
    if (snake[0][2] == "right") return;

    // is move valid?
    if (snake[0][1] <= 1) return;
    
    let numberBefore = Number(snake[0][1]);
    let numberAfter = numberBefore - 1;
    
    // move valid
    snakeClass.forEach((div) => {
      div.classList.remove("snake-body");
    });

    snake.unshift([snake[0][0], numberAfter, direction]);
    snake.pop();
    
   // console.log(snake);

    refreshSnake();
    
  } else if (direction == "right") {
    // block moving opposite way
    if (snake[0][2] == "left") return;

    // is move valid?
    if (snake[0][1] >= gridSize) return;
    
    let numberBefore = Number(snake[0][1]);
    let numberAfter = numberBefore + 1;

    // move valid
    snakeClass.forEach((div) => {
      div.classList.remove("snake-body");
    });

    snake.unshift([snake[0][0], numberAfter, direction]);
    snake.pop();
    
   // console.log(snake);

    refreshSnake();

  } else if (direction == "down") {
    // block moving opposite way
    if (snake[0][2] == "up") return;

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
    //console.log("aaa");
    
    setClearInterval();
    // up got it broken no class
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

function failGame() {
  // show lose screen
  
}

function restartGame() {
  
}

// set timeouts for continuous movement same direction as head
// arrow icons
// spawn the food
