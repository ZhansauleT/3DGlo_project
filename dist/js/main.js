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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/validation */ \"./modules/validation.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n\n\n\n\n\n\n\n\n\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('1 March 2022');\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_validation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(100);\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = (price = 100) => {\n  const calcBlock = document.querySelector('.calc-block');\n  const calcType = document.querySelector('.calc-type');\n  const calcSquare = document.querySelector('.calc-square');\n  const calcCount = document.querySelector('.calc-count');\n  const calcDay = document.querySelector('.calc-day');\n  const total = document.getElementById('total');\n\n  const countCalc = () => {\n    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\n    const calcSquareValue = calcSquare.value;\n\n    let totalValue = 0;\n    let calcCountValue = 1;\n    let calcDayValue = 1;\n\n    if(calcCount.value > 1){\n      calcCountValue += +calcCount.value/10;\n    }\n\n    if(calcDay.value && calcDay.value < 5){\n      calcDayValue = 2;\n    }else if(calcDay.value && calcDay.value < 10){\n      calcDayValue = 1.5;\n    }\n\n    if(calcType.value && calcSquare.value){\n      totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;\n    }else{\n      totalValue = 0;\n    }\n\n    total.textContent = totalValue;\n\n  };\n\n  calcBlock.addEventListener('input', (e) => {\n    if(e.target === calcType || e.target === calcSquare || e.target === calcCount || e.target === calcDay){\n      countCalc();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({timing, draw, duration}) => {\n  let start = performance.now();\n\n  requestAnimationFrame(function animate(time) {\n    let timeFraction = (time - start) / duration;\n    if(timeFraction > 1) timeFraction = 1;\n\n    let progress = timing(timeFraction);\n\n    draw(progress);\n\n    if(timeFraction < 1){\n      requestAnimationFrame(animate);\n    }\n  });\n};\n\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n  const menuBtn = document.querySelector('.menu');\n  const menu = document.querySelector('menu');\n  //const closeBtn = menu.querySelector('.close-btn');\n  const menuItems = menu.querySelectorAll('ul>li>a');\n\n  const handleMenu = () => {\n    menu.classList.toggle('active-menu');\n  };\n\n  menuBtn.addEventListener('click', handleMenu);\n\n  menu.addEventListener('click', (e) => {\n    console.dir(e.target);\n\n    if(e.target.classList.contains('close-btn')){\n      handleMenu();\n    }\n    \n    if(!e.target.classList.contains('close-btn')){\n      handleMenu();\n    }\n  });\n  \n  //closeBtn.addEventListener('click', handleMenu);\n\n  //menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu));\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\n\nconst modal = () => {\n  const modal = document.querySelector('.popup');\n  const modalWindow = document.querySelector('.popup-content');\n  const buttons = document.querySelectorAll('.popup-btn');\n  const innerWidth = window.innerWidth;\n\n    \n  buttons.forEach(btn => {\n    btn.addEventListener('click', () => {\n      modal.style.display = 'block';\n      \n      console.log(innerWidth);\n\n      if(innerWidth > 768){\n        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\n          duration: 400,\n          timing(timeFraction) {\n            return timeFraction;\n          },\n          draw(progress) {\n            modalWindow.style.top = progress * 25 + '%';\n            console.log(progress);\n          }\n        });\n      }\n    });\n  });\n\n  modal.addEventListener('click', (e) => {\n\n    if(!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')){\n      modal.style.display = 'none';\n    }\n  });\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\n  const sliderBlock = document.querySelector('.portfolio-content');\n  const slides = document.querySelectorAll('.portfolio-item');\n  const dots = document.querySelectorAll('.dot');\n\n  const timeInterval = 2000;\n\n  let currentSlide = 0;\n  let interval; \n\n  const prevSlide = (elems, index, strClass) => {\n    elems[index].classList.remove(strClass);\n  };\n\n  const nextSlide = (elems, index, strClass) => {\n    elems[index].classList.add(strClass);\n  };\n\n  //to switch slide automatically\n  const autoSlide = () => {\n    prevSlide(slides, currentSlide, 'portfolio-item-active');\n    prevSlide(dots, currentSlide, 'dot-active');\n    currentSlide++;\n\n    if(currentSlide >= slides.length){\n      currentSlide = 0;\n    }\n\n    nextSlide(slides, currentSlide, 'portfolio-item-active');\n    nextSlide(dots, currentSlide, 'dot-active');\n  };\n\n  const startSlide = (timer = 1500) => {\n    interval = setInterval(autoSlide, timer);\n  };\n\n  const stopSlide = () => {\n    clearInterval(interval);\n  };\n\n  sliderBlock.addEventListener('click', (e) => {\n    e.preventDefault();\n\n    if(!e.target.matches('.dot, .portfolio-btn')){\n      return;\n    }\n\n    prevSlide(slides, currentSlide, 'portfolio-item-active');\n    prevSlide(dots, currentSlide, 'dot-active');\n\n    if(e.target.matches('#arrow-right')){\n      currentSlide++;\n    }else if(e.target.matches('#arrow-left')){\n      currentSlide--;\n    }else if(e.target.classList.contains('dot')){\n      dots.forEach((dot, index) => {\n        if(e.target === dot){\n          currentSlide = index;\n        }\n      });\n    }\n\n    if(currentSlide >= slides.length){\n      currentSlide = 0;\n    }\n    \n    if(currentSlide < 0){\n      currentSlide = slides.length - 1;\n    }\n\n    nextSlide(slides, currentSlide, 'portfolio-item-active');\n    nextSlide(dots, currentSlide, 'dot-active');\n\n  });\n\n  sliderBlock.addEventListener('mouseenter', (e) => {\n    if(e.target.matches('.dot, .portfolio-btn')){\n      stopSlide();\n    }\n  }, true);\n\n  sliderBlock.addEventListener('mouseleave', (e) => {\n    if(e.target.matches('.dot, .portfolio-btn')){\n      startSlide(timeInterval);\n    }\n  }, true);\n\n  startSlide(timeInterval);\n\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\n  const tabPanel = document.querySelector('.service-header');\n  const tabs = document.querySelectorAll('.service-header-tab');\n  const tabContent = document.querySelectorAll('.service-tab');\n\n\n  tabPanel.addEventListener('click', (e) => {\n    if(e.target.closest('.service-header-tab')){\n      const tabBtn = e.target.closest('.service-header-tab');\n\n      tabs.forEach((tab, index) => {\n        if(tab === tabBtn){\n          tab.classList.add('active');\n          tabContent[index].classList.remove('d-none');\n        }else{\n          tab.classList.remove('active');\n          tabContent[index].classList.add('d-none');\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = function(deadline){\n  const timerHours = document.getElementById(\"timer-hours\");\n  const timerMinutes = document.getElementById(\"timer-minutes\");\n  const timerSeconds = document.getElementById(\"timer-seconds\");\n\n  \n  const getTimeRemaining = () => {\n    let dateStop = new Date(deadline).getTime();\n    let dateNow = new Date().getTime();\n    let timeRemaning = (dateStop - dateNow)/1000;\n    let hours = Math.floor(timeRemaning/3600);\n    let minutes = Math.floor((timeRemaning/60) % 60);\n    let seconds = Math.floor(timeRemaning % 60);\n\n    if(timeRemaning < 0){\n      timeRemaning = 0;\n      hours = 0;\n      minutes = 0;\n      seconds = 0;\n    }\n\n    return { timeRemaning, hours, minutes, seconds };\n  };\n\n\n  const updateClock = () => {\n    let getTime = getTimeRemaining();\n    \n    timerHours.textContent = getTime.hours;\n    timerMinutes.textContent = getTime.minutes;\n    timerSeconds.textContent = getTime.seconds;\n\n    if(getTimeRemaining === 0){\n      timerHours.textContent = \"0\"+getTime.hours;\n      timerMinutes.textContent = \"00\";\n      timerSeconds.textContent = \"00\";\n    }\n      \n\n    if(getTime.timeRemaning > 0) {\n      setTimeout(updateClock, 1000);\n    }\n\n  };\n\n  updateClock();\n\n}; \n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validation.js":
/*!*******************************!*\
  !*** ./modules/validation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validation = () => {\n  const calcItems = document.querySelectorAll('input.calc-item');\n\n  const mainForm = document.querySelector('.main-form');\n  const mainFormTextInput = mainForm.querySelector('input[type=text]');\n  const mainFormNumberInput = mainForm.querySelector('input[type=tel]');\n  const mainFormEmailInput = mainForm.querySelector('input[type=email]');\n  \n  const footerForm = document.querySelector('.footer-form');\n  const footerFormTextInput = footerForm.querySelector('input[type=text]');\n  const footerFormNumberInput = footerForm.querySelector('input[type=tel]');\n  const footerFormEmailInput = footerForm.querySelector('input[type=email]');\n  const footerFormMessageInput = footerForm.querySelector('input.mess');\n\n\n  const modalWindowForm = document.querySelector('#form3');\n  const modalWindowTextInput = modalWindowForm.querySelector('input[type=text]');\n  const modalWindowNumberInput = modalWindowForm.querySelector('input[type=tel]');\n  const modalWindowEmailInput = modalWindowForm.querySelector('input[type=email]');\n\n\n  mainForm.addEventListener('submit', (e) => {\n    e.preventDefault();\n    //let isError = false;\n\n    if(/[^а-яА-Я -]/g.test(mainFormTextInput.value) || mainFormTextInput.value === ''){\n      alert(\"Введите ваше имя на кириллице\");\n      mainFormTextInput.value = \"\";\n    }else{\n      console.log(\"no error\");\n    }\n\n    if(/[^a-zA-Z0-9@-_.!~*']/g.test(mainFormEmailInput.value) || mainFormTextInput.value === ''){\n      alert(\"Введите корректную адресную почту\");\n      mainFormEmailInput.value = \"\";\n    }\n\n    if(/[^0-9()-]/g.test(mainFormNumberInput.value) && mainFormTextInput.value === ''){\n      alert(\"Введите корректный номер телефона\");\n      mainFormNumberInput.value = \"\";\n    }\n\n  });\n\n\n  // footer form validation\n  footerForm.addEventListener('submit', (e) => {\n    e.preventDefault();\n    //let isError = false;\n\n    if(/[^а-яА-Я -]/g.test(footerFormTextInput.value) || footerFormTextInput.value === ''){\n      alert(\"Введите ваше имя на кириллице\");\n      footerFormTextInput.value = \"\";\n    }\n\n    if(/[^a-zA-Z0-9@-_.!~*']/g.test(footerFormEmailInput.value) || footerFormTextInput.value === ''){\n      alert(\"Введите корректную адресную почту\");\n      footerFormEmailInput.value = \"\";\n    }\n\n    if(/[^0-9()-]/g.test(footerFormNumberInput.value) || footerFormTextInput.value === ''){\n      alert(\"Введите корректный номер телефона\");\n      footerFormNumberInput.value = \"\";\n    }\n\n    if(/[^а-яА-Я -]/g.test(footerFormMessageInput.value) || footerFormMessageInput.value === ''){\n      alert(\"Введите корректное сообщение\");\n      footerFormMessageInput.value = \"\";\n    }\n\n  });\n\n\n  //modal window form validation\n\n  modalWindowForm.addEventListener('submit', (e) => {\n    e.preventDefault();\n    //let isError = false;\n\n    if(/[^а-яА-Я -]/g.test(modalWindowTextInput.value) || modalWindowTextInput.value === ''){\n      alert(\"Введите ваше имя на кириллице\");\n      modalWindowTextInput.value = \"\";\n    }\n\n    if(/[^a-zA-Z0-9@-_.!~*']/g.test(modalWindowEmailInput.value) || modalWindowEmailInput.value === ''){\n      alert(\"Введите корректную адресную почту\");\n      modalWindowEmailInput.value = \"\";\n    }\n\n    if(/[^0-9()-]/g.test(modalWindowNumberInput.value) || modalWindowNumberInput.value === ''){\n      alert(\"Введите корректный номер телефона\");\n      mainFormNumberInput.value = \"\";\n    }\n\n  });\n\n\n\n  calcItems.forEach(calcItem => {\n    calcItem.addEventListener('input', (e) => {\n      e.preventDefault();\n      \n      if(/[^0-9]/g.test(calcItem.value)){\n        alert(\"Вписывать нужно только цифры!\");\n        calcItem.value = \"\";\n      }\n    });\n  });\n  \n  \n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\n\n//# sourceURL=webpack:///./modules/validation.js?");

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