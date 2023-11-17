/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable import/extensions */
/* eslint-disable eqeqeq */
import { gridSize } from "./grid.js";

const snake = [
  // each segment in a diff array
  [10, 5, "right"], // head
  [10, 4, "right"],
  [10, 3, "right"],
  [10, 2, "right"],
  [10, 1, "right"], // tail
];
// numbers right left
// letters up down
let timer = null;

function setClearInterval() {
  if (timer) {
    clearInterval(timer);
  }
  timer = setInterval(snakeTimer, 2000, [snake[0][2]]);
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
  // checkFood();
  setClearInterval();
}

export function snakeTimer(direction) {
  const currentDirection = direction[0];
  console.log(currentDirection);

  if (direction == "up") {
    // is move valid?
    if (snake[0][0] <= 1) return;
    const numberBefore = Number(snake[0][0]);
    const numberAfter = numberBefore - 1;

    // move valid
    snake.unshift([numberAfter, snake[0][1], direction]);
    snake.pop();
    refreshSnake();
  } else if (direction == "left") {
    // is move valid?
    if (snake[0][1] <= 1) return;

    const numberBefore = Number(snake[0][1]);
    const numberAfter = numberBefore - 1;

    // move valid
    snake.unshift([snake[0][0], numberAfter, direction]);
    snake.pop();
    refreshSnake();
  } else if (direction == "right") {
    // is move valid?
    if (snake[0][1] >= gridSize) return;

    const numberBefore = Number(snake[0][1]);
    const numberAfter = numberBefore + 1;

    // move valid
    snake.unshift([snake[0][0], numberAfter, direction]);
    snake.pop();
    refreshSnake();
  } else if (direction == "down") {
    // is move valid?
    if (snake[0][0] >= gridSize) return;

    const numberBefore = Number(snake[0][0]);
    const numberAfter = numberBefore + 1;
    // move valid
    snake.unshift([numberAfter, snake[0][1], direction]);
    snake.pop();
    refreshSnake();
  }
}

export default function playGame() {
  // spawnFood();
  refreshSnake();
}

export function move(direction) {
  // if the head is already moving in the same direction as the user wants, do nothing
  if (direction == snake[0][2]) return;

  if (direction == "up") {
    // block moving opposite way
    if (snake[0][2] == "down") return;

    if (snake[0][0] >= gridSize) return;
    const numberBefore = Number(snake[0][0]);
    const numberAfter = numberBefore - 1;

    // move valid
    snake.unshift([numberAfter, snake[0][1], direction]);
    snake.pop();
    refreshSnake();
  } else if (direction == "left") {
    // block moving opposite way
    if (snake[0][2] == "right") return;

    // is move valid?
    if (snake[0][1] <= 1) return;

    const numberBefore = Number(snake[0][1]);
    const numberAfter = numberBefore - 1;

    // move valid
    snake.unshift([snake[0][0], numberAfter, direction]);
    snake.pop();

    // console.log(snake);

    refreshSnake();
  } else if (direction == "right") {
    // block moving opposite way
    if (snake[0][2] == "left") return;

    // is move valid?
    if (snake[0][1] >= gridSize) return;

    const numberBefore = Number(snake[0][1]);
    const numberAfter = numberBefore + 1;

    // move valid

    snake.unshift([snake[0][0], numberAfter, direction]);
    snake.pop();

    // console.log(snake);

    refreshSnake();
  } else if (direction == "down") {
    // block moving opposite way
    if (snake[0][2] == "up") return;

    if (snake[0][0] >= gridSize) return;
    const numberBefore = Number(snake[0][0]);
    const numberAfter = numberBefore + 1;

    // move valid
    snake.unshift([numberAfter, snake[0][1], direction]);
    snake.pop();
    refreshSnake();
  }
}

function failGame() {
  // show lose screen
}

function restartGame() {}

function spawnFood() {
  const randomNr = Math.floor(Math.random() * gridSize + 1);
  const foodId = `#${randomNr}-${randomNr}`;
  const foodCell = document.querySelector(foodId);
  /* let snakeBody = [];
  snakeBody.forEach((row) => {
    snakeBody.push(`#${row[0]}-${row[1]}`);
    // console.log(snakeCell);
  }) */

  // eslint-disable-next-line consistent-return
  snake.forEach((row) => {
    if (`#${row[0]}-${row[1]}` == foodId) {
      return spawnFood();
    }
  });

  foodCell.classList.add("food");
  console.log(foodCell);
}

function checkFood() {
  const foodCell = document.querySelector(".food");
  let foodId;

  if (`#${snake[0]}-${snake[1]}` == foodCell.id) {
    foodCell.classList.remove("food");
    // spawnFood();
  }
}
