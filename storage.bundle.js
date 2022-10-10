/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateLocalStorage": () => (/* binding */ updateLocalStorage)
/* harmony export */ });
/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-list */ "./src/todo-list.js");
  

function updateLocalStorage() {
  localStorage.setItem('allProjects', JSON.stringify(_todo_list__WEBPACK_IMPORTED_MODULE_0__.allProjects));
}


/***/ }),

/***/ "./src/todo-list.js":
/*!**************************!*\
  !*** ./src/todo-list.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allProjects": () => (/* binding */ allProjects),
/* harmony export */   "currentProject": () => (/* binding */ currentProject),
/* harmony export */   "display": () => (/* binding */ display)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos */ "./src/todos.js");



let allStoredProjects = JSON.parse(localStorage.getItem("allProjects"));
const input = document.querySelector("input");
const display = document.querySelector("#display");
const form = document.querySelector("form");
const dateInput = document.querySelector("#date-input");
const priorityBtn = document.querySelector("#priority-btn");
let allProjects = {
  ["all"]:[""],
  ["default-project"]: [],
};

let currentProject = "default-project";

if (allStoredProjects) {
  allProjects = allStoredProjects;
  display.innerHTML = allStoredProjects[currentProject][0];
}

function todo(title, date, priority) {
  return { title, date, priority };
}

function todoList() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();
    storeTodoInProject(input.value, dateInput.value, priorityBtn.textContent);
    addTaskInAll(input.value, dateInput.value, priorityBtn.textContent);
    resetPriority();
    displayNewTodo();
    rememberOldTasks();
    resetInput();
    checkItem();
    (0,_todos__WEBPACK_IMPORTED_MODULE_1__.deleteTask)();
    (0,_storage__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)();
    console.log(allProjects);
  });
}
function storeTodoInProject(todoTitle, todoDate, todoPriority) {
  let project = allProjects[currentProject];
  if (project.length === 0) {
    project[1] = todo(todoTitle, todoDate, todoPriority);
  } else {
    project[project.length] = todo(todoTitle, todoDate, todoPriority);
  }
  return allProjects;
}
function addTaskInAll(todoTitle, todoDate, todoPriority) {
  let project = allProjects["all"];
  if (project.length === 0) {
    project[1] = todo(todoTitle, todoDate, todoPriority);
  } else {
    project[project.length] = todo(todoTitle, todoDate, todoPriority);
  }
  return allProjects;
}
function displayNewTodo() {
  let project = allProjects[currentProject];
  let newTask = project[project.length - 1];
  display.innerHTML += `
        <div class="to-do-item">
          <div>
            <button class="check-mark"></button>
            <div class="to-do" style="display:inline-block">
                ${newTask.title}
            </div>
          </div>
          <div class="date">
              ${newTask.date}
          </div>
          <div class="priority">
              ${newTask.priority}
          </div>
          <div>
            ${(0,_todos__WEBPACK_IMPORTED_MODULE_1__.addDeleteBtn)()}
          </div>
        </div>
        `;
  allProjects["all"][0] += display.innerHTML;
}

function resetInput() {
  form.reset();
}

function checkItem() {
  let checkMarks = document.querySelectorAll(".check-mark");
  checkMarks.forEach((mark) => {
    mark.addEventListener("click", () => {
      mark.parentElement.classList.toggle("check");
      allProjects[currentProject][0] = display.innerHTML;
      (0,_storage__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)();
    });
  });
}

const projectsSection = document.querySelector("#all-projects");

function addProject() {
  switchProjects();
  const addProjectBtn = document.querySelector("#add-project");
  addProjectBtn.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    let name = prompt("what is the name of the new project?");
    if (name !== "") {
      let newProject = document.createElement("button");
      newProject.textContent = name;
      newProject.id = name.split(" ").join("-");
      newProject.className = "project";
      projectsSection.appendChild(newProject);
      createProjectStorage(newProject.id);
      switchProjects();
      (0,_storage__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)();
    }
  });
}
function createProjectStorage(projectTitle) {
  allProjects[projectTitle] = [];
  console.log(allProjects);
}

