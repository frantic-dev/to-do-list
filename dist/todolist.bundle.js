/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/todo-list.js":
/*!**************************!*\
  !*** ./src/todo-list.js ***!
  \**************************/
/***/ (() => {

eval("const btn = document.querySelector('button');\r\nconst input = document.querySelector('input');\r\nconst display = document.querySelector('#display');\r\n\r\nfunction displayToDo() {\r\n    btn.addEventListener('click', () => {\r\n        display.innerHTML += `\r\n        <div class=\"to-do-item\">\r\n            <button class=\"check-mark\" style=\"padding: 5px\"></button>\r\n            <div class=\"to-do\" style=\"display:inline-block\">\r\n                ${input.value}\r\n            </div>\r\n        </div>\r\n        `\r\n        resetInput();\r\n        checkItem();\r\n    })\r\n}\r\nfunction resetInput() {\r\n    input.value = \"\";\r\n}\r\n\r\ndisplayToDo();\r\nfunction checkItem () {\r\n    let checkMarks = document.querySelectorAll('.check-mark');\r\n    checkMarks.forEach( mark => {\r\n        mark.addEventListener('click', () => {\r\n            if (mark.style.backgroundColor === \"rgb(146 146 255)\") {\r\n                mark.style.backgroundColor = \"white\"\r\n            } else {\r\n                mark.style.backgroundColor = \"rgb(146 146 255)\";\r\n            }\r\n        })\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack://to-do-list/./src/todo-list.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/todo-list.js"]();
/******/ 	
/******/ })()
;