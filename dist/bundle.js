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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_countTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/countTimer */ \"./src/modules/countTimer.js\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/togglePopUp */ \"./src/modules/togglePopUp.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scroll */ \"./src/modules/scroll.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_command__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/command */ \"./src/modules/command.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/validation */ \"./src/modules/validation.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n\n\n\n\n\n\n\n\n\n // Таймер\n\n(0,_modules_countTimer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('15 september 2021'); // Меню\n\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // popup Модальное окно\n\n(0,_modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(); // Плавная прокрутка\n\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(); // Табы\n\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(); // Слайдер\n\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(); // Наша команда\n\n(0,_modules_command__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(); // Валидация\n\n(0,_modules_validation__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(); // Калькулятор\n\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(100); //  send-AJAX-form\n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n\n//# sourceURL=webpack://3dglo/./src/index.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-mixed-spaces-and-tabs */\n\n/* eslint-disable no-unused-vars */\nvar calc = function calc() {\n  var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;\n  var calcBlock = document.querySelector('.calc-block'),\n      calcType = document.querySelector('.calc-type'),\n      calcSquare = document.querySelector('.calc-square'),\n      calcCount = document.querySelector('.calc-count'),\n      calcDay = document.querySelector('.calc-day'),\n      optionValue = document.querySelectorAll('select>option')[2],\n      totalValue = document.getElementById('total');\n\n  var countSum = function countSum() {\n    var total = 0,\n        countValue = 1,\n        dayValue = 1;\n    var typeValue = calcType.options[calcType.selectedIndex].value,\n        squareValue = +calcSquare.value;\n\n    if (calcCount.value > 1) {\n      countValue += (calcCount.value - 1) / 10;\n    }\n\n    if (calcDay.value && calcDay.value < 5) {\n      dayValue *= 2;\n    } else if (calcDay.value && calcDay.value < 10) {\n      dayValue *= 1.5;\n    }\n\n    var typeVal;\n\n    if (calcType.selectedIndex === 2) {\n      typeVal = typeValue - 1.6;\n    } else {\n      typeVal = typeValue;\n    }\n\n    if (calcType.selectedIndex === 0) {\n      calcCount.value = '';\n      calcSquare.value = '';\n      calcDay.value = '';\n    }\n\n    if (typeValue && squareValue) {\n      total = price * typeVal * squareValue * countValue * dayValue;\n    }\n\n    totalValue.textContent = Math.round(total);\n  };\n\n  calcBlock.addEventListener('change', function (event) {\n    var target = event.target; // if (target === calcType || target === calcSquare || target === calcCount || target === calcDay) {\n    //   console.log('1');\n    // }\n    // if (target.matches('.calc-type') || target.matches('.calc-square') ||\n    //  target.matches('.calc-count') || target.matches('.calc-day')) {\n    //   console.log('1');\n    // }\n\n    if (target.matches('select') || target.matches('input')) {\n      countSum();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://3dglo/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/command.js":
/*!********************************!*\
  !*** ./src/modules/command.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-mixed-spaces-and-tabs */\n\n/* eslint-disable no-unused-vars */\nvar command = function command() {\n  var commandPhoto = document.querySelectorAll('.command__photo');\n  commandPhoto.forEach(function (item) {\n    var photoSrc;\n    item.addEventListener('mouseover', function (event) {\n      photoSrc = event.target.src;\n      event.target.src = event.target.dataset.img;\n    });\n    item.addEventListener('mouseout', function (event) {\n      event.target.src = photoSrc;\n    });\n  }); // commandPhoto.addEventListener('mouseenter', event => {\n  //   event.target.src = event.target.dataset.img;\n  // });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (command);\n\n//# sourceURL=webpack://3dglo/./src/modules/command.js?");

/***/ }),

