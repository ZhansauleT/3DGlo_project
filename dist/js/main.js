/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n\n\n\n\n\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('1 March 2022');\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n  const menuBtn = document.querySelector('.menu');\n  const menu = document.querySelector('menu');\n  const closeBtn = menu.querySelector('.close-btn');\n  const menuItems = menu.querySelectorAll('ul>li>a');\n\n  const handleMenu = () => {\n    menu.classList.toggle('active-menu');\n  };\n\n  menuBtn.addEventListener('click', handleMenu);\n  closeBtn.addEventListener('click', handleMenu);\n\n  menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu));\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\n  const modal = document.querySelector('.popup');\n  const modalWindow = document.querySelector('.popup-content');\n  const buttons = document.querySelectorAll('.popup-btn');\n  const closeBtn = modal.querySelector('.popup-close');\n  const innerWidth = window.innerWidth;\n\n  let modalWindowTop = 0;\n  let animationId;\n\n  //animation\n  // const modalWindowAnimation = () => {\n  //   animationId = requestAnimationFrame(modalWindowAnimation());\n  //   modalWindowTop++;\n  //   modalWindow.style.top = modalWindowTop+'px';\n      \n  //   if(innerWidth >= 768 && modalWindowTop !== 50){\n  //     requestAnimationFrame(modalWindowAnimation);\n  //   }else{\n  //     cancelAnimationFrame(animationID);\n  //   }\n  // };\n    \n  buttons.forEach(btn => {\n    btn.addEventListener('click', () => {\n      modal.style.display = 'block';\n      //modalWindowAnimation();\n\n    });\n  });\n\n\n\n  closeBtn.addEventListener('click', () => {\n    modal.style.display = 'none';\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = function(deadline){\n  const timerHours = document.getElementById(\"timer-hours\");\n  const timerMinutes = document.getElementById(\"timer-minutes\");\n  const timerSeconds = document.getElementById(\"timer-seconds\");\n\n  \n  const getTimeRemaining = () => {\n    let dateStop = new Date(deadline).getTime();\n    let dateNow = new Date().getTime();\n    let timeRemaning = (dateStop - dateNow)/1000;\n    let hours = Math.floor(timeRemaning/3600);\n    let minutes = Math.floor((timeRemaning/60) % 60);\n    let seconds = Math.floor(timeRemaning % 60);\n\n    if(timeRemaning < 0){\n      timeRemaning = 0;\n      hours = 0;\n      minutes = 0;\n      seconds = 0;\n    }\n\n    return { timeRemaning, hours, minutes, seconds };\n  };\n\n\n  const updateClock = () => {\n    let getTime = getTimeRemaining();\n    \n    timerHours.textContent = getTime.hours;\n    timerMinutes.textContent = getTime.minutes;\n    timerSeconds.textContent = getTime.seconds;\n\n    if(getTimeRemaining === 0){\n      timerHours.textContent = \"0\"+getTime.hours;\n      timerMinutes.textContent = \"00\";\n      timerSeconds.textContent = \"00\";\n    }\n      \n\n    if(getTime.timeRemaning > 0) {\n      setTimeout(updateClock, 1000);\n    }\n\n  };\n\n  updateClock();\n\n}; \n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;