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






function createDom() {
  const body = document.querySelector("body");
  (0,_grid_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
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

console.log(_grid_js__WEBPACK_IMPORTED_MODULE_0__.alphabet);
let snake = [
// each segment in a diff array
["b", "5", "right"],
//head
["b", "4", "right"], ["b", "3", "right"], ["b", "2", "right"], ["b", "1", "right"] // tail
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
  let snakeClass = document.querySelectorAll(".snake-body");
  snakeClass.forEach(div => {
    div.classList.remove("snake-body");
  });
  snake.forEach(row => {
    const snakeCell = document.querySelector(`#${row[0]}-${row[1]}`);
    snakeCell.classList.add("snake-body");
    // console.log(snakeCell);
  });

  setClearInterval();
}
function snakeTimer(direction) {
  let currentDirection = direction[0];
  console.log(currentDirection);
  if (direction == "up") {
    let letterBefore = snake[0][0];

    // is move valid?
    if (letterBefore == "a") return;

    // move valid
    let letterAfter = getLetter(letterBefore, "previous");
    snake.unshift([letterAfter, `${snake[0][1]}`, `${direction}`]);
    snake.pop();
    refreshSnake();
  } else if (direction == "left") {
    // is move valid?
    if (snake[0][1] <= 1) return;
    let numberBefore = Number(snake[0][1]);
    let numberAfter = numberBefore - 1;

    // move valid
    snake.unshift([snake[0][0], numberAfter, direction]);
    snake.pop();
    refreshSnake();
  } else if (direction == "right") {
    // is move valid?
    if (snake[0][1] >= _grid_js__WEBPACK_IMPORTED_MODULE_0__.gridSize) return;
    let numberBefore = Number(snake[0][1]);
    let numberAfter = numberBefore + 1;

    // move valid
    snake.unshift([snake[0][0], numberAfter, direction]);
    snake.pop();
    refreshSnake();
  } else if (direction == "down") {
    let letterBefore = snake[0][0];

    // is move valid?
    if (letterBefore == `${_grid_js__WEBPACK_IMPORTED_MODULE_0__.alphabet[_grid_js__WEBPACK_IMPORTED_MODULE_0__.gridSize]}`) return;

    // move valid
    let letterAfter = getLetter(letterBefore, "next");
    snake.unshift([letterAfter, `${snake[0][1]}`, `${direction}`]);
    snake.pop();
    refreshSnake();
  }
}
function playGame() {
  refreshSnake();
}
function move(direction) {
  // if the head is already moving in the same direction as the user wants, do nothing
  if (direction == snake[0][2]) return;
  if (direction == "up") {
    // block moving opposite way
    if (snake[0][2] == "down") return;
    let letterBefore = snake[0][0];

    // is move valid?
    if (letterBefore == "a") return;

    // move valid
    let letterAfter = getLetter(letterBefore, "previous");
    snake.unshift([letterAfter, `${snake[0][1]}`, `${direction}`]);
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
    snake.unshift([snake[0][0], numberAfter, direction]);
    snake.pop();

    // console.log(snake);

    refreshSnake();
  } else if (direction == "right") {
    // block moving opposite way
    if (snake[0][2] == "left") return;

    // is move valid?
    if (snake[0][1] >= _grid_js__WEBPACK_IMPORTED_MODULE_0__.gridSize) return;
    let numberBefore = Number(snake[0][1]);
    let numberAfter = numberBefore + 1;

    // move valid

    snake.unshift([snake[0][0], numberAfter, direction]);
    snake.pop();

    // console.log(snake);

    refreshSnake();
  } else if (direction == "down") {
    // block moving opposite way
    if (snake[0][2] == "up") return;
    let letterBefore = snake[0][0];

    // is move valid?
    if (letterBefore == `${_grid_js__WEBPACK_IMPORTED_MODULE_0__.alphabet[_grid_js__WEBPACK_IMPORTED_MODULE_0__.gridSize]}`) return;

    // move valid
    let letterAfter = getLetter(letterBefore, "next");
    snake.unshift([letterAfter, `${snake[0][1]}`, `${direction}`]);
    snake.pop();
    refreshSnake();
  }
}
function getLetter(letter, action) {
  const alphabetArray = _grid_js__WEBPACK_IMPORTED_MODULE_0__.alphabet;
  let nr = alphabetArray.indexOf(letter);
  if (action == "previous") {
    let previousLetter = alphabetArray[nr - 1];
    return previousLetter;
  }
  let nextLetter = alphabetArray[nr + 1];
  return nextLetter;
}
function failGame() {
  // show lose screen
}
function restartGame() {}

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
/* harmony export */   gridSize: () => (/* binding */ gridSize)
/* harmony export */ });
const gridSize = 20;
const alphabet = "xabcdefghijklmnopqrstuvwxyz".split("");
function createGridArray(size) {
  const gridArray = [];
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
  console.log(array);
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uCAAuC;EACvC,eAAe;EACf,YAAY;EACZ,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb;uCACqC;EACrC,YAAY;;AAEd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n  margin: 0px;\r\n  padding: 0px;\r\n}\r\n\r\n.grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(21, 18px);\r\n  column-gap: 0px;\r\n  row-gap: 0px;\r\n  justify-items: stretch;\r\n  font-size: 12px;\r\n}\r\n\r\n.square {\r\n  width: 18px;\r\n  height: 18px;\r\n  border: 1px black solid;\r\n  background: white;\r\n  margin: 0px;\r\n}\r\n\r\n.snake-body {\r\n  background-color: red;\r\n}\r\n\r\n.column-1 {\r\n  background-color: blue;\r\n}\r\n\r\n.arrows {\r\n  display: grid;\r\n  grid-template-areas: \". up .\"\r\n                      \"left down right\";\r\n  width: 200px;\r\n  \r\n}\r\n\r\n.arrows img {\r\n  width: 50px;\r\n}\r\n\r\n.arrow-up {\r\n  grid-area: up;\r\n}\r\n\r\n.arrow-left {\r\n  grid-area: left;\r\n}\r\n\r\n.arrow-right {\r\n  grid-area: right;\r\n}\r\n\r\n.arrow-down {\r\n  grid-area: down;\r\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _grid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid.js */ "./src/grid.js");
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.js */ "./src/game.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");




