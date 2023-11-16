/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _grid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid.js */ "./src/grid.js");
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.js */ "./src/game.js");
/* harmony import */ var _arrow_upward_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arrow_upward_FILL0_wght400_GRAD0_opsz24.svg */ "./src/arrow_upward_FILL0_wght400_GRAD0_opsz24.svg");
/* harmony import */ var _arrow_back_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./arrow_back_FILL0_wght400_GRAD0_opsz24.svg */ "./src/arrow_back_FILL0_wght400_GRAD0_opsz24.svg");
/* harmony import */ var _arrow_forward_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./arrow_forward_FILL0_wght400_GRAD0_opsz24.svg */ "./src/arrow_forward_FILL0_wght400_GRAD0_opsz24.svg");
/* harmony import */ var _arrow_downward_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./arrow_downward_FILL0_wght400_GRAD0_opsz24.svg */ "./src/arrow_downward_FILL0_wght400_GRAD0_opsz24.svg");
/* eslint-disable import/extensions */






function createDom() {
  const body = document.querySelector("body");
  (0,_grid_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

  // const arrowUpSrc = "./arrow_upward_FILL0_wght400_GRAD0_opsz24.svg";
  // const arrowLeftSrc = "./arrow_back_FILL0_wght400_GRAD0_opsz24.svg";
  // const arrowRightSrc = "./arrow_forward_FILL0_wght400_GRAD0_opsz24.svg";
  // const arrowDownSrc = "./arrow_downward_FILL0_wght400_GRAD0_opsz24.svg";

  const arrowUpImg = new Image();
  const arrowLeftImg = new Image();
  const arrowRightImg = new Image();
  const arrowDownImg = new Image();
  arrowUpImg.src = _arrow_upward_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_2__;
  arrowLeftImg.src = _arrow_back_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_3__;
  arrowRightImg.src = _arrow_forward_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_4__;
  arrowDownImg.src = _arrow_downward_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_5__;
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
    (0,_game_js__WEBPACK_IMPORTED_MODULE_1__.move)("up");
  });
  leftArrow.addEventListener("click", () => {
    (0,_game_js__WEBPACK_IMPORTED_MODULE_1__.move)("left");
  });
  rightArrow.addEventListener("click", () => {
    (0,_game_js__WEBPACK_IMPORTED_MODULE_1__.move)("right");
  });
  downArrow.addEventListener("click", () => {
    (0,_game_js__WEBPACK_IMPORTED_MODULE_1__.move)("down");
  });
  arrows.appendChild(upArrow);
  arrows.appendChild(leftArrow);
  arrows.appendChild(rightArrow);
  arrows.appendChild(downArrow);
  body.appendChild(arrows);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDom);

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ playGame),
/* harmony export */   move: () => (/* binding */ move),
/* harmony export */   snakeTimer: () => (/* binding */ snakeTimer)
/* harmony export */ });
/* harmony import */ var _grid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid.js */ "./src/grid.js");
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable import/extensions */
/* eslint-disable eqeqeq */

const snake = [
// each segment in a diff array
["b", "5", "right"],
// head
["b", "4", "right"], ["b", "3", "right"], ["b", "2", "right"], ["b", "1", "right"] // tail
];
// numbers right left
// letters up down
let timer = null;
function setClearInterval() {
  if (timer) {
    clearInterval(timer);
  }
  timer = setInterval(snakeTimer, 500, [snake[0][2]]);
}
function refreshSnake() {
  const snakeClass = document.querySelectorAll(".snake-body");
  snakeClass.forEach(div => {
    div.classList.remove("snake-body");
  });
  snake.forEach(row => {
    const snakeCell = document.querySelector(`#${row[0]}-${row[1]}`);
    snakeCell.classList.add("snake-body");
  });
  checkFood();
  setClearInterval();
}
function snakeTimer(direction) {
  const currentDirection = direction[0];
  console.log(currentDirection);
  if (direction == "up") {
    const letterBefore = snake[0][0];

    // is move valid?
    if (letterBefore == "a") return;

    // move valid
    const letterAfter = getLetter(letterBefore, "previous");
    snake.unshift([letterAfter, `${snake[0][1]}`, `${direction}`]);
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
    if (snake[0][1] >= _grid_js__WEBPACK_IMPORTED_MODULE_0__.gridSize) return;
    const numberBefore = Number(snake[0][1]);
    const numberAfter = numberBefore + 1;

    // move valid
    snake.unshift([snake[0][0], numberAfter, direction]);
    snake.pop();
    refreshSnake();
  } else if (direction == "down") {
    const letterBefore = snake[0][0];

    // is move valid?
    if (letterBefore == `${_grid_js__WEBPACK_IMPORTED_MODULE_0__.alphabet[_grid_js__WEBPACK_IMPORTED_MODULE_0__.gridSize]}`) return;

    // move valid
    const letterAfter = getLetter(letterBefore, "next");
    snake.unshift([letterAfter, `${snake[0][1]}`, `${direction}`]);
    snake.pop();
    refreshSnake();
  }
}
function playGame() {
  spawnFood();
  refreshSnake();
}
function move(direction) {
  // if the head is already moving in the same direction as the user wants, do nothing
  if (direction == snake[0][2]) return;
  if (direction == "up") {
    // block moving opposite way
    if (snake[0][2] == "down") return;
    const letterBefore = snake[0][0];

    // is move valid?
    if (letterBefore == "a") return;

    // move valid
    const letterAfter = getLetter(letterBefore, "previous");
    snake.unshift([letterAfter, `${snake[0][1]}`, `${direction}`]);
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
    if (snake[0][1] >= _grid_js__WEBPACK_IMPORTED_MODULE_0__.gridSize) return;
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
    const letterBefore = snake[0][0];

    // is move valid?
    if (letterBefore == `${_grid_js__WEBPACK_IMPORTED_MODULE_0__.alphabet[_grid_js__WEBPACK_IMPORTED_MODULE_0__.gridSize]}`) return;

    // move valid
    const letterAfter = getLetter(letterBefore, "next");
    snake.unshift([letterAfter, `${snake[0][1]}`, `${direction}`]);
    snake.pop();
    refreshSnake();
  }
}
function getLetter(letter, action) {
  const alphabetArray = _grid_js__WEBPACK_IMPORTED_MODULE_0__.alphabet;
  const nr = alphabetArray.indexOf(letter);
  if (action == "previous") {
    const previousLetter = alphabetArray[nr - 1];
    return previousLetter;
  }
  const nextLetter = alphabetArray[nr + 1];
  return nextLetter;
}
function failGame() {
  // show lose screen
}
function restartGame() {}
function spawnFood() {
  const randomNr = Math.floor(Math.random() * _grid_js__WEBPACK_IMPORTED_MODULE_0__.gridSize + 1);
  const randomLetter = _grid_js__WEBPACK_IMPORTED_MODULE_0__.alphabet[Math.floor(Math.random() * _grid_js__WEBPACK_IMPORTED_MODULE_0__.gridSize + 1)];
  const foodId = `#${randomLetter}-${randomNr}`;
  const foodCell = document.querySelector(foodId);
  /* let snakeBody = [];
  snakeBody.forEach((row) => {
    snakeBody.push(`#${row[0]}-${row[1]}`);
    // console.log(snakeCell);
  }) */

  // eslint-disable-next-line consistent-return
  snake.forEach(row => {
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
    spawnFood();
  }
}

/***/ }),