function switchProjects() {
  let allProjects = document.querySelector("#all-projects");
  let lastProject = allProjects.lastElementChild;
  lastProject.addEventListener("click", () => {
    rememberOldTasks();
    currentProject = lastProject.id;
    if (display.className !== currentProject) {
      display.replaceChildren();
    }
    display.className = lastProject.id;
    highlightProject(lastProject);
    checkItem();
    displayOldTasks();
    checkItem();
    focusInput();
    resetInput();
    resetPriority();
    (0,_todos__WEBPACK_IMPORTED_MODULE_1__.deleteTask)();
    (0,_storage__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)();
  });
}
function focusInput() {
  input.focus();
}
function displayOldTasks() {
  let project = allProjects[currentProject];
  if (project.length !== 0) {
    return (display.innerHTML = project[0]);
  }
}
function rememberOldTasks() {
  let project = allProjects[currentProject];
  project[0] = display.innerHTML;
}
todoList();
addProject();
rememberOldTasks();
displayOldTasks();
checkItem();
function showOldProjects() {
  for (let project in allProjects) {
    console.log(allProjects);
    console.log(project);
    if (project !== "all") {
    let newProject = document.createElement("button");
    newProject.textContent = project.split("-").join(" ");
    newProject.id = project;
    newProject.className = "project";
    projectsSection.appendChild(newProject);
    switchProjects();
    }
  }
}
window.addEventListener("load", (e) => {
  e.stopImmediatePropagation();
  showOldProjects();
});

let clicks = 0;
function changePriority() {
  priorityBtn.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    clicks++;
    if (clicks === 1) {
      priorityBtn.textContent = "Mid";
      priorityBtn.setAttribute("style", "background-color: green;");
    } else if (clicks === 2) {
      priorityBtn.textContent = "High";
      priorityBtn.setAttribute("style", "background-color: red;");
    } else {
      priorityBtn.textContent = "Low";
      priorityBtn.setAttribute("style", "background-color: grey;");
      clicks = 0;
    }
  });
}
changePriority();
function resetPriority() {
  clicks = 0;
  priorityBtn.textContent = "Low";
  priorityBtn.setAttribute("style", "background-color: grey;");
}
function highlightProject(project) {
  const allProjects = document.querySelectorAll(".project");
  allProjects.forEach((project) =>
    project.setAttribute("style", "background-color: rgb(148, 158, 250); box-shadow: none;")
  );
  project.setAttribute(
    "style",
    "background-color: rgb(255 117 141); outline: 2px solid white; box-shadow: 0 0 10px #ff06ff"
  );
}


/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addDeleteBtn": () => (/* binding */ addDeleteBtn),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask)
/* harmony export */ });
/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-list */ "./src/todo-list.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _images_icons8_trash_32_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/icons8-trash-32.png */ "./images/icons8-trash-32.png");



function addDeleteBtn() {
  return `    <div class="delete-task">
    <img class="trash-icon" src="${_images_icons8_trash_32_png__WEBPACK_IMPORTED_MODULE_2__}" alt="image of a trash can"/>
</div>
    `;
}
function deleteTask() {
  const allDeleteBtns = document.querySelectorAll(".trash-icon");
  let btnsArray = [...allDeleteBtns];
  allDeleteBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.parentElement.parentElement.parentElement.remove();
      let index = btnsArray.indexOf(btn) + 1;
      _todo_list__WEBPACK_IMPORTED_MODULE_0__.allProjects[_todo_list__WEBPACK_IMPORTED_MODULE_0__.currentProject].splice(index, 1);
      _todo_list__WEBPACK_IMPORTED_MODULE_0__.allProjects[_todo_list__WEBPACK_IMPORTED_MODULE_0__.currentProject][0] = _todo_list__WEBPACK_IMPORTED_MODULE_0__.display.innerHTML;
      (0,_storage__WEBPACK_IMPORTED_MODULE_1__.updateLocalStorage)();
      console.log(_todo_list__WEBPACK_IMPORTED_MODULE_0__.allProjects);
    });
  });
}
deleteTask();
// import { formatDistance, subDays } from 'date-fns'
// import { Value } from "sass";

// console.log(formatDistance(subDays(new Date(), 4), new Date(), { addSuffix: true }))

// function addTaskToAll() {

// }
// export function defaultDate(value) {
//   if (value === "") {
//     let day = new Date().getDate();
//     let month = new Date().getMonth();
//     let year = new Date().getMonth();
//     return (value = `${day}-${month}-${year}`);
//   }
// }



/***/ }),

