/* eslint-disable import/extensions */
import createGrid from "./grid.js";
import playGame, { move } from "./game.js";

import arrowUpSrc from "./arrow_upward_FILL0_wght400_GRAD0_opsz24.svg";
import arrowLeftSrc from "./arrow_back_FILL0_wght400_GRAD0_opsz24.svg";
import arrowRightSrc from "./arrow_forward_FILL0_wght400_GRAD0_opsz24.svg";
import arrowDownSrc from "./arrow_downward_FILL0_wght400_GRAD0_opsz24.svg";

function createDom() {
  const body = document.querySelector("body");

  createGrid();

  // const arrowUpSrc = "./arrow_upward_FILL0_wght400_GRAD0_opsz24.svg";
  // const arrowLeftSrc = "./arrow_back_FILL0_wght400_GRAD0_opsz24.svg";
  // const arrowRightSrc = "./arrow_forward_FILL0_wght400_GRAD0_opsz24.svg";
  // const arrowDownSrc = "./arrow_downward_FILL0_wght400_GRAD0_opsz24.svg";

  const arrowUpImg = new Image();
  const arrowLeftImg = new Image();
  const arrowRightImg = new Image();
  const arrowDownImg = new Image();
  arrowUpImg.src = arrowUpSrc;
  arrowLeftImg.src = arrowLeftSrc;
  arrowRightImg.src = arrowRightSrc;
  arrowDownImg.src = arrowDownSrc;

  const arrows = document.createElement("div");
  const upArrow = document.createElement("div");
  const leftArrow = document.createElement("div");
  const rightArrow = document.createElement("div");
  const downArrow = document.createElement("div");

  upArrow.appendChild(arrowUpImg);
  leftArrow.appendChild(arrowLeftImg);
  rightArrow.appendChild(arrowRightImg);
  downArrow.appendChild(arrowDownImg);

  arrows.classList.add("arrows");
  upArrow.classList.add("arrow-up");
  leftArrow.classList.add("arrow-left");
  rightArrow.classList.add("arrow-right");
  downArrow.classList.add("arrow-down");

  upArrow.addEventListener("click", () => {
    move("player", "up");
  });
  leftArrow.addEventListener("click", () => {
    move("player", "left");
  });
  rightArrow.addEventListener("click", () => {
    move("player", "right");
  });
  downArrow.addEventListener("click", () => {
    move("player", "down");
  });

  arrows.appendChild(upArrow);
  arrows.appendChild(leftArrow);
  arrows.appendChild(rightArrow);
  arrows.appendChild(downArrow);

  body.appendChild(arrows);

  // keyboard listeners
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
      move("player", "up");
    }
    if (e.key === "ArrowDown") {
      move("player", "down");
    }
    if (e.key === "ArrowLeft") {
      move("player", "left");
    }
    if (e.key === "ArrowRight") {
      move("player", "right");
    }
  });

  // start
  const info = document.createElement("div");
  const startBtn = document.createElement("button");
  startBtn.textContent = "Start game";
  startBtn.addEventListener("click", playGame);
  const scoreDiv = document.createElement("div");
  const scoreLabel = document.createElement("span");
  scoreLabel.textContent = "Score:";
  const scoreValue = document.createElement("span");
  scoreValue.textContent = "0";
  scoreValue.classList.add("score-value");
  const gameFailed = document.createElement("div");
  gameFailed.classList.add("game-failed");

  scoreDiv.appendChild(scoreLabel);
  scoreDiv.appendChild(scoreValue);
  info.appendChild(startBtn);
  info.appendChild(scoreDiv);
  info.appendChild(gameFailed);
  body.appendChild(info);
}

export default createDom;