/***/ "./src/grid.js":
/*!*********************!*\
  !*** ./src/grid.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alphabet: () => (/* binding */ alphabet),
/* harmony export */   createGridArray: () => (/* binding */ createGridArray),
/* harmony export */   "default": () => (/* binding */ createGrid),
/* harmony export */   gridArray: () => (/* binding */ gridArray),
/* harmony export */   gridSize: () => (/* binding */ gridSize)
/* harmony export */ });
const gridSize = 20;
const alphabet = "xabcdefghijklmnopqrstuvwxyz".split("");
let gridArray;
function createGridArray(size) {
  gridArray = [];
  // rows
  for (let r = 0; r < size + 1; r++) {
    gridArray.push([]);
    // columns
    for (let c = 0; c < size + 1; c++) {
      if (c == 0) {
        // column with letters
        gridArray[r].push(`${alphabet[r]}`);
      } else if (r == 0) {
        // row with numbers
        gridArray[r].push(c);
      } else {
        gridArray[r].push(`${alphabet[r]}-${c}`);
      }
    }
  }
  return gridArray;
}
function createGrid() {
  const array = createGridArray(gridSize);
  const body = document.querySelector("body");
  const grid = document.createElement("div");
  array.forEach((row, rowIndex) => {
    row.forEach((cell, index) => {
      const square = document.createElement("div");
      if (rowIndex == 0) {
        square.textContent = cell;
      }
      if (index == 0) {
        square.textContent = cell;
      }
      square.classList.add("square");
      square.setAttribute("id", `${cell}`);
      // square.textContent = array[cell];
      grid.appendChild(square);
    });
  });
  grid.classList.add("grid");
  body.appendChild(grid);
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(21, 18px);
  column-gap: 0px;
  row-gap: 0px;
  justify-items: stretch;
  font-size: 12px;
}

.square {
  width: 18px;
  height: 18px;
  border: 1px black solid;
  background: white;
  margin: 0px;
}

.snake-body {
  background-color: red;
}

.column-1 {
  background-color: blue;
}

.arrows {
  display: grid;
  grid-template-areas: ". up ."
                      "left down right";
  width: 200px;
  
}

.arrows img {
  width: 50px;
}

.arrow-up {
  grid-area: up;
}

.arrow-left {
  grid-area: left;
}

.arrow-right {
  grid-area: right;
}

.arrow-down {
  grid-area: down;
}

.food {
  background-color: blue;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uCAAuC;EACvC,eAAe;EACf,YAAY;EACZ,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb;uCACqC;EACrC,YAAY;;AAEd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,sBAAsB;AACxB","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n  margin: 0px;\r\n  padding: 0px;\r\n}\r\n\r\n.grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(21, 18px);\r\n  column-gap: 0px;\r\n  row-gap: 0px;\r\n  justify-items: stretch;\r\n  font-size: 12px;\r\n}\r\n\r\n.square {\r\n  width: 18px;\r\n  height: 18px;\r\n  border: 1px black solid;\r\n  background: white;\r\n  margin: 0px;\r\n}\r\n\r\n.snake-body {\r\n  background-color: red;\r\n}\r\n\r\n.column-1 {\r\n  background-color: blue;\r\n}\r\n\r\n.arrows {\r\n  display: grid;\r\n  grid-template-areas: \". up .\"\r\n                      \"left down right\";\r\n  width: 200px;\r\n  \r\n}\r\n\r\n.arrows img {\r\n  width: 50px;\r\n}\r\n\r\n.arrow-up {\r\n  grid-area: up;\r\n}\r\n\r\n.arrow-left {\r\n  grid-area: left;\r\n}\r\n\r\n.arrow-right {\r\n  grid-area: right;\r\n}\r\n\r\n.arrow-down {\r\n  grid-area: down;\r\n}\r\n\r\n.food {\r\n  background-color: blue;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/arrow_back_FILL0_wght400_GRAD0_opsz24.svg":
/*!*******************************************************!*\
  !*** ./src/arrow_back_FILL0_wght400_GRAD0_opsz24.svg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0fc4b3fb66f8f2a6cbe2.svg";

/***/ }),