/***/ "./images/icons8-trash-32.png":
/*!************************************!*\
  !*** ./images/icons8-trash-32.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cc4081e82b2bb83bc891.png";

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/storage.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSwwQkFBMEIsSUFBSSxHQUFHLE1BQU0sR0FBRyxLQUFLO0FBQy9DO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1VFZkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvLWxpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2Rvcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbFByb2plY3RzIH0gZnJvbSBcIi4vdG9kby1saXN0XCI7ICBcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVMb2NhbFN0b3JhZ2UoKSB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsbFByb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdHMpKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1cGRhdGVMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XHJcbmltcG9ydCB7IGFkZERlbGV0ZUJ0biwgZGVsZXRlVGFzayB9IGZyb20gXCIuL3RvZG9zXCI7XHJcblxyXG5sZXQgYWxsU3RvcmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWxsUHJvamVjdHNcIikpO1xyXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcclxuZXhwb3J0IGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rpc3BsYXlcIik7XHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcclxuY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlLWlucHV0XCIpO1xyXG5jb25zdCBwcmlvcml0eUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHktYnRuXCIpO1xyXG5leHBvcnQgbGV0IGFsbFByb2plY3RzID0ge1xyXG4gIFtcImFsbFwiXTpbXCJcIl0sXHJcbiAgW1wiZGVmYXVsdC1wcm9qZWN0XCJdOiBbXSxcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgY3VycmVudFByb2plY3QgPSBcImRlZmF1bHQtcHJvamVjdFwiO1xyXG5cclxuaWYgKGFsbFN0b3JlZFByb2plY3RzKSB7XHJcbiAgYWxsUHJvamVjdHMgPSBhbGxTdG9yZWRQcm9qZWN0cztcclxuICBkaXNwbGF5LmlubmVySFRNTCA9IGFsbFN0b3JlZFByb2plY3RzW2N1cnJlbnRQcm9qZWN0XVswXTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9kbyh0aXRsZSwgZGF0ZSwgcHJpb3JpdHkpIHtcclxuICByZXR1cm4geyB0aXRsZSwgZGF0ZSwgcHJpb3JpdHkgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9kb0xpc3QoKSB7XHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgc3RvcmVUb2RvSW5Qcm9qZWN0KGlucHV0LnZhbHVlLCBkYXRlSW5wdXQudmFsdWUsIHByaW9yaXR5QnRuLnRleHRDb250ZW50KTtcclxuICAgIGFkZFRhc2tJbkFsbChpbnB1dC52YWx1ZSwgZGF0ZUlucHV0LnZhbHVlLCBwcmlvcml0eUJ0bi50ZXh0Q29udGVudCk7XHJcbiAgICByZXNldFByaW9yaXR5KCk7XHJcbiAgICBkaXNwbGF5TmV3VG9kbygpO1xyXG4gICAgcmVtZW1iZXJPbGRUYXNrcygpO1xyXG4gICAgcmVzZXRJbnB1dCgpO1xyXG4gICAgY2hlY2tJdGVtKCk7XHJcbiAgICBkZWxldGVUYXNrKCk7XHJcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcclxuICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcclxuICB9KTtcclxufVxyXG5mdW5jdGlvbiBzdG9yZVRvZG9JblByb2plY3QodG9kb1RpdGxlLCB0b2RvRGF0ZSwgdG9kb1ByaW9yaXR5KSB7XHJcbiAgbGV0IHByb2plY3QgPSBhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdF07XHJcbiAgaWYgKHByb2plY3QubGVuZ3RoID09PSAwKSB7XHJcbiAgICBwcm9qZWN0WzFdID0gdG9kbyh0b2RvVGl0bGUsIHRvZG9EYXRlLCB0b2RvUHJpb3JpdHkpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBwcm9qZWN0W3Byb2plY3QubGVuZ3RoXSA9IHRvZG8odG9kb1RpdGxlLCB0b2RvRGF0ZSwgdG9kb1ByaW9yaXR5KTtcclxuICB9XHJcbiAgcmV0dXJuIGFsbFByb2plY3RzO1xyXG59XHJcbmZ1bmN0aW9uIGFkZFRhc2tJbkFsbCh0b2RvVGl0bGUsIHRvZG9EYXRlLCB0b2RvUHJpb3JpdHkpIHtcclxuICBsZXQgcHJvamVjdCA9IGFsbFByb2plY3RzW1wiYWxsXCJdO1xyXG4gIGlmIChwcm9qZWN0Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcHJvamVjdFsxXSA9IHRvZG8odG9kb1RpdGxlLCB0b2RvRGF0ZSwgdG9kb1ByaW9yaXR5KTtcclxuICB9IGVsc2Uge1xyXG4gICAgcHJvamVjdFtwcm9qZWN0Lmxlbmd0aF0gPSB0b2RvKHRvZG9UaXRsZSwgdG9kb0RhdGUsIHRvZG9Qcmlvcml0eSk7XHJcbiAgfVxyXG4gIHJldHVybiBhbGxQcm9qZWN0cztcclxufVxyXG5mdW5jdGlvbiBkaXNwbGF5TmV3VG9kbygpIHtcclxuICBsZXQgcHJvamVjdCA9IGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0XTtcclxuICBsZXQgbmV3VGFzayA9IHByb2plY3RbcHJvamVjdC5sZW5ndGggLSAxXTtcclxuICBkaXNwbGF5LmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRvLWRvLWl0ZW1cIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjaGVjay1tYXJrXCI+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0by1kb1wiIHN0eWxlPVwiZGlzcGxheTppbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICR7bmV3VGFzay50aXRsZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlXCI+XHJcbiAgICAgICAgICAgICAgJHtuZXdUYXNrLmRhdGV9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmlvcml0eVwiPlxyXG4gICAgICAgICAgICAgICR7bmV3VGFzay5wcmlvcml0eX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgJHthZGREZWxldGVCdG4oKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgYWxsUHJvamVjdHNbXCJhbGxcIl1bMF0gKz0gZGlzcGxheS5pbm5lckhUTUw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0SW5wdXQoKSB7XHJcbiAgZm9ybS5yZXNldCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0l0ZW0oKSB7XHJcbiAgbGV0IGNoZWNrTWFya3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNoZWNrLW1hcmtcIik7XHJcbiAgY2hlY2tNYXJrcy5mb3JFYWNoKChtYXJrKSA9PiB7XHJcbiAgICBtYXJrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIG1hcmsucGFyZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiY2hlY2tcIik7XHJcbiAgICAgIGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0XVswXSA9IGRpc3BsYXkuaW5uZXJIVE1MO1xyXG4gICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5jb25zdCBwcm9qZWN0c1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FsbC1wcm9qZWN0c1wiKTtcclxuXHJcbmZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XHJcbiAgc3dpdGNoUHJvamVjdHMoKTtcclxuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdFwiKTtcclxuICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgIGxldCBuYW1lID0gcHJvbXB0KFwid2hhdCBpcyB0aGUgbmFtZSBvZiB0aGUgbmV3IHByb2plY3Q/XCIpO1xyXG4gICAgaWYgKG5hbWUgIT09IFwiXCIpIHtcclxuICAgICAgbGV0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICBuZXdQcm9qZWN0LnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgICAgbmV3UHJvamVjdC5pZCA9IG5hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCItXCIpO1xyXG4gICAgICBuZXdQcm9qZWN0LmNsYXNzTmFtZSA9IFwicHJvamVjdFwiO1xyXG4gICAgICBwcm9qZWN0c1NlY3Rpb24uYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XHJcbiAgICAgIGNyZWF0ZVByb2plY3RTdG9yYWdlKG5ld1Byb2plY3QuaWQpO1xyXG4gICAgICBzd2l0Y2hQcm9qZWN0cygpO1xyXG4gICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0U3RvcmFnZShwcm9qZWN0VGl0bGUpIHtcclxuICBhbGxQcm9qZWN0c1twcm9qZWN0VGl0bGVdID0gW107XHJcbiAgY29uc29sZS5sb2coYWxsUHJvamVjdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzd2l0Y2hQcm9qZWN0cygpIHtcclxuICBsZXQgYWxsUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FsbC1wcm9qZWN0c1wiKTtcclxuICBsZXQgbGFzdFByb2plY3QgPSBhbGxQcm9qZWN0cy5sYXN0RWxlbWVudENoaWxkO1xyXG4gIGxhc3RQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICByZW1lbWJlck9sZFRhc2tzKCk7XHJcbiAgICBjdXJyZW50UHJvamVjdCA9IGxhc3RQcm9qZWN0LmlkO1xyXG4gICAgaWYgKGRpc3BsYXkuY2xhc3NOYW1lICE9PSBjdXJyZW50UHJvamVjdCkge1xyXG4gICAgICBkaXNwbGF5LnJlcGxhY2VDaGlsZHJlbigpO1xyXG4gICAgfVxyXG4gICAgZGlzcGxheS5jbGFzc05hbWUgPSBsYXN0UHJvamVjdC5pZDtcclxuICAgIGhpZ2hsaWdodFByb2plY3QobGFzdFByb2plY3QpO1xyXG4gICAgY2hlY2tJdGVtKCk7XHJcbiAgICBkaXNwbGF5T2xkVGFza3MoKTtcclxuICAgIGNoZWNrSXRlbSgpO1xyXG4gICAgZm9jdXNJbnB1dCgpO1xyXG4gICAgcmVzZXRJbnB1dCgpO1xyXG4gICAgcmVzZXRQcmlvcml0eSgpO1xyXG4gICAgZGVsZXRlVGFzaygpO1xyXG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XHJcbiAgfSk7XHJcbn1cclxuZnVuY3Rpb24gZm9jdXNJbnB1dCgpIHtcclxuICBpbnB1dC5mb2N1cygpO1xyXG59XHJcbmZ1bmN0aW9uIGRpc3BsYXlPbGRUYXNrcygpIHtcclxuICBsZXQgcHJvamVjdCA9IGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0XTtcclxuICBpZiAocHJvamVjdC5sZW5ndGggIT09IDApIHtcclxuICAgIHJldHVybiAoZGlzcGxheS5pbm5lckhUTUwgPSBwcm9qZWN0WzBdKTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gcmVtZW1iZXJPbGRUYXNrcygpIHtcclxuICBsZXQgcHJvamVjdCA9IGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0XTtcclxuICBwcm9qZWN0WzBdID0gZGlzcGxheS5pbm5lckhUTUw7XHJcbn1cclxudG9kb0xpc3QoKTtcclxuYWRkUHJvamVjdCgpO1xyXG5yZW1lbWJlck9sZFRhc2tzKCk7XHJcbmRpc3BsYXlPbGRUYXNrcygpO1xyXG5jaGVja0l0ZW0oKTtcclxuZnVuY3Rpb24gc2hvd09sZFByb2plY3RzKCkge1xyXG4gIGZvciAobGV0IHByb2plY3QgaW4gYWxsUHJvamVjdHMpIHtcclxuICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3QpO1xyXG4gICAgaWYgKHByb2plY3QgIT09IFwiYWxsXCIpIHtcclxuICAgIGxldCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSBwcm9qZWN0LnNwbGl0KFwiLVwiKS5qb2luKFwiIFwiKTtcclxuICAgIG5ld1Byb2plY3QuaWQgPSBwcm9qZWN0O1xyXG4gICAgbmV3UHJvamVjdC5jbGFzc05hbWUgPSBcInByb2plY3RcIjtcclxuICAgIHByb2plY3RzU2VjdGlvbi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcclxuICAgIHN3aXRjaFByb2plY3RzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoZSkgPT4ge1xyXG4gIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgc2hvd09sZFByb2plY3RzKCk7XHJcbn0pO1xyXG5cclxubGV0IGNsaWNrcyA9IDA7XHJcbmZ1bmN0aW9uIGNoYW5nZVByaW9yaXR5KCkge1xyXG4gIHByaW9yaXR5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgIGNsaWNrcysrO1xyXG4gICAgaWYgKGNsaWNrcyA9PT0gMSkge1xyXG4gICAgICBwcmlvcml0eUJ0bi50ZXh0Q29udGVudCA9IFwiTWlkXCI7XHJcbiAgICAgIHByaW9yaXR5QnRuLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XCIpO1xyXG4gICAgfSBlbHNlIGlmIChjbGlja3MgPT09IDIpIHtcclxuICAgICAgcHJpb3JpdHlCdG4udGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcclxuICAgICAgcHJpb3JpdHlCdG4uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJpb3JpdHlCdG4udGV4dENvbnRlbnQgPSBcIkxvd1wiO1xyXG4gICAgICBwcmlvcml0eUJ0bi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IGdyZXk7XCIpO1xyXG4gICAgICBjbGlja3MgPSAwO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbmNoYW5nZVByaW9yaXR5KCk7XHJcbmZ1bmN0aW9uIHJlc2V0UHJpb3JpdHkoKSB7XHJcbiAgY2xpY2tzID0gMDtcclxuICBwcmlvcml0eUJ0bi50ZXh0Q29udGVudCA9IFwiTG93XCI7XHJcbiAgcHJpb3JpdHlCdG4uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1wiKTtcclxufVxyXG5mdW5jdGlvbiBoaWdobGlnaHRQcm9qZWN0KHByb2plY3QpIHtcclxuICBjb25zdCBhbGxQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKTtcclxuICBhbGxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PlxyXG4gICAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IHJnYigxNDgsIDE1OCwgMjUwKTsgYm94LXNoYWRvdzogbm9uZTtcIilcclxuICApO1xyXG4gIHByb2plY3Quc2V0QXR0cmlidXRlKFxyXG4gICAgXCJzdHlsZVwiLFxyXG4gICAgXCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1IDExNyAxNDEpOyBvdXRsaW5lOiAycHggc29saWQgd2hpdGU7IGJveC1zaGFkb3c6IDAgMCAxMHB4ICNmZjA2ZmZcIlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYWxsUHJvamVjdHMsIGN1cnJlbnRQcm9qZWN0LCBkaXNwbGF5IH0gZnJvbSBcIi4vdG9kby1saXN0XCI7XHJcbmltcG9ydCB7IHVwZGF0ZUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcclxuaW1wb3J0IHRyYXNoSWNvbiBmcm9tICcuLi9pbWFnZXMvaWNvbnM4LXRyYXNoLTMyLnBuZyc7XHJcbmV4cG9ydCBmdW5jdGlvbiBhZGREZWxldGVCdG4oKSB7XHJcbiAgcmV0dXJuIGAgICAgPGRpdiBjbGFzcz1cImRlbGV0ZS10YXNrXCI+XHJcbiAgICA8aW1nIGNsYXNzPVwidHJhc2gtaWNvblwiIHNyYz1cIiR7dHJhc2hJY29ufVwiIGFsdD1cImltYWdlIG9mIGEgdHJhc2ggY2FuXCIvPlxyXG48L2Rpdj5cclxuICAgIGA7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRhc2soKSB7XHJcbiAgY29uc3QgYWxsRGVsZXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudHJhc2gtaWNvblwiKTtcclxuICBsZXQgYnRuc0FycmF5ID0gWy4uLmFsbERlbGV0ZUJ0bnNdO1xyXG4gIGFsbERlbGV0ZUJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgYnRuLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICBsZXQgaW5kZXggPSBidG5zQXJyYXkuaW5kZXhPZihidG4pICsgMTtcclxuICAgICAgYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RdLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0XVswXSA9IGRpc3BsYXkuaW5uZXJIVE1MO1xyXG4gICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgY29uc29sZS5sb2coYWxsUHJvamVjdHMpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuZGVsZXRlVGFzaygpO1xyXG4vLyBpbXBvcnQgeyBmb3JtYXREaXN0YW5jZSwgc3ViRGF5cyB9IGZyb20gJ2RhdGUtZm5zJ1xyXG4vLyBpbXBvcnQgeyBWYWx1ZSB9IGZyb20gXCJzYXNzXCI7XHJcblxyXG4vLyBjb25zb2xlLmxvZyhmb3JtYXREaXN0YW5jZShzdWJEYXlzKG5ldyBEYXRlKCksIDQpLCBuZXcgRGF0ZSgpLCB7IGFkZFN1ZmZpeDogdHJ1ZSB9KSlcclxuXHJcbi8vIGZ1bmN0aW9uIGFkZFRhc2tUb0FsbCgpIHtcclxuXHJcbi8vIH1cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHREYXRlKHZhbHVlKSB7XHJcbi8vICAgaWYgKHZhbHVlID09PSBcIlwiKSB7XHJcbi8vICAgICBsZXQgZGF5ID0gbmV3IERhdGUoKS5nZXREYXRlKCk7XHJcbi8vICAgICBsZXQgbW9udGggPSBuZXcgRGF0ZSgpLmdldE1vbnRoKCk7XHJcbi8vICAgICBsZXQgeWVhciA9IG5ldyBEYXRlKCkuZ2V0TW9udGgoKTtcclxuLy8gICAgIHJldHVybiAodmFsdWUgPSBgJHtkYXl9LSR7bW9udGh9LSR7eWVhcn1gKTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3N0b3JhZ2UuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=