/***/ "./src/modules/countTimer.js":
/*!***********************************!*\
  !*** ./src/modules/countTimer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-mixed-spaces-and-tabs */\n\n/* eslint-disable no-unused-vars */\nfunction countTimer(deadline) {\n  var timerHours = document.getElementById('timer-hours'),\n      timerMinutes = document.getElementById('timer-minutes'),\n      timerSeconds = document.getElementById('timer-seconds');\n\n  function getTimeRemaining() {\n    var dateStop = new Date(deadline).getTime(),\n        dateNow = new Date().getTime(),\n        timeRemaining = (dateStop - dateNow) / 1000;\n    var seconds = Math.floor(timeRemaining % 60),\n        minutes = Math.floor(timeRemaining / 60 % 60),\n        hours = Math.floor(timeRemaining / 60 / 60); // day = Math.floor(timeRemaining / 60 / 60 / 24), hours %60;\n\n    if (hours < 10) hours = '0' + hours;\n    if (minutes < 10) minutes = '0' + minutes;\n    if (seconds < 10) seconds = '0' + seconds;\n    return {\n      timeRemaining: timeRemaining,\n      // eslint-disable-next-line object-shorthand\n      'hours': hours,\n      minutes: minutes,\n      seconds: seconds\n    };\n  }\n\n  function updateClock() {\n    var timer = getTimeRemaining();\n    timerHours.textContent = timer.hours;\n    timerMinutes.textContent = timer.minutes;\n    timerSeconds.textContent = timer.seconds;\n\n    if (timer.timeRemaining > 0) {\n      setTimeout(updateClock, 1000);\n    } else {\n      timerHours.textContent = '00';\n      timerMinutes.textContent = '00';\n      timerSeconds.textContent = '00';\n    }\n  }\n\n  updateClock();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countTimer);\n\n//# sourceURL=webpack://3dglo/./src/modules/countTimer.js?");

/***/ }),

