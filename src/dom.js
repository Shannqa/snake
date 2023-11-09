import createGrid from "./grid.js";
import defaultExport, { move } from "./game.js";
import arrowUpSrc from "./arrow_upward_FILL0_wght400_GRAD0_opsz24.svg";
import arrowLeftSrc from "./arrow_back_FILL0_wght400_GRAD0_opsz24.svg";
import arrowRightSrc from "./arrow_forward_FILL0_wght400_GRAD0_opsz24.svg";
import arrowDownSrc from "./arrow_downward_FILL0_wght400_GRAD0_opsz24.svg";

function createDom() {
  const body = document.querySelector("body");

  createGrid();
  /*
  const arrowUpSrc = "./arrow_upward_FILL0_wght400_GRAD0_opsz24.svg";
  const arrowLeftSrc = "./arrow_back_FILL0_wght400_GRAD0_opsz24.svg";
  const arrowRightSrc = "./arrow_forward_FILL0_wght400_GRAD0_opsz24.svg";
  const arrowDownSrc = "./arrow_downward_FILL0_wght400_GRAD0_opsz24.svg";
*/
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