(0,_dom_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_game_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBOEI7QUFFSztBQUNGO0FBQ0E7QUFFakNsRSxtREFBUyxDQUFDLENBQUM7QUFFWGdELG9EQUFRLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24vLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24vLi9zcmMvZ3JpZC5qcyIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZm9ybS12YWxpZGF0aW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9mb3JtLXZhbGlkYXRpb24vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlR3JpZCBmcm9tIFwiLi9ncmlkLmpzXCI7XHJcbmltcG9ydCBkZWZhdWx0RXhwb3J0LCB7IG1vdmUgfSBmcm9tIFwiLi9nYW1lLmpzXCI7XHJcbmltcG9ydCBhcnJvd1VwU3JjIGZyb20gXCIuL2Fycm93X3Vwd2FyZF9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3oyNC5zdmdcIjtcclxuaW1wb3J0IGFycm93TGVmdFNyYyBmcm9tIFwiLi9hcnJvd19iYWNrX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejI0LnN2Z1wiO1xyXG5pbXBvcnQgYXJyb3dSaWdodFNyYyBmcm9tIFwiLi9hcnJvd19mb3J3YXJkX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejI0LnN2Z1wiO1xyXG5pbXBvcnQgYXJyb3dEb3duU3JjIGZyb20gXCIuL2Fycm93X2Rvd253YXJkX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejI0LnN2Z1wiO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlRG9tKCkge1xyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuXHJcbiAgY3JlYXRlR3JpZCgpO1xyXG4gIC8qXHJcbiAgY29uc3QgYXJyb3dVcFNyYyA9IFwiLi9hcnJvd191cHdhcmRfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6MjQuc3ZnXCI7XHJcbiAgY29uc3QgYXJyb3dMZWZ0U3JjID0gXCIuL2Fycm93X2JhY2tfRklMTDBfd2dodDQwMF9HUkFEMF9vcHN6MjQuc3ZnXCI7XHJcbiAgY29uc3QgYXJyb3dSaWdodFNyYyA9IFwiLi9hcnJvd19mb3J3YXJkX0ZJTEwwX3dnaHQ0MDBfR1JBRDBfb3BzejI0LnN2Z1wiO1xyXG4gIGNvbnN0IGFycm93RG93blNyYyA9IFwiLi9hcnJvd19kb3dud2FyZF9GSUxMMF93Z2h0NDAwX0dSQUQwX29wc3oyNC5zdmdcIjtcclxuKi9cclxuICBjb25zdCBhcnJvd1VwSW1nID0gbmV3IEltYWdlKCk7XHJcbiAgY29uc3QgYXJyb3dMZWZ0SW1nID0gbmV3IEltYWdlKCk7XHJcbiAgY29uc3QgYXJyb3dSaWdodEltZyA9IG5ldyBJbWFnZSgpO1xyXG4gIGNvbnN0IGFycm93RG93bkltZyA9IG5ldyBJbWFnZSgpO1xyXG4gIGFycm93VXBJbWcuc3JjID0gYXJyb3dVcFNyYztcclxuICBhcnJvd0xlZnRJbWcuc3JjID0gYXJyb3dMZWZ0U3JjO1xyXG4gIGFycm93UmlnaHRJbWcuc3JjID0gYXJyb3dSaWdodFNyYztcclxuICBhcnJvd0Rvd25JbWcuc3JjID0gYXJyb3dEb3duU3JjO1xyXG5cclxuICBjb25zdCBhcnJvd3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHVwQXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGxlZnRBcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgcmlnaHRBcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgZG93bkFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgdXBBcnJvdy5hcHBlbmRDaGlsZChhcnJvd1VwSW1nKTtcclxuICBsZWZ0QXJyb3cuYXBwZW5kQ2hpbGQoYXJyb3dMZWZ0SW1nKTtcclxuICByaWdodEFycm93LmFwcGVuZENoaWxkKGFycm93UmlnaHRJbWcpO1xyXG4gIGRvd25BcnJvdy5hcHBlbmRDaGlsZChhcnJvd0Rvd25JbWcpO1xyXG5cclxuICBhcnJvd3MuY2xhc3NMaXN0LmFkZChcImFycm93c1wiKTtcclxuICB1cEFycm93LmNsYXNzTGlzdC5hZGQoXCJhcnJvdy11cFwiKTtcclxuICBsZWZ0QXJyb3cuY2xhc3NMaXN0LmFkZChcImFycm93LWxlZnRcIik7XHJcbiAgcmlnaHRBcnJvdy5jbGFzc0xpc3QuYWRkKFwiYXJyb3ctcmlnaHRcIik7XHJcbiAgZG93bkFycm93LmNsYXNzTGlzdC5hZGQoXCJhcnJvdy1kb3duXCIpO1xyXG5cclxuICB1cEFycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBtb3ZlKFwidXBcIik7XHJcbiAgfSk7XHJcbiAgbGVmdEFycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBtb3ZlKFwibGVmdFwiKTtcclxuICB9KTtcclxuICByaWdodEFycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBtb3ZlKFwicmlnaHRcIik7XHJcbiAgfSk7XHJcbiAgZG93bkFycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBtb3ZlKFwiZG93blwiKTtcclxuICB9KTtcclxuXHJcbiAgYXJyb3dzLmFwcGVuZENoaWxkKHVwQXJyb3cpO1xyXG4gIGFycm93cy5hcHBlbmRDaGlsZChsZWZ0QXJyb3cpO1xyXG4gIGFycm93cy5hcHBlbmRDaGlsZChyaWdodEFycm93KTtcclxuICBhcnJvd3MuYXBwZW5kQ2hpbGQoZG93bkFycm93KTtcclxuXHJcbiAgYm9keS5hcHBlbmRDaGlsZChhcnJvd3MpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVEb207XHJcbiIsImltcG9ydCB7IGFscGhhYmV0LCBncmlkU2l6ZSB9IGZyb20gXCIuL2dyaWQuanNcIjtcclxuXHJcbmNvbnNvbGUubG9nKGFscGhhYmV0KTtcclxuXHJcbmxldCBzbmFrZSA9IFtcclxuICAvLyBlYWNoIHNlZ21lbnQgaW4gYSBkaWZmIGFycmF5XHJcbiAgW1wiYlwiLCBcIjVcIiwgXCJyaWdodFwiXSwgLy9oZWFkXHJcbiAgW1wiYlwiLCBcIjRcIiwgXCJyaWdodFwiXSxcclxuICBbXCJiXCIsIFwiM1wiLCBcInJpZ2h0XCJdLFxyXG4gIFtcImJcIiwgXCIyXCIsIFwicmlnaHRcIl0sXHJcbiAgW1wiYlwiLCBcIjFcIiwgXCJyaWdodFwiXSwgLy8gdGFpbFxyXG5dO1xyXG5cclxuLy8gbnVtYmVycyByaWdodCBsZWZ0XHJcbi8vIGxldHRlcnMgdXAgZG93blxyXG5sZXQgdGltZXIgPSBudWxsO1xyXG5cclxuZnVuY3Rpb24gc2V0Q2xlYXJJbnRlcnZhbCgpIHtcclxuICBpZiAodGltZXIpIHtcclxuICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xyXG4gIH1cclxuICB0aW1lciA9IHNldEludGVydmFsKHNuYWtlVGltZXIsIDIwMDAsIFtzbmFrZVswXVsyXV0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZWZyZXNoU25ha2UoKSB7XHJcbiAgbGV0IHNuYWtlQ2xhc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNuYWtlLWJvZHlcIik7XHJcbiAgc25ha2VDbGFzcy5mb3JFYWNoKChkaXYpID0+IHtcclxuICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwic25ha2UtYm9keVwiKTtcclxuICB9KTtcclxuXHJcbiAgc25ha2UuZm9yRWFjaCgocm93KSA9PiB7XHJcbiAgICBjb25zdCBzbmFrZUNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtyb3dbMF19LSR7cm93WzFdfWApO1xyXG4gICAgc25ha2VDZWxsLmNsYXNzTGlzdC5hZGQoXCJzbmFrZS1ib2R5XCIpO1xyXG4gICAgLy8gY29uc29sZS5sb2coc25ha2VDZWxsKTtcclxuICB9KTtcclxuXHJcbiAgc2V0Q2xlYXJJbnRlcnZhbCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc25ha2VUaW1lcihkaXJlY3Rpb24pIHtcclxuICBsZXQgY3VycmVudERpcmVjdGlvbiA9IGRpcmVjdGlvblswXTtcclxuICBjb25zb2xlLmxvZyhjdXJyZW50RGlyZWN0aW9uKTtcclxuXHJcbiAgaWYgKGRpcmVjdGlvbiA9PSBcInVwXCIpIHtcclxuICAgIGxldCBsZXR0ZXJCZWZvcmUgPSBzbmFrZVswXVswXTtcclxuXHJcbiAgICAvLyBpcyBtb3ZlIHZhbGlkP1xyXG4gICAgaWYgKGxldHRlckJlZm9yZSA9PSBcImFcIikgcmV0dXJuO1xyXG5cclxuICAgIC8vIG1vdmUgdmFsaWRcclxuICAgIGxldCBsZXR0ZXJBZnRlciA9IGdldExldHRlcihsZXR0ZXJCZWZvcmUsIFwicHJldmlvdXNcIik7XHJcblxyXG4gICAgc25ha2UudW5zaGlmdChbbGV0dGVyQWZ0ZXIsIGAke3NuYWtlWzBdWzFdfWAsIGAke2RpcmVjdGlvbn1gXSk7XHJcbiAgICBzbmFrZS5wb3AoKTtcclxuICAgIHJlZnJlc2hTbmFrZSgpO1xyXG4gIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09IFwibGVmdFwiKSB7XHJcbiAgICAvLyBpcyBtb3ZlIHZhbGlkP1xyXG4gICAgaWYgKHNuYWtlWzBdWzFdIDw9IDEpIHJldHVybjtcclxuXHJcbiAgICBsZXQgbnVtYmVyQmVmb3JlID0gTnVtYmVyKHNuYWtlWzBdWzFdKTtcclxuICAgIGxldCBudW1iZXJBZnRlciA9IG51bWJlckJlZm9yZSAtIDE7XHJcblxyXG4gICAgLy8gbW92ZSB2YWxpZFxyXG4gICAgc25ha2UudW5zaGlmdChbc25ha2VbMF1bMF0sIG51bWJlckFmdGVyLCBkaXJlY3Rpb25dKTtcclxuICAgIHNuYWtlLnBvcCgpO1xyXG4gICAgcmVmcmVzaFNuYWtlKCk7XHJcbiAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gXCJyaWdodFwiKSB7XHJcbiAgICAvLyBpcyBtb3ZlIHZhbGlkP1xyXG4gICAgaWYgKHNuYWtlWzBdWzFdID49IGdyaWRTaXplKSByZXR1cm47XHJcblxyXG4gICAgbGV0IG51bWJlckJlZm9yZSA9IE51bWJlcihzbmFrZVswXVsxXSk7XHJcbiAgICBsZXQgbnVtYmVyQWZ0ZXIgPSBudW1iZXJCZWZvcmUgKyAxO1xyXG5cclxuICAgIC8vIG1vdmUgdmFsaWRcclxuICAgIHNuYWtlLnVuc2hpZnQoW3NuYWtlWzBdWzBdLCBudW1iZXJBZnRlciwgZGlyZWN0aW9uXSk7XHJcbiAgICBzbmFrZS5wb3AoKTtcclxuICAgIHJlZnJlc2hTbmFrZSgpO1xyXG4gIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09IFwiZG93blwiKSB7XHJcbiAgICBsZXQgbGV0dGVyQmVmb3JlID0gc25ha2VbMF1bMF07XHJcblxyXG4gICAgLy8gaXMgbW92ZSB2YWxpZD9cclxuICAgIGlmIChsZXR0ZXJCZWZvcmUgPT0gYCR7YWxwaGFiZXRbZ3JpZFNpemVdfWApIHJldHVybjtcclxuXHJcbiAgICAvLyBtb3ZlIHZhbGlkXHJcbiAgICBsZXQgbGV0dGVyQWZ0ZXIgPSBnZXRMZXR0ZXIobGV0dGVyQmVmb3JlLCBcIm5leHRcIik7XHJcblxyXG4gICAgc25ha2UudW5zaGlmdChbbGV0dGVyQWZ0ZXIsIGAke3NuYWtlWzBdWzFdfWAsIGAke2RpcmVjdGlvbn1gXSk7XHJcbiAgICBzbmFrZS5wb3AoKTtcclxuICAgIHJlZnJlc2hTbmFrZSgpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGxheUdhbWUoKSB7XHJcbiAgcmVmcmVzaFNuYWtlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtb3ZlKGRpcmVjdGlvbikge1xyXG4gIC8vIGlmIHRoZSBoZWFkIGlzIGFscmVhZHkgbW92aW5nIGluIHRoZSBzYW1lIGRpcmVjdGlvbiBhcyB0aGUgdXNlciB3YW50cywgZG8gbm90aGluZ1xyXG4gIGlmIChkaXJlY3Rpb24gPT0gc25ha2VbMF1bMl0pIHJldHVybjtcclxuXHJcbiAgaWYgKGRpcmVjdGlvbiA9PSBcInVwXCIpIHtcclxuICAgIC8vIGJsb2NrIG1vdmluZyBvcHBvc2l0ZSB3YXlcclxuICAgIGlmIChzbmFrZVswXVsyXSA9PSBcImRvd25cIikgcmV0dXJuO1xyXG5cclxuICAgIGxldCBsZXR0ZXJCZWZvcmUgPSBzbmFrZVswXVswXTtcclxuXHJcbiAgICAvLyBpcyBtb3ZlIHZhbGlkP1xyXG4gICAgaWYgKGxldHRlckJlZm9yZSA9PSBcImFcIikgcmV0dXJuO1xyXG5cclxuICAgIC8vIG1vdmUgdmFsaWRcclxuICAgIGxldCBsZXR0ZXJBZnRlciA9IGdldExldHRlcihsZXR0ZXJCZWZvcmUsIFwicHJldmlvdXNcIik7XHJcblxyXG4gICAgc25ha2UudW5zaGlmdChbbGV0dGVyQWZ0ZXIsIGAke3NuYWtlWzBdWzFdfWAsIGAke2RpcmVjdGlvbn1gXSk7XHJcbiAgICBzbmFrZS5wb3AoKTtcclxuXHJcbiAgICByZWZyZXNoU25ha2UoKTtcclxuICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PSBcImxlZnRcIikge1xyXG4gICAgLy8gYmxvY2sgbW92aW5nIG9wcG9zaXRlIHdheVxyXG4gICAgaWYgKHNuYWtlWzBdWzJdID09IFwicmlnaHRcIikgcmV0dXJuO1xyXG5cclxuICAgIC8vIGlzIG1vdmUgdmFsaWQ/XHJcbiAgICBpZiAoc25ha2VbMF1bMV0gPD0gMSkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBudW1iZXJCZWZvcmUgPSBOdW1iZXIoc25ha2VbMF1bMV0pO1xyXG4gICAgbGV0IG51bWJlckFmdGVyID0gbnVtYmVyQmVmb3JlIC0gMTtcclxuXHJcbiAgICAvLyBtb3ZlIHZhbGlkXHJcbiAgICBzbmFrZS51bnNoaWZ0KFtzbmFrZVswXVswXSwgbnVtYmVyQWZ0ZXIsIGRpcmVjdGlvbl0pO1xyXG4gICAgc25ha2UucG9wKCk7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coc25ha2UpO1xyXG5cclxuICAgIHJlZnJlc2hTbmFrZSgpO1xyXG4gIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09IFwicmlnaHRcIikge1xyXG4gICAgLy8gYmxvY2sgbW92aW5nIG9wcG9zaXRlIHdheVxyXG4gICAgaWYgKHNuYWtlWzBdWzJdID09IFwibGVmdFwiKSByZXR1cm47XHJcblxyXG4gICAgLy8gaXMgbW92ZSB2YWxpZD9cclxuICAgIGlmIChzbmFrZVswXVsxXSA+PSBncmlkU2l6ZSkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBudW1iZXJCZWZvcmUgPSBOdW1iZXIoc25ha2VbMF1bMV0pO1xyXG4gICAgbGV0IG51bWJlckFmdGVyID0gbnVtYmVyQmVmb3JlICsgMTtcclxuXHJcbiAgICAvLyBtb3ZlIHZhbGlkXHJcblxyXG4gICAgc25ha2UudW5zaGlmdChbc25ha2VbMF1bMF0sIG51bWJlckFmdGVyLCBkaXJlY3Rpb25dKTtcclxuICAgIHNuYWtlLnBvcCgpO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKHNuYWtlKTtcclxuXHJcbiAgICByZWZyZXNoU25ha2UoKTtcclxuICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PSBcImRvd25cIikge1xyXG4gICAgLy8gYmxvY2sgbW92aW5nIG9wcG9zaXRlIHdheVxyXG4gICAgaWYgKHNuYWtlWzBdWzJdID09IFwidXBcIikgcmV0dXJuO1xyXG5cclxuICAgIGxldCBsZXR0ZXJCZWZvcmUgPSBzbmFrZVswXVswXTtcclxuXHJcbiAgICAvLyBpcyBtb3ZlIHZhbGlkP1xyXG4gICAgaWYgKGxldHRlckJlZm9yZSA9PSBgJHthbHBoYWJldFtncmlkU2l6ZV19YCkgcmV0dXJuO1xyXG5cclxuICAgIC8vIG1vdmUgdmFsaWRcclxuICAgIGxldCBsZXR0ZXJBZnRlciA9IGdldExldHRlcihsZXR0ZXJCZWZvcmUsIFwibmV4dFwiKTtcclxuXHJcbiAgICBzbmFrZS51bnNoaWZ0KFtsZXR0ZXJBZnRlciwgYCR7c25ha2VbMF1bMV19YCwgYCR7ZGlyZWN0aW9ufWBdKTtcclxuICAgIHNuYWtlLnBvcCgpO1xyXG5cclxuICAgIHJlZnJlc2hTbmFrZSgpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TGV0dGVyKGxldHRlciwgYWN0aW9uKSB7XHJcbiAgY29uc3QgYWxwaGFiZXRBcnJheSA9IGFscGhhYmV0O1xyXG4gIGxldCBuciA9IGFscGhhYmV0QXJyYXkuaW5kZXhPZihsZXR0ZXIpO1xyXG4gIGlmIChhY3Rpb24gPT0gXCJwcmV2aW91c1wiKSB7XHJcbiAgICBsZXQgcHJldmlvdXNMZXR0ZXIgPSBhbHBoYWJldEFycmF5W25yIC0gMV07XHJcbiAgICByZXR1cm4gcHJldmlvdXNMZXR0ZXI7XHJcbiAgfVxyXG4gIGxldCBuZXh0TGV0dGVyID0gYWxwaGFiZXRBcnJheVtuciArIDFdO1xyXG4gIHJldHVybiBuZXh0TGV0dGVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmYWlsR2FtZSgpIHtcclxuICAvLyBzaG93IGxvc2Ugc2NyZWVuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc3RhcnRHYW1lKCkge31cclxuIiwiY29uc3QgZ3JpZFNpemUgPSAyMDtcclxuY29uc3QgYWxwaGFiZXQgPSBcInhhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5elwiLnNwbGl0KFwiXCIpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUdyaWRBcnJheShzaXplKSB7XHJcbiAgY29uc3QgZ3JpZEFycmF5ID0gW107XHJcbiAgLy8gcm93c1xyXG4gIGZvciAobGV0IHIgPSAwOyByIDwgc2l6ZSArIDE7IHIrKykge1xyXG4gICAgZ3JpZEFycmF5LnB1c2goW10pO1xyXG4gICAgLy8gY29sdW1uc1xyXG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCBzaXplICsgMTsgYysrKSB7XHJcbiAgICAgIGlmIChjID09IDApIHtcclxuICAgICAgICAvLyBjb2x1bW4gd2l0aCBsZXR0ZXJzXHJcbiAgICAgICAgZ3JpZEFycmF5W3JdLnB1c2goYCR7YWxwaGFiZXRbcl19YCk7XHJcbiAgICAgIH0gZWxzZSBpZiAociA9PSAwKSB7XHJcbiAgICAgICAgLy8gcm93IHdpdGggbnVtYmVyc1xyXG4gICAgICAgIGdyaWRBcnJheVtyXS5wdXNoKGMpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGdyaWRBcnJheVtyXS5wdXNoKGAke2FscGhhYmV0W3JdfS0ke2N9YCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGdyaWRBcnJheTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlR3JpZCgpIHtcclxuICBjb25zdCBhcnJheSA9IGNyZWF0ZUdyaWRBcnJheShncmlkU2l6ZSk7XHJcbiAgY29uc29sZS5sb2coYXJyYXkpO1xyXG5cclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcbiAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gIGFycmF5LmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+IHtcclxuICAgIHJvdy5mb3JFYWNoKChjZWxsLCBpbmRleCkgPT4ge1xyXG4gICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgICAgaWYgKHJvd0luZGV4ID09IDApIHtcclxuICAgICAgICBzcXVhcmUudGV4dENvbnRlbnQgPSBjZWxsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaW5kZXggPT0gMCkge1xyXG4gICAgICAgIHNxdWFyZS50ZXh0Q29udGVudCA9IGNlbGw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic3F1YXJlXCIpO1xyXG4gICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7Y2VsbH1gKTtcclxuICAgICAgLy8gc3F1YXJlLnRleHRDb250ZW50ID0gYXJyYXlbY2VsbF07XHJcbiAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBncmlkLmNsYXNzTGlzdC5hZGQoXCJncmlkXCIpO1xyXG4gIGJvZHkuYXBwZW5kQ2hpbGQoZ3JpZCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGFscGhhYmV0LCBncmlkU2l6ZSB9O1xyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIxLCAxOHB4KTtcclxuICBjb2x1bW4tZ2FwOiAwcHg7XHJcbiAgcm93LWdhcDogMHB4O1xyXG4gIGp1c3RpZnktaXRlbXM6IHN0cmV0Y2g7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uc3F1YXJlIHtcclxuICB3aWR0aDogMThweDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5zbmFrZS1ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5jb2x1bW4tMSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxufVxyXG5cclxuLmFycm93cyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcIi4gdXAgLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBcImxlZnQgZG93biByaWdodFwiO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBcclxufVxyXG5cclxuLmFycm93cyBpbWcge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4uYXJyb3ctdXAge1xyXG4gIGdyaWQtYXJlYTogdXA7XHJcbn1cclxuXHJcbi5hcnJvdy1sZWZ0IHtcclxuICBncmlkLWFyZWE6IGxlZnQ7XHJcbn1cclxuXHJcbi5hcnJvdy1yaWdodCB7XHJcbiAgZ3JpZC1hcmVhOiByaWdodDtcclxufVxyXG5cclxuLmFycm93LWRvd24ge1xyXG4gIGdyaWQtYXJlYTogZG93bjtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVDQUF1QztFQUN2QyxlQUFlO0VBQ2YsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYjt1Q0FDcUM7RUFDckMsWUFBWTs7QUFFZDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIG1hcmdpbjogMHB4O1xcclxcbiAgcGFkZGluZzogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMjEsIDE4cHgpO1xcclxcbiAgY29sdW1uLWdhcDogMHB4O1xcclxcbiAgcm93LWdhcDogMHB4O1xcclxcbiAganVzdGlmeS1pdGVtczogc3RyZXRjaDtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNxdWFyZSB7XFxyXFxuICB3aWR0aDogMThweDtcXHJcXG4gIGhlaWdodDogMThweDtcXHJcXG4gIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xcclxcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICBtYXJnaW46IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNuYWtlLWJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uY29sdW1uLTEge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFycm93cyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcIi4gdXAgLlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgXFxcImxlZnQgZG93biByaWdodFxcXCI7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxuICBcXHJcXG59XFxyXFxuXFxyXFxuLmFycm93cyBpbWcge1xcclxcbiAgd2lkdGg6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5hcnJvdy11cCB7XFxyXFxuICBncmlkLWFyZWE6IHVwO1xcclxcbn1cXHJcXG5cXHJcXG4uYXJyb3ctbGVmdCB7XFxyXFxuICBncmlkLWFyZWE6IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5hcnJvdy1yaWdodCB7XFxyXFxuICBncmlkLWFyZWE6IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4uYXJyb3ctZG93biB7XFxyXFxuICBncmlkLWFyZWE6IGRvd247XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBjc3MgZnJvbSBcIi4vc3R5bGUuY3NzXCI7XHJcblxyXG5pbXBvcnQgY3JlYXRlR3JpZCBmcm9tIFwiLi9ncmlkLmpzXCI7XHJcbmltcG9ydCBwbGF5R2FtZSBmcm9tIFwiLi9nYW1lLmpzXCI7XHJcbmltcG9ydCBjcmVhdGVEb20gZnJvbSBcIi4vZG9tLmpzXCI7XHJcblxyXG5jcmVhdGVEb20oKTtcclxuXHJcbnBsYXlHYW1lKCk7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVHcmlkIiwiZGVmYXVsdEV4cG9ydCIsIm1vdmUiLCJhcnJvd1VwU3JjIiwiYXJyb3dMZWZ0U3JjIiwiYXJyb3dSaWdodFNyYyIsImFycm93RG93blNyYyIsImNyZWF0ZURvbSIsImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhcnJvd1VwSW1nIiwiSW1hZ2UiLCJhcnJvd0xlZnRJbWciLCJhcnJvd1JpZ2h0SW1nIiwiYXJyb3dEb3duSW1nIiwic3JjIiwiYXJyb3dzIiwiY3JlYXRlRWxlbWVudCIsInVwQXJyb3ciLCJsZWZ0QXJyb3ciLCJyaWdodEFycm93IiwiZG93bkFycm93IiwiYXBwZW5kQ2hpbGQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwiYWxwaGFiZXQiLCJncmlkU2l6ZSIsImNvbnNvbGUiLCJsb2ciLCJzbmFrZSIsInRpbWVyIiwic2V0Q2xlYXJJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInNuYWtlVGltZXIiLCJyZWZyZXNoU25ha2UiLCJzbmFrZUNsYXNzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJkaXYiLCJyZW1vdmUiLCJyb3ciLCJzbmFrZUNlbGwiLCJkaXJlY3Rpb24iLCJjdXJyZW50RGlyZWN0aW9uIiwibGV0dGVyQmVmb3JlIiwibGV0dGVyQWZ0ZXIiLCJnZXRMZXR0ZXIiLCJ1bnNoaWZ0IiwicG9wIiwibnVtYmVyQmVmb3JlIiwiTnVtYmVyIiwibnVtYmVyQWZ0ZXIiLCJwbGF5R2FtZSIsImxldHRlciIsImFjdGlvbiIsImFscGhhYmV0QXJyYXkiLCJuciIsImluZGV4T2YiLCJwcmV2aW91c0xldHRlciIsIm5leHRMZXR0ZXIiLCJmYWlsR2FtZSIsInJlc3RhcnRHYW1lIiwic3BsaXQiLCJjcmVhdGVHcmlkQXJyYXkiLCJzaXplIiwiZ3JpZEFycmF5IiwiciIsInB1c2giLCJjIiwiYXJyYXkiLCJncmlkIiwicm93SW5kZXgiLCJjZWxsIiwiaW5kZXgiLCJzcXVhcmUiLCJ0ZXh0Q29udGVudCIsInNldEF0dHJpYnV0ZSIsImNzcyJdLCJzb3VyY2VSb290IjoiIn0=