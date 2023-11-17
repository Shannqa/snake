/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable import/extensions */
/* eslint-disable eqeqeq */
import { head } from "lodash";
import { gridSize } from "./grid.js";

const snake = [
  // each segment in a diff array
  [10, 4, "right"], // head
  [10, 3, "right"],
  [10, 2, "right"],
  [10, 1, "right"],
  [10, 0, "right"], // tail
];

let timer = null;

function setClearInterval() {
  if (timer) {
    clearInterval(timer);
  }
  timer = setInterval(move, 500, "auto");
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

export default function playGame() {
  spawnFood();
  refreshSnake();
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

  if (direction == "up") {
    if (snake[0][0] < 1) return;
    const numberBefore = Number(snake[0][0]);
    const numberAfter = numberBefore - 1;

    // move valid
    snake.unshift([numberAfter, snake[0][1], direction]);
    snake.pop();
    refreshSnake();
  } else if (direction == "left") {
    // is move valid?
    if (snake[0][1] < 1) return;

    const numberBefore = Number(snake[0][1]);
    const numberAfter = numberBefore - 1;

    // move valid
    snake.unshift([snake[0][0], numberAfter, direction]);
    snake.pop();
    refreshSnake();
  } else if (direction == "right") {
    // is move valid?
    if (snake[0][1] >= gridSize - 1) return;

    const numberBefore = Number(snake[0][1]);
    const numberAfter = numberBefore + 1;

    // move valid
    snake.unshift([snake[0][0], numberAfter, direction]);
    snake.pop();
    refreshSnake();
  } else if (direction == "down") {
    if (snake[0][0] >= gridSize - 1) return;
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
  const randomNr1 = Math.floor(Math.random() * gridSize);
  const randomNr2 = Math.floor(Math.random() * gridSize);
  const foodId = `#r${randomNr1}c${randomNr2}`;
  const foodCell = document.querySelector(foodId);
  /* let snakeBody = [];
  snakeBody.forEach((row) => {
    snakeBody.push(`#${row[0]}-${row[1]}`);
    // console.log(snakeCell);
  }) */

  // eslint-disable-next-line consistent-return

  // if food spawns on snake's body, spawn it again
  snake.forEach((row) => {
    if (`#r${row[0]}c${row[1]}` == foodId) {
      return spawnFood();
    }
  });

  foodCell.classList.add("food");
  console.log(foodCell);
}

// check if the snake eats food
function checkFood() {
  const foodCell = document.querySelector(".food");
  if (`r${snake[0][0]}c${snake[0][1]}` == foodCell.id) {
    foodCell.classList.remove("food");
    spawnFood();
  }
}
