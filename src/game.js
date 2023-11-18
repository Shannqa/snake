/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable import/extensions */
/* eslint-disable eqeqeq */
import { head } from "lodash";
import { gridSize } from "./grid.js";

let snake = [];
let score = 0;

const speedValues = [
  500, 475, 450, 425, 400, 375, 350, 325, 300, 280, 260, 240, 220, 200, 190,
  180, 170, 160, 150, 140, 130, 120, 110, 100, 95, 90, 85, 80, 75, 70, 65, 60,
  55, 50, 48, 46, 44, 42, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30,
];

let speedIncr = 0;

let timer = null;
let foodEaten = false;

function setClearInterval() {
  if (timer) {
    clearInterval(timer);
  }
  timer = setInterval(move, speedValues[speedIncr], "auto");
}

function refreshSnake() {
  const snakeClass = document.querySelectorAll(".snake-body");
  snakeClass.forEach((div) => {
    div.classList.remove("snake-body");
  });

  snake.forEach((row) => {
    const snakeCell = document.querySelector(`#r${row[0]}c${row[1]}`);
    snakeCell.classList.add("snake-body");
  });
  checkFood();
  setClearInterval();
}

export function move(type, direction) {
  const headDirection = snake[0][2];

  // the movement of a player
  if (type === "player") {
    // if the head is already moving in the same direction as the user wants, do nothing
    if (direction == snake[0][2]) return;
    // block movement in the opposite way
    if (
      (direction === "up" && headDirection === "down") ||
      (direction === "down" && headDirection === "up") ||
      (direction === "right" && headDirection === "left") ||
      (direction === "left" && headDirection === "right")
    ) {
      return;
    }
  }

  // auto movement
  if (type === "auto") {
    direction = headDirection;
  }

  // snake's head eats the body
  for (let i = 1; i < snake.length; i++) {
    if (snake[0][0] === snake[i][0] && snake[0][1] === snake[i][1]) {
      return failGame();
    }
  }

  if (direction == "up") {
    // is move valid?
    if (snake[0][0] < 1) return failGame();
    const numberBefore = Number(snake[0][0]);
    const numberAfter = numberBefore - 1;
    // move valid
    snake.unshift([numberAfter, snake[0][1], direction]);
  } else if (direction == "left") {
    // is move valid?
    if (snake[0][1] < 1) return failGame();
    const numberBefore = Number(snake[0][1]);
    const numberAfter = numberBefore - 1;
    // move valid
    snake.unshift([snake[0][0], numberAfter, direction]);
  } else if (direction == "right") {
    // is move valid?
    if (snake[0][1] >= gridSize - 1) return failGame();
    const numberBefore = Number(snake[0][1]);
    const numberAfter = numberBefore + 1;
    // move valid
    snake.unshift([snake[0][0], numberAfter, direction]);
  } else if (direction == "down") {
    // is move valid?
    if (snake[0][0] >= gridSize - 1) return failGame();
    const numberBefore = Number(snake[0][0]);
    const numberAfter = numberBefore + 1;
    // move valid
    snake.unshift([numberAfter, snake[0][1], direction]);
  }

  if (foodEaten === true) {
    foodEaten = false;
  } else {
    snake.pop();
  }
  refreshSnake();
}

function getRandomCell() {
  const randomNr1 = Math.floor(Math.random() * gridSize);
  const randomNr2 = Math.floor(Math.random() * gridSize);
  return [randomNr1, randomNr2];
}

function spawnFood() {
  const randomCell = getRandomCell();
  // if food spawns on snake's body, spawn it again
  for (let i = 0; i < snake.length; i++) {
    if (snake[i][0] == randomCell[0] && snake[i][1] == randomCell[1]) {
      return spawnFood();
    }
  }
  // if it's not on snake's body, mark the cell as food
  const foodCell = document.querySelector(
    `#r${randomCell[0]}c${randomCell[1]}`,
  );
  foodCell.classList.add("food");
}

// check if the snake eats food
function checkFood() {
  const foodCell = document.querySelector(".food");
  // if snake's head is the same cell as food
  if (`r${snake[0][0]}c${snake[0][1]}` == foodCell.id) {
    foodCell.classList.remove("food");
    spawnFood();
    updateScore();
    foodEaten = true;
    console.log(speedValues[speedIncr]);
    if (speedIncr < speedValues.length - 1) {
      speedIncr++;
    }
  }
}

function updateScore() {
  const scoreValue = document.querySelector(".score-value");
  score += 10;
  scoreValue.textContent = score;
}

export default function playGame() {
  restartGame();
  spawnFood();
  refreshSnake();
}

function failGame() {
  // stop snake's movement
  if (timer) {
    clearInterval(timer);
  }

  // show lose screen
  const gameFailed = document.querySelector(".game-failed");
  gameFailed.classList.remove("fail-inactive");
  gameFailed.textContent = `The game ends! Your score: ${score}`;
}

function restartGame() {
  // each segment in a diff array
  snake = [
    [10, 4, "right"], // head
    [10, 3, "right"],
    [10, 2, "right"],
    [10, 1, "right"],
    [10, 0, "right"], // tail
  ];

  // if any food items exist, delete them
  const foodCell = document.querySelector(".food");
  if (foodCell) {
    foodCell.classList.remove("food");
  }

  // reset score
  score = 0;

  // info
  const gameFailed = document.querySelector(".game-failed");
  gameFailed.classList.add("fail-inactive");
}

/* to do
high scores - save them in cache
fail screen
fail game on touching snake's body
fail game on touching the grid edges
ui
  change borders between squares, either remove entirely or make them light grey
*/