/***/ "./src/arrow_downward_FILL0_wght400_GRAD0_opsz24.svg":
/*!***********************************************************!*\
  !*** ./src/arrow_downward_FILL0_wght400_GRAD0_opsz24.svg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "70e24da97d282d02d70e.svg";

/***/ }),

/***/ "./src/arrow_forward_FILL0_wght400_GRAD0_opsz24.svg":
/*!**********************************************************!*\
  !*** ./src/arrow_forward_FILL0_wght400_GRAD0_opsz24.svg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b6f67547223a7085487d.svg";

/***/ }),

/***/ "./src/arrow_upward_FILL0_wght400_GRAD0_opsz24.svg":
/*!*********************************************************!*\
  !*** ./src/arrow_upward_FILL0_wght400_GRAD0_opsz24.svg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5cbeaa92a2fe96fa1afc.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.js */ "./src/game.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* eslint-disable import/extensions */
// eslint-disable-next-line no-unused-vars



(0,_dom_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_game_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUM4QjtBQUVHO0FBQ0E7QUFFakM1RSxtREFBUyxDQUFDLENBQUM7QUFFWGlELG9EQUFRLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24vLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24vLi9zcmMvZ3JpZC5qcyIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xyXG5pbXBvcnQgY3JlYXRlR3JpZCBmcm9tIFwiLi9ncmlkLmpzXCI7XHJcbmltcG9ydCBkZWZhdWx0RXhwb3J0LCB7IG1vdmUgfSBmcm9tIFwiLi9nYW1lLmpzXCI7XHJcblxyXG5pbXBvcnQgYXJyb3dVcFNyYyBmcm9tIFwiLi9hcnJvd191cHdhcmRfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6MjQuc3ZnXCI7XHJcbmltcG9ydCBhcnJvd0xlZnRTcmMgZnJvbSBcIi4vYXJyb3dfYmFja19GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3oyNC5zdmdcIjtcclxuaW1wb3J0IGFycm93UmlnaHRTcmMgZnJvbSBcIi4vYXJyb3dfZm9yd2FyZF9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3oyNC5zdmdcIjtcclxuaW1wb3J0IGFycm93RG93blNyYyBmcm9tIFwiLi9hcnJvd19kb3dud2FyZF9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3oyNC5zdmdcIjtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZURvbSgpIHtcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcblxyXG4gIGNyZWF0ZUdyaWQoKTtcclxuXHJcbiAgLy8gY29uc3QgYXJyb3dVcFNyYyA9IFwiLi9hcnJvd191cHdhcmRfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6MjQuc3ZnXCI7XHJcbiAgLy8gY29uc3QgYXJyb3dMZWZ0U3JjID0gXCIuL2Fycm93X2JhY2tfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6MjQuc3ZnXCI7XHJcbiAgLy8gY29uc3QgYXJyb3dSaWdodFNyYyA9IFwiLi9hcnJvd19mb3J3YXJkX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejI0LnN2Z1wiO1xyXG4gIC8vIGNvbnN0IGFycm93RG93blNyYyA9IFwiLi9hcnJvd19kb3dud2FyZF9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3oyNC5zdmdcIjtcclxuXHJcbiAgY29uc3QgYXJyb3dVcEltZyA9IG5ldyBJbWFnZSgpO1xyXG4gIGNvbnN0IGFycm93TGVmdEltZyA9IG5ldyBJbWFnZSgpO1xyXG4gIGNvbnN0IGFycm93UmlnaHRJbWcgPSBuZXcgSW1hZ2UoKTtcclxuICBjb25zdCBhcnJvd0Rvd25JbWcgPSBuZXcgSW1hZ2UoKTtcclxuICBhcnJvd1VwSW1nLnNyYyA9IGFycm93VXBTcmM7XHJcbiAgYXJyb3dMZWZ0SW1nLnNyYyA9IGFycm93TGVmdFNyYztcclxuICBhcnJvd1JpZ2h0SW1nLnNyYyA9IGFycm93UmlnaHRTcmM7XHJcbiAgYXJyb3dEb3duSW1nLnNyYyA9IGFycm93RG93blNyYztcclxuXHJcbiAgY29uc3QgYXJyb3dzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCB1cEFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBsZWZ0QXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHJpZ2h0QXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGRvd25BcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gIHVwQXJyb3cuYXBwZW5kQ2hpbGQoYXJyb3dVcEltZyk7XHJcbiAgbGVmdEFycm93LmFwcGVuZENoaWxkKGFycm93TGVmdEltZyk7XHJcbiAgcmlnaHRBcnJvdy5hcHBlbmRDaGlsZChhcnJvd1JpZ2h0SW1nKTtcclxuICBkb3duQXJyb3cuYXBwZW5kQ2hpbGQoYXJyb3dEb3duSW1nKTtcclxuXHJcbiAgYXJyb3dzLmNsYXNzTGlzdC5hZGQoXCJhcnJvd3NcIik7XHJcbiAgdXBBcnJvdy5jbGFzc0xpc3QuYWRkKFwiYXJyb3ctdXBcIik7XHJcbiAgbGVmdEFycm93LmNsYXNzTGlzdC5hZGQoXCJhcnJvdy1sZWZ0XCIpO1xyXG4gIHJpZ2h0QXJyb3cuY2xhc3NMaXN0LmFkZChcImFycm93LXJpZ2h0XCIpO1xyXG4gIGRvd25BcnJvdy5jbGFzc0xpc3QuYWRkKFwiYXJyb3ctZG93blwiKTtcclxuXHJcbiAgdXBBcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgbW92ZShcInVwXCIpO1xyXG4gIH0pO1xyXG4gIGxlZnRBcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgbW92ZShcImxlZnRcIik7XHJcbiAgfSk7XHJcbiAgcmlnaHRBcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgbW92ZShcInJpZ2h0XCIpO1xyXG4gIH0pO1xyXG4gIGRvd25BcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgbW92ZShcImRvd25cIik7XHJcbiAgfSk7XHJcblxyXG4gIGFycm93cy5hcHBlbmRDaGlsZCh1cEFycm93KTtcclxuICBhcnJvd3MuYXBwZW5kQ2hpbGQobGVmdEFycm93KTtcclxuICBhcnJvd3MuYXBwZW5kQ2hpbGQocmlnaHRBcnJvdyk7XHJcbiAgYXJyb3dzLmFwcGVuZENoaWxkKGRvd25BcnJvdyk7XHJcblxyXG4gIGJvZHkuYXBwZW5kQ2hpbGQoYXJyb3dzKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRG9tO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBlcWVxZXEgKi9cclxuaW1wb3J0IHsgYWxwaGFiZXQsIGdyaWRTaXplIH0gZnJvbSBcIi4vZ3JpZC5qc1wiO1xyXG5cclxuY29uc3Qgc25ha2UgPSBbXHJcbiAgLy8gZWFjaCBzZWdtZW50IGluIGEgZGlmZiBhcnJheVxyXG4gIFtcImJcIiwgXCI1XCIsIFwicmlnaHRcIl0sIC8vIGhlYWRcclxuICBbXCJiXCIsIFwiNFwiLCBcInJpZ2h0XCJdLFxyXG4gIFtcImJcIiwgXCIzXCIsIFwicmlnaHRcIl0sXHJcbiAgW1wiYlwiLCBcIjJcIiwgXCJyaWdodFwiXSxcclxuICBbXCJiXCIsIFwiMVwiLCBcInJpZ2h0XCJdLCAvLyB0YWlsXHJcbl07XHJcbi8vIG51bWJlcnMgcmlnaHQgbGVmdFxyXG4vLyBsZXR0ZXJzIHVwIGRvd25cclxubGV0IHRpbWVyID0gbnVsbDtcclxuXHJcbmZ1bmN0aW9uIHNldENsZWFySW50ZXJ2YWwoKSB7XHJcbiAgaWYgKHRpbWVyKSB7XHJcbiAgICBjbGVhckludGVydmFsKHRpbWVyKTtcclxuICB9XHJcbiAgdGltZXIgPSBzZXRJbnRlcnZhbChzbmFrZVRpbWVyLCA1MDAsIFtzbmFrZVswXVsyXV0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZWZyZXNoU25ha2UoKSB7XHJcbiAgY29uc3Qgc25ha2VDbGFzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc25ha2UtYm9keVwiKTtcclxuICBzbmFrZUNsYXNzLmZvckVhY2goKGRpdikgPT4ge1xyXG4gICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJzbmFrZS1ib2R5XCIpO1xyXG4gIH0pO1xyXG5cclxuICBzbmFrZS5mb3JFYWNoKChyb3cpID0+IHtcclxuICAgIGNvbnN0IHNuYWtlQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3Jvd1swXX0tJHtyb3dbMV19YCk7XHJcbiAgICBzbmFrZUNlbGwuY2xhc3NMaXN0LmFkZChcInNuYWtlLWJvZHlcIik7XHJcbiAgfSk7XHJcbiAgY2hlY2tGb29kKCk7XHJcbiAgc2V0Q2xlYXJJbnRlcnZhbCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc25ha2VUaW1lcihkaXJlY3Rpb24pIHtcclxuICBjb25zdCBjdXJyZW50RGlyZWN0aW9uID0gZGlyZWN0aW9uWzBdO1xyXG4gIGNvbnNvbGUubG9nKGN1cnJlbnREaXJlY3Rpb24pO1xyXG5cclxuICBpZiAoZGlyZWN0aW9uID09IFwidXBcIikge1xyXG4gICAgY29uc3QgbGV0dGVyQmVmb3JlID0gc25ha2VbMF1bMF07XHJcblxyXG4gICAgLy8gaXMgbW92ZSB2YWxpZD9cclxuICAgIGlmIChsZXR0ZXJCZWZvcmUgPT0gXCJhXCIpIHJldHVybjtcclxuXHJcbiAgICAvLyBtb3ZlIHZhbGlkXHJcbiAgICBjb25zdCBsZXR0ZXJBZnRlciA9IGdldExldHRlcihsZXR0ZXJCZWZvcmUsIFwicHJldmlvdXNcIik7XHJcblxyXG4gICAgc25ha2UudW5zaGlmdChbbGV0dGVyQWZ0ZXIsIGAke3NuYWtlWzBdWzFdfWAsIGAke2RpcmVjdGlvbn1gXSk7XHJcbiAgICBzbmFrZS5wb3AoKTtcclxuICAgIHJlZnJlc2hTbmFrZSgpO1xyXG4gIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09IFwibGVmdFwiKSB7XHJcbiAgICAvLyBpcyBtb3ZlIHZhbGlkP1xyXG4gICAgaWYgKHNuYWtlWzBdWzFdIDw9IDEpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBudW1iZXJCZWZvcmUgPSBOdW1iZXIoc25ha2VbMF1bMV0pO1xyXG4gICAgY29uc3QgbnVtYmVyQWZ0ZXIgPSBudW1iZXJCZWZvcmUgLSAxO1xyXG5cclxuICAgIC8vIG1vdmUgdmFsaWRcclxuICAgIHNuYWtlLnVuc2hpZnQoW3NuYWtlWzBdWzBdLCBudW1iZXJBZnRlciwgZGlyZWN0aW9uXSk7XHJcbiAgICBzbmFrZS5wb3AoKTtcclxuICAgIHJlZnJlc2hTbmFrZSgpO1xyXG4gIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09IFwicmlnaHRcIikge1xyXG4gICAgLy8gaXMgbW92ZSB2YWxpZD9cclxuICAgIGlmIChzbmFrZVswXVsxXSA+PSBncmlkU2l6ZSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IG51bWJlckJlZm9yZSA9IE51bWJlcihzbmFrZVswXVsxXSk7XHJcbiAgICBjb25zdCBudW1iZXJBZnRlciA9IG51bWJlckJlZm9yZSArIDE7XHJcblxyXG4gICAgLy8gbW92ZSB2YWxpZFxyXG4gICAgc25ha2UudW5zaGlmdChbc25ha2VbMF1bMF0sIG51bWJlckFmdGVyLCBkaXJlY3Rpb25dKTtcclxuICAgIHNuYWtlLnBvcCgpO1xyXG4gICAgcmVmcmVzaFNuYWtlKCk7XHJcbiAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gXCJkb3duXCIpIHtcclxuICAgIGNvbnN0IGxldHRlckJlZm9yZSA9IHNuYWtlWzBdWzBdO1xyXG5cclxuICAgIC8vIGlzIG1vdmUgdmFsaWQ/XHJcbiAgICBpZiAobGV0dGVyQmVmb3JlID09IGAke2FscGhhYmV0W2dyaWRTaXplXX1gKSByZXR1cm47XHJcblxyXG4gICAgLy8gbW92ZSB2YWxpZFxyXG4gICAgY29uc3QgbGV0dGVyQWZ0ZXIgPSBnZXRMZXR0ZXIobGV0dGVyQmVmb3JlLCBcIm5leHRcIik7XHJcblxyXG4gICAgc25ha2UudW5zaGlmdChbbGV0dGVyQWZ0ZXIsIGAke3NuYWtlWzBdWzFdfWAsIGAke2RpcmVjdGlvbn1gXSk7XHJcbiAgICBzbmFrZS5wb3AoKTtcclxuICAgIHJlZnJlc2hTbmFrZSgpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGxheUdhbWUoKSB7XHJcbiAgc3Bhd25Gb29kKCk7XHJcbiAgcmVmcmVzaFNuYWtlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtb3ZlKGRpcmVjdGlvbikge1xyXG4gIC8vIGlmIHRoZSBoZWFkIGlzIGFscmVhZHkgbW92aW5nIGluIHRoZSBzYW1lIGRpcmVjdGlvbiBhcyB0aGUgdXNlciB3YW50cywgZG8gbm90aGluZ1xyXG4gIGlmIChkaXJlY3Rpb24gPT0gc25ha2VbMF1bMl0pIHJldHVybjtcclxuXHJcbiAgaWYgKGRpcmVjdGlvbiA9PSBcInVwXCIpIHtcclxuICAgIC8vIGJsb2NrIG1vdmluZyBvcHBvc2l0ZSB3YXlcclxuICAgIGlmIChzbmFrZVswXVsyXSA9PSBcImRvd25cIikgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGxldHRlckJlZm9yZSA9IHNuYWtlWzBdWzBdO1xyXG5cclxuICAgIC8vIGlzIG1vdmUgdmFsaWQ/XHJcbiAgICBpZiAobGV0dGVyQmVmb3JlID09IFwiYVwiKSByZXR1cm47XHJcblxyXG4gICAgLy8gbW92ZSB2YWxpZFxyXG4gICAgY29uc3QgbGV0dGVyQWZ0ZXIgPSBnZXRMZXR0ZXIobGV0dGVyQmVmb3JlLCBcInByZXZpb3VzXCIpO1xyXG5cclxuICAgIHNuYWtlLnVuc2hpZnQoW2xldHRlckFmdGVyLCBgJHtzbmFrZVswXVsxXX1gLCBgJHtkaXJlY3Rpb259YF0pO1xyXG4gICAgc25ha2UucG9wKCk7XHJcblxyXG4gICAgcmVmcmVzaFNuYWtlKCk7XHJcbiAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gXCJsZWZ0XCIpIHtcclxuICAgIC8vIGJsb2NrIG1vdmluZyBvcHBvc2l0ZSB3YXlcclxuICAgIGlmIChzbmFrZVswXVsyXSA9PSBcInJpZ2h0XCIpIHJldHVybjtcclxuXHJcbiAgICAvLyBpcyBtb3ZlIHZhbGlkP1xyXG4gICAgaWYgKHNuYWtlWzBdWzFdIDw9IDEpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBudW1iZXJCZWZvcmUgPSBOdW1iZXIoc25ha2VbMF1bMV0pO1xyXG4gICAgY29uc3QgbnVtYmVyQWZ0ZXIgPSBudW1iZXJCZWZvcmUgLSAxO1xyXG5cclxuICAgIC8vIG1vdmUgdmFsaWRcclxuICAgIHNuYWtlLnVuc2hpZnQoW3NuYWtlWzBdWzBdLCBudW1iZXJBZnRlciwgZGlyZWN0aW9uXSk7XHJcbiAgICBzbmFrZS5wb3AoKTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhzbmFrZSk7XHJcblxyXG4gICAgcmVmcmVzaFNuYWtlKCk7XHJcbiAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gXCJyaWdodFwiKSB7XHJcbiAgICAvLyBibG9jayBtb3Zpbmcgb3Bwb3NpdGUgd2F5XHJcbiAgICBpZiAoc25ha2VbMF1bMl0gPT0gXCJsZWZ0XCIpIHJldHVybjtcclxuXHJcbiAgICAvLyBpcyBtb3ZlIHZhbGlkP1xyXG4gICAgaWYgKHNuYWtlWzBdWzFdID49IGdyaWRTaXplKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgbnVtYmVyQmVmb3JlID0gTnVtYmVyKHNuYWtlWzBdWzFdKTtcclxuICAgIGNvbnN0IG51bWJlckFmdGVyID0gbnVtYmVyQmVmb3JlICsgMTtcclxuXHJcbiAgICAvLyBtb3ZlIHZhbGlkXHJcblxyXG4gICAgc25ha2UudW5zaGlmdChbc25ha2VbMF1bMF0sIG51bWJlckFmdGVyLCBkaXJlY3Rpb25dKTtcclxuICAgIHNuYWtlLnBvcCgpO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKHNuYWtlKTtcclxuXHJcbiAgICByZWZyZXNoU25ha2UoKTtcclxuICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PSBcImRvd25cIikge1xyXG4gICAgLy8gYmxvY2sgbW92aW5nIG9wcG9zaXRlIHdheVxyXG4gICAgaWYgKHNuYWtlWzBdWzJdID09IFwidXBcIikgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGxldHRlckJlZm9yZSA9IHNuYWtlWzBdWzBdO1xyXG5cclxuICAgIC8vIGlzIG1vdmUgdmFsaWQ/XHJcbiAgICBpZiAobGV0dGVyQmVmb3JlID09IGAke2FscGhhYmV0W2dyaWRTaXplXX1gKSByZXR1cm47XHJcblxyXG4gICAgLy8gbW92ZSB2YWxpZFxyXG4gICAgY29uc3QgbGV0dGVyQWZ0ZXIgPSBnZXRMZXR0ZXIobGV0dGVyQmVmb3JlLCBcIm5leHRcIik7XHJcblxyXG4gICAgc25ha2UudW5zaGlmdChbbGV0dGVyQWZ0ZXIsIGAke3NuYWtlWzBdWzFdfWAsIGAke2RpcmVjdGlvbn1gXSk7XHJcbiAgICBzbmFrZS5wb3AoKTtcclxuXHJcbiAgICByZWZyZXNoU25ha2UoKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldExldHRlcihsZXR0ZXIsIGFjdGlvbikge1xyXG4gIGNvbnN0IGFscGhhYmV0QXJyYXkgPSBhbHBoYWJldDtcclxuICBjb25zdCBuciA9IGFscGhhYmV0QXJyYXkuaW5kZXhPZihsZXR0ZXIpO1xyXG4gIGlmIChhY3Rpb24gPT0gXCJwcmV2aW91c1wiKSB7XHJcbiAgICBjb25zdCBwcmV2aW91c0xldHRlciA9IGFscGhhYmV0QXJyYXlbbnIgLSAxXTtcclxuICAgIHJldHVybiBwcmV2aW91c0xldHRlcjtcclxuICB9XHJcbiAgY29uc3QgbmV4dExldHRlciA9IGFscGhhYmV0QXJyYXlbbnIgKyAxXTtcclxuICByZXR1cm4gbmV4dExldHRlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gZmFpbEdhbWUoKSB7XHJcbiAgLy8gc2hvdyBsb3NlIHNjcmVlblxyXG59XHJcblxyXG5mdW5jdGlvbiByZXN0YXJ0R2FtZSgpIHt9XHJcblxyXG5mdW5jdGlvbiBzcGF3bkZvb2QoKSB7XHJcbiAgY29uc3QgcmFuZG9tTnIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBncmlkU2l6ZSArIDEpO1xyXG4gIGNvbnN0IHJhbmRvbUxldHRlciA9IGFscGhhYmV0W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGdyaWRTaXplICsgMSldO1xyXG4gIGNvbnN0IGZvb2RJZCA9IGAjJHtyYW5kb21MZXR0ZXJ9LSR7cmFuZG9tTnJ9YDtcclxuICBjb25zdCBmb29kQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZm9vZElkKTtcclxuICAvKiBsZXQgc25ha2VCb2R5ID0gW107XHJcbiAgc25ha2VCb2R5LmZvckVhY2goKHJvdykgPT4ge1xyXG4gICAgc25ha2VCb2R5LnB1c2goYCMke3Jvd1swXX0tJHtyb3dbMV19YCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhzbmFrZUNlbGwpO1xyXG4gIH0pICovXHJcblxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxyXG4gIHNuYWtlLmZvckVhY2goKHJvdykgPT4ge1xyXG4gICAgaWYgKGAjJHtyb3dbMF19LSR7cm93WzFdfWAgPT0gZm9vZElkKSB7XHJcbiAgICAgIHJldHVybiBzcGF3bkZvb2QoKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgZm9vZENlbGwuY2xhc3NMaXN0LmFkZChcImZvb2RcIik7XHJcbiAgY29uc29sZS5sb2coZm9vZENlbGwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0Zvb2QoKSB7XHJcbiAgY29uc3QgZm9vZENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvb2RcIik7XHJcbiAgbGV0IGZvb2RJZDtcclxuXHJcbiAgaWYgKGAjJHtzbmFrZVswXX0tJHtzbmFrZVsxXX1gID09IGZvb2RDZWxsLmlkKSB7XHJcbiAgICBmb29kQ2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiZm9vZFwiKTtcclxuICAgIHNwYXduRm9vZCgpO1xyXG4gIH1cclxufVxyXG4iLCJjb25zdCBncmlkU2l6ZSA9IDIwO1xyXG5jb25zdCBhbHBoYWJldCA9IFwieGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6XCIuc3BsaXQoXCJcIik7XHJcbmxldCBncmlkQXJyYXk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlR3JpZEFycmF5KHNpemUpIHtcclxuICBncmlkQXJyYXkgPSBbXTtcclxuICAvLyByb3dzXHJcbiAgZm9yIChsZXQgciA9IDA7IHIgPCBzaXplICsgMTsgcisrKSB7XHJcbiAgICBncmlkQXJyYXkucHVzaChbXSk7XHJcbiAgICAvLyBjb2x1bW5zXHJcbiAgICBmb3IgKGxldCBjID0gMDsgYyA8IHNpemUgKyAxOyBjKyspIHtcclxuICAgICAgaWYgKGMgPT0gMCkge1xyXG4gICAgICAgIC8vIGNvbHVtbiB3aXRoIGxldHRlcnNcclxuICAgICAgICBncmlkQXJyYXlbcl0ucHVzaChgJHthbHBoYWJldFtyXX1gKTtcclxuICAgICAgfSBlbHNlIGlmIChyID09IDApIHtcclxuICAgICAgICAvLyByb3cgd2l0aCBudW1iZXJzXHJcbiAgICAgICAgZ3JpZEFycmF5W3JdLnB1c2goYyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZ3JpZEFycmF5W3JdLnB1c2goYCR7YWxwaGFiZXRbcl19LSR7Y31gKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZ3JpZEFycmF5O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVHcmlkKCkge1xyXG4gIGNvbnN0IGFycmF5ID0gY3JlYXRlR3JpZEFycmF5KGdyaWRTaXplKTtcclxuXHJcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICBhcnJheS5mb3JFYWNoKChyb3csIHJvd0luZGV4KSA9PiB7XHJcbiAgICByb3cuZm9yRWFjaCgoY2VsbCwgaW5kZXgpID0+IHtcclxuICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICAgIGlmIChyb3dJbmRleCA9PSAwKSB7XHJcbiAgICAgICAgc3F1YXJlLnRleHRDb250ZW50ID0gY2VsbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGluZGV4ID09IDApIHtcclxuICAgICAgICBzcXVhcmUudGV4dENvbnRlbnQgPSBjZWxsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInNxdWFyZVwiKTtcclxuICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke2NlbGx9YCk7XHJcbiAgICAgIC8vIHNxdWFyZS50ZXh0Q29udGVudCA9IGFycmF5W2NlbGxdO1xyXG4gICAgICBncmlkLmFwcGVuZENoaWxkKHNxdWFyZSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwiZ3JpZFwiKTtcclxuICBib2R5LmFwcGVuZENoaWxkKGdyaWQpO1xyXG59XHJcblxyXG5leHBvcnQgeyBhbHBoYWJldCwgZ3JpZFNpemUsIGdyaWRBcnJheSB9O1xyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIxLCAxOHB4KTtcclxuICBjb2x1bW4tZ2FwOiAwcHg7XHJcbiAgcm93LWdhcDogMHB4O1xyXG4gIGp1c3RpZnktaXRlbXM6IHN0cmV0Y2g7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uc3F1YXJlIHtcclxuICB3aWR0aDogMThweDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5zbmFrZS1ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5jb2x1bW4tMSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxufVxyXG5cclxuLmFycm93cyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcIi4gdXAgLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImxlZnQgZG93biByaWdodFwiO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBcclxufVxyXG5cclxuLmFycm93cyBpbWcge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4uYXJyb3ctdXAge1xyXG4gIGdyaWQtYXJlYTogdXA7XHJcbn1cclxuXHJcbi5hcnJvdy1sZWZ0IHtcclxuICBncmlkLWFyZWE6IGxlZnQ7XHJcbn1cclxuXHJcbi5hcnJvdy1yaWdodCB7XHJcbiAgZ3JpZC1hcmVhOiByaWdodDtcclxufVxyXG5cclxuLmFycm93LWRvd24ge1xyXG4gIGdyaWQtYXJlYTogZG93bjtcclxufVxyXG5cclxuLmZvb2Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsZUFBZTtFQUNmLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2I7dUNBQ3FDO0VBQ3JDLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDBweDtcXHJcXG4gIHBhZGRpbmc6IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIxLCAxOHB4KTtcXHJcXG4gIGNvbHVtbi1nYXA6IDBweDtcXHJcXG4gIHJvdy1nYXA6IDBweDtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IHN0cmV0Y2g7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5zcXVhcmUge1xcclxcbiAgd2lkdGg6IDE4cHg7XFxyXFxuICBoZWlnaHQ6IDE4cHg7XFxyXFxuICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcXHJcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgbWFyZ2luOiAwcHg7XFxyXFxufVxcclxcblxcclxcbi5zbmFrZS1ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbHVtbi0xIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxyXFxufVxcclxcblxcclxcbi5hcnJvd3Mge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCIuIHVwIC5cXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgIFxcXCJsZWZ0IGRvd24gcmlnaHRcXFwiO1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbi5hcnJvd3MgaW1nIHtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXJyb3ctdXAge1xcclxcbiAgZ3JpZC1hcmVhOiB1cDtcXHJcXG59XFxyXFxuXFxyXFxuLmFycm93LWxlZnQge1xcclxcbiAgZ3JpZC1hcmVhOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uYXJyb3ctcmlnaHQge1xcclxcbiAgZ3JpZC1hcmVhOiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLmFycm93LWRvd24ge1xcclxcbiAgZ3JpZC1hcmVhOiBkb3duO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcclxuaW1wb3J0IGNzcyBmcm9tIFwiLi9zdHlsZS5jc3NcIjtcclxuXHJcbmltcG9ydCBwbGF5R2FtZSBmcm9tIFwiLi9nYW1lLmpzXCI7XHJcbmltcG9ydCBjcmVhdGVEb20gZnJvbSBcIi4vZG9tLmpzXCI7XHJcblxyXG5jcmVhdGVEb20oKTtcclxuXHJcbnBsYXlHYW1lKCk7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVHcmlkIiwiZGVmYXVsdEV4cG9ydCIsIm1vdmUiLCJhcnJvd1VwU3JjIiwiYXJyb3dMZWZ0U3JjIiwiYXJyb3dSaWdodFNyYyIsImFycm93RG93blNyYyIsImNyZWF0ZURvbSIsImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhcnJvd1VwSW1nIiwiSW1hZ2UiLCJhcnJvd0xlZnRJbWciLCJhcnJvd1JpZ2h0SW1nIiwiYXJyb3dEb3duSW1nIiwic3JjIiwiYXJyb3dzIiwiY3JlYXRlRWxlbWVudCIsInVwQXJyb3ciLCJsZWZ0QXJyb3ciLCJyaWdodEFycm93IiwiZG93bkFycm93IiwiYXBwZW5kQ2hpbGQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwiYWxwaGFiZXQiLCJncmlkU2l6ZSIsInNuYWtlIiwidGltZXIiLCJzZXRDbGVhckludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwic25ha2VUaW1lciIsInJlZnJlc2hTbmFrZSIsInNuYWtlQ2xhc3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImRpdiIsInJlbW92ZSIsInJvdyIsInNuYWtlQ2VsbCIsImNoZWNrRm9vZCIsImRpcmVjdGlvbiIsImN1cnJlbnREaXJlY3Rpb24iLCJjb25zb2xlIiwibG9nIiwibGV0dGVyQmVmb3JlIiwibGV0dGVyQWZ0ZXIiLCJnZXRMZXR0ZXIiLCJ1bnNoaWZ0IiwicG9wIiwibnVtYmVyQmVmb3JlIiwiTnVtYmVyIiwibnVtYmVyQWZ0ZXIiLCJwbGF5R2FtZSIsInNwYXduRm9vZCIsImxldHRlciIsImFjdGlvbiIsImFscGhhYmV0QXJyYXkiLCJuciIsImluZGV4T2YiLCJwcmV2aW91c0xldHRlciIsIm5leHRMZXR0ZXIiLCJmYWlsR2FtZSIsInJlc3RhcnRHYW1lIiwicmFuZG9tTnIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21MZXR0ZXIiLCJmb29kSWQiLCJmb29kQ2VsbCIsImlkIiwic3BsaXQiLCJncmlkQXJyYXkiLCJjcmVhdGVHcmlkQXJyYXkiLCJzaXplIiwiciIsInB1c2giLCJjIiwiYXJyYXkiLCJncmlkIiwicm93SW5kZXgiLCJjZWxsIiwiaW5kZXgiLCJzcXVhcmUiLCJ0ZXh0Q29udGVudCIsInNldEF0dHJpYnV0ZSIsImNzcyJdLCJzb3VyY2VSb290IjoiIn0=