/***/ "./src/modules/scroll.js":
/*!*******************************!*\
  !*** ./src/modules/scroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n/* eslint-disable no-mixed-spaces-and-tabs */\n\n/* eslint-disable no-unused-vars */\n\n/* jshint ignore:start */\nvar scroll = function scroll() {\n  var anchors = document.querySelectorAll('a[href*=\"#\"]');\n\n  var _iterator = _createForOfIteratorHelper(anchors),\n      _step;\n\n  try {\n    var _loop = function _loop() {\n      var anchor = _step.value;\n      anchor.addEventListener('click', function (event) {\n        event.preventDefault();\n        var blockID = anchor.getAttribute('href'),\n            btn = document.querySelectorAll('.portfolio-btn'); // eslint-disable-next-line prefer-const\n\n        var target = event.target;\n\n        if (target.classList.contains('portfolio-btn')) {\n          event.preventDefault();\n        } else {\n          document.querySelector('' + blockID).scrollIntoView({\n            behavior: 'smooth',\n            block: 'start'\n          });\n        }\n      });\n    };\n\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      _loop();\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n};\n/* jshint ignore:end */\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack://3dglo/./src/modules/scroll.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n/* eslint-disable no-mixed-spaces-and-tabs */\n\n/* eslint-disable no-unused-vars */\nvar sendForm = function sendForm() {\n  var errorMessage = 'Что то пошло не так',\n      loadMessage = 'Загрузка...',\n      succesMessage = 'Спасибо! Мы скоро с вами свяжемся!';\n  var forms = document.querySelectorAll('form');\n  var statusMessage = document.createElement('div');\n  statusMessage.style.cssText = \"font-size: 2rem;\\n                                  color: white;\";\n  forms.forEach(function (form) {\n    var popup = document.querySelector('.popup');\n    form.addEventListener('submit', function (event) {\n      event.preventDefault();\n      form.appendChild(statusMessage);\n      statusMessage.textContent = loadMessage;\n      var formData = new FormData(form);\n      var body = {}; // Если серверу нужен JSON формат\n      // for (const val of formData.entries()) {\n      //   body[val[0]] = val[1];\n      // }\n\n      formData.forEach(function (val, key) {\n        body[key] = val;\n      }); // eslint-disable-next-line no-use-before-define\n      // postData(body, () => {\n      //   statusMessage.textContent = succesMessage;\n      //   setTimeout(() => { statusMessage.textContent = ''; }, 3000);\n      //   setTimeout(() => { popup.style.display = 'none'; }, 6000);\n      // }, error => {\n      //   statusMessage.textContent = errorMessage;\n      //   console.error(error);\n      //   setTimeout(() => { statusMessage.textContent = ''; }, 3000);\n      //   setTimeout(() => { popup.style.display = 'none'; }, 6000);\n      // });\n      // eslint-disable-next-line no-use-before-define\n\n      postData(body).then(function (response) {\n        if (response.status !== 200) {\n          throw new Error('status network not 200.');\n        }\n\n        statusMessage.textContent = succesMessage;\n        setTimeout(function () {\n          statusMessage.textContent = '';\n        }, 3000);\n        setTimeout(function () {\n          popup.style.display = 'none';\n        }, 6000);\n      })[\"catch\"](function (error) {\n        statusMessage.textContent = errorMessage;\n        console.error(error);\n        setTimeout(function () {\n          statusMessage.textContent = '';\n        }, 3000);\n        setTimeout(function () {\n          popup.style.display = 'none';\n        }, 6000);\n      });\n\n      _toConsumableArray(form).forEach(function (input) {\n        input.value = '';\n      });\n    }); // eslint-disable-next-line arrow-body-style\n\n    var postData = function postData(body) {\n      return fetch('./server.php', {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json'\n        },\n        body: JSON.stringify(body)\n      });\n    }; // const postData = body => new Promise((resolve, reject) => {\n    //           const request = new XMLHttpRequest();\n    //           request.addEventListener('readystatechange', () => {\n    //               if (request.readyState !== 4) {\n    //                   return;\n    //               }\n    //               if (request.status === 200) {\n    //                   resolve();\n    //               } else {\n    //                   statusMessage.textContent = errorMessage;\n    //                   reject();\n    //               }\n    //           });\n    //           request.open('POST', './server.php');\n    //           request.setRequestHeader('Content-Type', 'application/json');\n    //           request.send(JSON.stringify(body));\n    //       });\n\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://3dglo/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-mixed-spaces-and-tabs */\n\n/* eslint-disable no-unused-vars */\nvar slider = function slider() {\n  var slide = document.querySelectorAll('.portfolio-item'),\n      btn = document.querySelectorAll('.portfolio-btn'),\n      slider = document.querySelector('.portfolio-content');\n\n  var dots = function dots() {\n    var dots = document.querySelector('.portfolio-dots');\n\n    for (var i = 0; i < slide.length; i++) {\n      var li = document.createElement('li');\n      li.classList.add('dot');\n      dots.appendChild(li);\n    }\n  };\n\n  dots();\n  var dot = document.querySelectorAll('.dot');\n  dot[0].classList.add('dot-active');\n  var currentSlide = 0,\n      // Номер слайда\n  interval;\n\n  var prevSlide = function prevSlide(elem, index, strClass) {\n    elem[index].classList.remove(strClass);\n  };\n\n  var nextSlide = function nextSlide(elem, index, strClass) {\n    elem[index].classList.add(strClass);\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  slider.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (!target.matches('#arrow-right, #arrow-left, .dot')) {\n      return;\n    }\n\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n\n    if (target.matches('#arrow-right')) {\n      currentSlide++;\n    } else if (target.matches('#arrow-left')) {\n      currentSlide--;\n    } else if (target.matches('.dot')) {\n      dot.forEach(function (elem, index) {\n        if (elem === target) {\n          currentSlide = index;\n        }\n      });\n    }\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    if (currentSlide < 0) {\n      currentSlide = slide.length - 1;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  });\n  slider.addEventListener('mouseover', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      stopSlide();\n    }\n  });\n  slider.addEventListener('mouseout', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      startSlide(6000);\n    }\n  });\n  startSlide(6000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://3dglo/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-mixed-spaces-and-tabs */\n\n/* eslint-disable no-unused-vars */\nvar tabs = function tabs() {\n  var tabHeader = document.querySelector('.service-header'),\n      tab = document.querySelectorAll('.service-header-tab'),\n      tabContent = document.querySelectorAll('.service-tab'); // Функция смены контента\n\n  var toggleTabContent = function toggleTabContent(index) {\n    for (var i = 0; i < tabContent.length; i++) {\n      if (index === i) {\n        tab[i].classList.add('active');\n        tabContent[i].classList.remove('d-none');\n      } else {\n        tab[i].classList.remove('active');\n        tabContent[i].classList.add('d-none');\n      }\n    }\n  }; // Клики по табам\n\n\n  tabHeader.addEventListener('click', function (event) {\n    var target = event.target;\n    target = target.closest('.service-header-tab'); // проверяем селектор\n\n    if (target) {\n      tab.forEach(function (item, i) {\n        // eslint-disable-next-line no-undef\n        if (item === target) {\n          toggleTabContent(i);\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://3dglo/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-mixed-spaces-and-tabs */\n\n/* eslint-disable no-unused-vars */\nvar toggleMenu = function toggleMenu() {\n  var menu = document.querySelector('menu');\n\n  function handlerMenu() {\n    menu.classList.toggle('active-menu');\n  } // btnMenu.addEventListener('click', handlerMenu);\n  // closeBtn.addEventListener('click', event => {\n  //   event.preventDefault();\n  //   handlerMenu();\n  // });\n  // menuItems.forEach(elem => {\n  //   elem.addEventListener('click', handlerMenu);\n  // });\n\n\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.closest('.menu')) {\n      handlerMenu();\n    }\n\n    if (target.closest('.close-btn')) {\n      event.preventDefault();\n      handlerMenu();\n    }\n\n    if (target.closest('UL>LI>A')) {\n      handlerMenu();\n    } // eslint-disable-next-line max-len\n\n\n    if (!target.closest('.active-menu') && !target.closest('.menu') && target.closest('UL>LI>A')) menu.classList.remove('active-menu');\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://3dglo/./src/modules/toggleMenu.js?");

/***/ }),

/***/ "./src/modules/togglePopUp.js":
/*!************************************!*\
  !*** ./src/modules/togglePopUp.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-mixed-spaces-and-tabs */\n\n/* eslint-disable no-unused-vars */\nvar togglePopUp = function togglePopUp() {\n  var popup = document.querySelector('.popup'),\n      popupBtn = document.querySelectorAll('.popup-btn'),\n      popupContent = document.querySelector('.popup-content'),\n      formBtn = document.querySelector('.form-btn');\n  var count = 0;\n  popupBtn.forEach(function (elem) {\n    elem.addEventListener('click', function () {\n      popup.style.display = 'block';\n\n      function animationPopUp() {\n        count += 7;\n        popupContent.style.top = count + 'px';\n        if (count <= 200) setTimeout(animationPopUp, 8);\n      }\n\n      if (window.screen.width > 768) animationPopUp();\n    });\n  });\n  popup.addEventListener('click', function (event) {\n    var target = event.target; // Закрытие формы на крестик\n\n    if (target.classList.contains('popup-close')) {\n      popup.style.display = 'none';\n      count = 0;\n    } else {\n      target = target.closest('.popup-content');\n\n      if (!target) {\n        popup.style.display = 'none';\n        count = 0; // Закрытие формы нажатием вне формы\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopUp);\n\n//# sourceURL=webpack://3dglo/./src/modules/togglePopUp.js?");

/***/ }),

/***/ "./src/modules/validation.js":
/*!***********************************!*\
  !*** ./src/modules/validation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable max-len */\n\n/* eslint-disable no-mixed-spaces-and-tabs */\n\n/* eslint-disable no-unused-vars */\nvar validation = function validation() {\n  // Валидация калькулятора\n  var inputCalc = document.querySelectorAll('.calc-item');\n  inputCalc.forEach(function (item) {\n    item.addEventListener('input', function () {\n      item.value = item.value.replace(/\\D/g, '');\n    });\n  }); // Валидация формы\n\n  var forms = document.querySelectorAll('form'),\n      inputs = document.querySelectorAll('input'),\n      btn = document.querySelectorAll('.btn');\n  var phoneForm1 = document.querySelectorAll('.form-phone')[0],\n      phoneForm2 = document.querySelectorAll('.form-phone')[1],\n      phoneForm3 = document.querySelectorAll('.form-phone')[2];\n  phoneForm1.setAttribute('minlength', '10');\n  phoneForm2.setAttribute('minlength', '10');\n  phoneForm3.setAttribute('minlength', '10');\n  forms.forEach(function (item) {\n    var errorMsg = document.createElement('div');\n    errorMsg.className = 'error-phone';\n    errorMsg.textContent = \"\\u041D\\u043E\\u043C\\u0435\\u0440 \\u0434\\u043E\\u043B\\u0436\\u0435\\u043D \\u0431\\u044B\\u0442\\u044C \\u0432 \\u0444\\u043E\\u0440\\u043C\\u0430\\u0442\\u0435 +7(XXX)XXX-XX-XX\\n                              \\u041A\\u043E\\u043B\\u0438\\u0447\\u0435\\u0441\\u0442\\u0432\\u043E \\u0441\\u0438\\u043C\\u0432\\u043E\\u043B\\u043E\\u0432: 10\";\n    errorMsg.style.fontSize = '10px';\n    errorMsg.style.color = 'white';\n    item.addEventListener('input', function (event) {\n      var input = event.target; // eslint-disable-next-line max-len\n\n      if (input.id === 'form2-name' || input.id === 'form2-message' || input.id === 'form1-name' || input.id === 'form3-name') {\n        input.value = input.value.replace(/[^а-яё -,.]/ig, '');\n      }\n\n      if (input.id === 'form2-email' || input.id === 'form1-email' || input.id === 'form3-email') {\n        input.value = input.value.replace(/[^a-z0-9@-_.!~*']/ig, '');\n      }\n\n      if (input.id === 'form1-phone' || input.id === 'form2-phone' || input.id === 'form3-phone') {\n        input.value = input.value.replace(/^\\+?[0378]([-()]*\\d){9,11}$/ig, '');\n        item.addEventListener('input', function () {\n          if (input.value.length < 18) {\n            btn[0].disabled = true;\n            btn[4].disabled = true;\n            btn[5].disabled = true;\n            input.insertAdjacentElement('afterend', errorMsg);\n            errorMsg.style.display = 'block';\n          }\n\n          if (input.value.length >= 18) {\n            btn[0].disabled = false;\n            btn[4].disabled = false;\n            btn[5].disabled = false;\n            errorMsg.style.display = 'none';\n          } // if (errorMsg.classList.('error-phone')) {\n          //   errorMsg.classList.remove('error-phone');\n          //   console.log(1);\n          // }\n\n        });\n      }\n    });\n  });\n  inputs.forEach(function (item) {\n    item.addEventListener('blur', function (event) {\n      var input = event.target;\n\n      if (input.id === 'form2-name' || input.id === 'form1-name' || input.id === 'form3-name') {\n        input.value = input.value.replace(/[^а-яё -]/ig, '');\n        input.value = input.value.trim();\n        input.value = input.value.replace(/\\s+/ig, ' ');\n\n        if (input.value.match(/^-+|-+$/)) {\n          input.value = input.value.replace(/^-+|-+$/g, '');\n\n          if (input.value.match(/^\\s+|\\s+$/)) {\n            input.value = input.value.replace(/^\\s+|\\s+$/g, '');\n          }\n        } else {\n          input.value = input.value.replace(/-+/g, '-');\n        } // input.value = input.value.split(/\\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ');\n\n      }\n\n      if (input.id === 'form2-message') {\n        input.value = input.value.replace(/[^а-яё -,.]/ig, '');\n        input.value = input.value.trim();\n        input.value = input.value.replace(/\\s+/ig, ' ');\n      }\n\n      if (input.id === 'form2-email' || input.id === 'form1-email' || input.id === 'form3-email') {\n        input.value = input.value.replace(/[^a-z0-9@-_.!~*']/ig, '');\n        input.value = input.value.trim();\n        input.value = input.value.replace(/\\s+/ig, ' ');\n      }\n\n      if (input.id === 'form1-phone' || input.id === 'form2-phone' || input.id === 'form3-phone') {\n        input.value = input.value.replace(/^\\+?[0378]([-()]*\\d){9,11}$/ig, '');\n        input.value = input.value.trim();\n        input.value = input.value.replace(/\\s+/ig, ' ');\n      }\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\n\n//# sourceURL=webpack://3dglo/./src/modules/validation.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;