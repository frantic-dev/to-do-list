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
  ["all"]: [""],
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
        allProjects["all"][0] += `
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
      let deleteProjectBtn = document.createElement("span");
      deleteProjectBtn.textContent = "-";
      newProject.textContent = name;
      newProject.id = name.split(" ").join("-");
      newProject.className = "project";
      projectsSection.appendChild(newProject);
      newProject.appendChild(deleteProjectBtn);
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
      let deleteProjectBtn = document.createElement("span");
      deleteProjectBtn.textContent = "-";
      newProject.appendChild(deleteProjectBtn);
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
    project.setAttribute(
      "style",
      "background-color: rgb(148, 158, 250); box-shadow: none;"
    )
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

function displayDeleteProjectsBtns() {
  let deleteProjectBtns = document.querySelectorAll('.project span');
  deleteProjectBtns.forEach( btn => {
     btn.style.display = "inline-block";
  })
}
let editProjectsBtn = document.querySelector('#edit-projects');
editProjectsBtn.addEventListener('click', displayDeleteProjectsBtns)


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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/todo-list.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kb2xpc3QuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUMxQztBQUNPO0FBQ1AscURBQXFELG1EQUFXO0FBQ2hFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSitDO0FBQ0k7QUFDbkQ7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0RBQVU7QUFDZCxJQUFJLDREQUFrQjtBQUN0QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxjQUFjLG9EQUFZO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLGNBQWMsb0RBQVk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw0REFBa0I7QUFDeEIsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDREQUFrQjtBQUN4QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrREFBVTtBQUNkLElBQUksNERBQWtCO0FBQ3RCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRTtBQUNqRSxNQUFNO0FBQ047QUFDQSwrREFBK0Q7QUFDL0QsTUFBTTtBQUNOO0FBQ0EsZ0VBQWdFO0FBQ2hFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsaUJBQWlCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLDBCQUEwQjtBQUNuRTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbFBtRTtBQUNwQjtBQUNPO0FBQy9DO0FBQ1A7QUFDQSxtQ0FBbUMsd0RBQVMsQ0FBQztBQUM3QztBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sbURBQVcsQ0FBQyxzREFBYztBQUNoQyxNQUFNLG1EQUFXLENBQUMsc0RBQWMsT0FBTyx5REFBaUI7QUFDeEQsTUFBTSw0REFBa0I7QUFDeEIsa0JBQWtCLG1EQUFXO0FBQzdCLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBLFlBQVksMEJBQTBCO0FBQ3RDLFlBQVksUUFBUTtBQUNwQjtBQUNBLG9FQUFvRSxpQkFBaUI7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLElBQUksR0FBRyxNQUFNLEdBQUcsS0FBSztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaERBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztVRWZBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kby1saXN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGxQcm9qZWN0cyB9IGZyb20gXCIuL3RvZG8tbGlzdFwiOyAgXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTG9jYWxTdG9yYWdlKCkge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGxQcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXBkYXRlTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xyXG5pbXBvcnQgeyBhZGREZWxldGVCdG4sIGRlbGV0ZVRhc2sgfSBmcm9tIFwiLi90b2Rvc1wiO1xyXG5cclxubGV0IGFsbFN0b3JlZFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFsbFByb2plY3RzXCIpKTtcclxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XHJcbmV4cG9ydCBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaXNwbGF5XCIpO1xyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XHJcbmNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZS1pbnB1dFwiKTtcclxuY29uc3QgcHJpb3JpdHlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5LWJ0blwiKTtcclxuZXhwb3J0IGxldCBhbGxQcm9qZWN0cyA9IHtcclxuICBbXCJhbGxcIl06IFtcIlwiXSxcclxuICBbXCJkZWZhdWx0LXByb2plY3RcIl06IFtdLFxyXG59O1xyXG5cclxuZXhwb3J0IGxldCBjdXJyZW50UHJvamVjdCA9IFwiZGVmYXVsdC1wcm9qZWN0XCI7XHJcblxyXG5pZiAoYWxsU3RvcmVkUHJvamVjdHMpIHtcclxuICBhbGxQcm9qZWN0cyA9IGFsbFN0b3JlZFByb2plY3RzO1xyXG4gIGRpc3BsYXkuaW5uZXJIVE1MID0gYWxsU3RvcmVkUHJvamVjdHNbY3VycmVudFByb2plY3RdWzBdO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b2RvKHRpdGxlLCBkYXRlLCBwcmlvcml0eSkge1xyXG4gIHJldHVybiB7IHRpdGxlLCBkYXRlLCBwcmlvcml0eSB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b2RvTGlzdCgpIHtcclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICBzdG9yZVRvZG9JblByb2plY3QoaW5wdXQudmFsdWUsIGRhdGVJbnB1dC52YWx1ZSwgcHJpb3JpdHlCdG4udGV4dENvbnRlbnQpO1xyXG4gICAgYWRkVGFza0luQWxsKGlucHV0LnZhbHVlLCBkYXRlSW5wdXQudmFsdWUsIHByaW9yaXR5QnRuLnRleHRDb250ZW50KTtcclxuICAgIHJlc2V0UHJpb3JpdHkoKTtcclxuICAgIGRpc3BsYXlOZXdUb2RvKCk7XHJcbiAgICByZW1lbWJlck9sZFRhc2tzKCk7XHJcbiAgICByZXNldElucHV0KCk7XHJcbiAgICBjaGVja0l0ZW0oKTtcclxuICAgIGRlbGV0ZVRhc2soKTtcclxuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xyXG4gICAgY29uc29sZS5sb2coYWxsUHJvamVjdHMpO1xyXG4gIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHN0b3JlVG9kb0luUHJvamVjdCh0b2RvVGl0bGUsIHRvZG9EYXRlLCB0b2RvUHJpb3JpdHkpIHtcclxuICBsZXQgcHJvamVjdCA9IGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0XTtcclxuICBpZiAocHJvamVjdC5sZW5ndGggPT09IDApIHtcclxuICAgIHByb2plY3RbMV0gPSB0b2RvKHRvZG9UaXRsZSwgdG9kb0RhdGUsIHRvZG9Qcmlvcml0eSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHByb2plY3RbcHJvamVjdC5sZW5ndGhdID0gdG9kbyh0b2RvVGl0bGUsIHRvZG9EYXRlLCB0b2RvUHJpb3JpdHkpO1xyXG4gIH1cclxuICByZXR1cm4gYWxsUHJvamVjdHM7XHJcbn1cclxuZnVuY3Rpb24gYWRkVGFza0luQWxsKHRvZG9UaXRsZSwgdG9kb0RhdGUsIHRvZG9Qcmlvcml0eSkge1xyXG4gIGxldCBwcm9qZWN0ID0gYWxsUHJvamVjdHNbXCJhbGxcIl07XHJcbiAgaWYgKHByb2plY3QubGVuZ3RoID09PSAwKSB7XHJcbiAgICBwcm9qZWN0WzFdID0gdG9kbyh0b2RvVGl0bGUsIHRvZG9EYXRlLCB0b2RvUHJpb3JpdHkpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBwcm9qZWN0W3Byb2plY3QubGVuZ3RoXSA9IHRvZG8odG9kb1RpdGxlLCB0b2RvRGF0ZSwgdG9kb1ByaW9yaXR5KTtcclxuICB9XHJcbiAgcmV0dXJuIGFsbFByb2plY3RzO1xyXG59XHJcbmZ1bmN0aW9uIGRpc3BsYXlOZXdUb2RvKCkge1xyXG4gIGxldCBwcm9qZWN0ID0gYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RdO1xyXG4gIGxldCBuZXdUYXNrID0gcHJvamVjdFtwcm9qZWN0Lmxlbmd0aCAtIDFdO1xyXG4gIGRpc3BsYXkuaW5uZXJIVE1MICs9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwidG8tZG8taXRlbVwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNoZWNrLW1hcmtcIj48L2J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvLWRvXCIgc3R5bGU9XCJkaXNwbGF5OmlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgJHtuZXdUYXNrLnRpdGxlfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGVcIj5cclxuICAgICAgICAgICAgICAke25ld1Rhc2suZGF0ZX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInByaW9yaXR5XCI+XHJcbiAgICAgICAgICAgICAgJHtuZXdUYXNrLnByaW9yaXR5fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAke2FkZERlbGV0ZUJ0bigpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgICAgICBhbGxQcm9qZWN0c1tcImFsbFwiXVswXSArPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRvLWRvLWl0ZW1cIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjaGVjay1tYXJrXCI+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0by1kb1wiIHN0eWxlPVwiZGlzcGxheTppbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICR7bmV3VGFzay50aXRsZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlXCI+XHJcbiAgICAgICAgICAgICAgJHtuZXdUYXNrLmRhdGV9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmlvcml0eVwiPlxyXG4gICAgICAgICAgICAgICR7bmV3VGFzay5wcmlvcml0eX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgJHthZGREZWxldGVCdG4oKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0SW5wdXQoKSB7XHJcbiAgZm9ybS5yZXNldCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0l0ZW0oKSB7XHJcbiAgbGV0IGNoZWNrTWFya3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNoZWNrLW1hcmtcIik7XHJcbiAgY2hlY2tNYXJrcy5mb3JFYWNoKChtYXJrKSA9PiB7XHJcbiAgICBtYXJrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIG1hcmsucGFyZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiY2hlY2tcIik7XHJcbiAgICAgIGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0XVswXSA9IGRpc3BsYXkuaW5uZXJIVE1MO1xyXG4gICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5jb25zdCBwcm9qZWN0c1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FsbC1wcm9qZWN0c1wiKTtcclxuXHJcbmZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XHJcbiAgc3dpdGNoUHJvamVjdHMoKTtcclxuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdFwiKTtcclxuICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgIGxldCBuYW1lID0gcHJvbXB0KFwid2hhdCBpcyB0aGUgbmFtZSBvZiB0aGUgbmV3IHByb2plY3Q/XCIpO1xyXG4gICAgaWYgKG5hbWUgIT09IFwiXCIpIHtcclxuICAgICAgbGV0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICBsZXQgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICBkZWxldGVQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gXCItXCI7XHJcbiAgICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgICBuZXdQcm9qZWN0LmlkID0gbmFtZS5zcGxpdChcIiBcIikuam9pbihcIi1cIik7XHJcbiAgICAgIG5ld1Byb2plY3QuY2xhc3NOYW1lID0gXCJwcm9qZWN0XCI7XHJcbiAgICAgIHByb2plY3RzU2VjdGlvbi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcclxuICAgICAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnRuKTtcclxuICAgICAgY3JlYXRlUHJvamVjdFN0b3JhZ2UobmV3UHJvamVjdC5pZCk7XHJcbiAgICAgIHN3aXRjaFByb2plY3RzKCk7XHJcbiAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RTdG9yYWdlKHByb2plY3RUaXRsZSkge1xyXG4gIGFsbFByb2plY3RzW3Byb2plY3RUaXRsZV0gPSBbXTtcclxuICBjb25zb2xlLmxvZyhhbGxQcm9qZWN0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN3aXRjaFByb2plY3RzKCkge1xyXG4gIGxldCBhbGxQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWxsLXByb2plY3RzXCIpO1xyXG4gIGxldCBsYXN0UHJvamVjdCA9IGFsbFByb2plY3RzLmxhc3RFbGVtZW50Q2hpbGQ7XHJcbiAgbGFzdFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHJlbWVtYmVyT2xkVGFza3MoKTtcclxuICAgIGN1cnJlbnRQcm9qZWN0ID0gbGFzdFByb2plY3QuaWQ7XHJcbiAgICBpZiAoZGlzcGxheS5jbGFzc05hbWUgIT09IGN1cnJlbnRQcm9qZWN0KSB7XHJcbiAgICAgIGRpc3BsYXkucmVwbGFjZUNoaWxkcmVuKCk7XHJcbiAgICB9XHJcbiAgICBkaXNwbGF5LmNsYXNzTmFtZSA9IGxhc3RQcm9qZWN0LmlkO1xyXG4gICAgaGlnaGxpZ2h0UHJvamVjdChsYXN0UHJvamVjdCk7XHJcbiAgICBjaGVja0l0ZW0oKTtcclxuICAgIGRpc3BsYXlPbGRUYXNrcygpO1xyXG4gICAgY2hlY2tJdGVtKCk7XHJcbiAgICBmb2N1c0lucHV0KCk7XHJcbiAgICByZXNldElucHV0KCk7XHJcbiAgICByZXNldFByaW9yaXR5KCk7XHJcbiAgICBkZWxldGVUYXNrKCk7XHJcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcclxuICB9KTtcclxufVxyXG5mdW5jdGlvbiBmb2N1c0lucHV0KCkge1xyXG4gIGlucHV0LmZvY3VzKCk7XHJcbn1cclxuZnVuY3Rpb24gZGlzcGxheU9sZFRhc2tzKCkge1xyXG4gIGxldCBwcm9qZWN0ID0gYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RdO1xyXG4gIGlmIChwcm9qZWN0Lmxlbmd0aCAhPT0gMCkge1xyXG4gICAgcmV0dXJuIChkaXNwbGF5LmlubmVySFRNTCA9IHByb2plY3RbMF0pO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiByZW1lbWJlck9sZFRhc2tzKCkge1xyXG4gIGxldCBwcm9qZWN0ID0gYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RdO1xyXG4gIHByb2plY3RbMF0gPSBkaXNwbGF5LmlubmVySFRNTDtcclxufVxyXG50b2RvTGlzdCgpO1xyXG5hZGRQcm9qZWN0KCk7XHJcbnJlbWVtYmVyT2xkVGFza3MoKTtcclxuZGlzcGxheU9sZFRhc2tzKCk7XHJcbmNoZWNrSXRlbSgpO1xyXG5mdW5jdGlvbiBzaG93T2xkUHJvamVjdHMoKSB7XHJcbiAgZm9yIChsZXQgcHJvamVjdCBpbiBhbGxQcm9qZWN0cykge1xyXG4gICAgY29uc29sZS5sb2coYWxsUHJvamVjdHMpO1xyXG4gICAgY29uc29sZS5sb2cocHJvamVjdCk7XHJcbiAgICBpZiAocHJvamVjdCAhPT0gXCJhbGxcIikge1xyXG4gICAgICBsZXQgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSBwcm9qZWN0LnNwbGl0KFwiLVwiKS5qb2luKFwiIFwiKTtcclxuICAgICAgbmV3UHJvamVjdC5pZCA9IHByb2plY3Q7XHJcbiAgICAgIG5ld1Byb2plY3QuY2xhc3NOYW1lID0gXCJwcm9qZWN0XCI7XHJcbiAgICAgIHByb2plY3RzU2VjdGlvbi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcclxuICAgICAgbGV0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgZGVsZXRlUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IFwiLVwiO1xyXG4gICAgICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdG4pO1xyXG4gICAgICBzd2l0Y2hQcm9qZWN0cygpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKGUpID0+IHtcclxuICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gIHNob3dPbGRQcm9qZWN0cygpO1xyXG59KTtcclxuXHJcbmxldCBjbGlja3MgPSAwO1xyXG5mdW5jdGlvbiBjaGFuZ2VQcmlvcml0eSgpIHtcclxuICBwcmlvcml0eUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICBjbGlja3MrKztcclxuICAgIGlmIChjbGlja3MgPT09IDEpIHtcclxuICAgICAgcHJpb3JpdHlCdG4udGV4dENvbnRlbnQgPSBcIk1pZFwiO1xyXG4gICAgICBwcmlvcml0eUJ0bi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IGdyZWVuO1wiKTtcclxuICAgIH0gZWxzZSBpZiAoY2xpY2tzID09PSAyKSB7XHJcbiAgICAgIHByaW9yaXR5QnRuLnRleHRDb250ZW50ID0gXCJIaWdoXCI7XHJcbiAgICAgIHByaW9yaXR5QnRuLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogcmVkO1wiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHByaW9yaXR5QnRuLnRleHRDb250ZW50ID0gXCJMb3dcIjtcclxuICAgICAgcHJpb3JpdHlCdG4uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1wiKTtcclxuICAgICAgY2xpY2tzID0gMDtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5jaGFuZ2VQcmlvcml0eSgpO1xyXG5mdW5jdGlvbiByZXNldFByaW9yaXR5KCkge1xyXG4gIGNsaWNrcyA9IDA7XHJcbiAgcHJpb3JpdHlCdG4udGV4dENvbnRlbnQgPSBcIkxvd1wiO1xyXG4gIHByaW9yaXR5QnRuLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcIik7XHJcbn1cclxuZnVuY3Rpb24gaGlnaGxpZ2h0UHJvamVjdChwcm9qZWN0KSB7XHJcbiAgY29uc3QgYWxsUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RcIik7XHJcbiAgYWxsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT5cclxuICAgIHByb2plY3Quc2V0QXR0cmlidXRlKFxyXG4gICAgICBcInN0eWxlXCIsXHJcbiAgICAgIFwiYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0OCwgMTU4LCAyNTApOyBib3gtc2hhZG93OiBub25lO1wiXHJcbiAgICApXHJcbiAgKTtcclxuICBwcm9qZWN0LnNldEF0dHJpYnV0ZShcclxuICAgIFwic3R5bGVcIixcclxuICAgIFwiYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSAxMTcgMTQxKTsgb3V0bGluZTogMnB4IHNvbGlkIHdoaXRlOyBib3gtc2hhZG93OiAwIDAgMTBweCAjZmYwNmZmXCJcclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IGFsbFByb2plY3RzLCBjdXJyZW50UHJvamVjdCwgZGlzcGxheSB9IGZyb20gXCIuL3RvZG8tbGlzdFwiO1xyXG5pbXBvcnQgeyB1cGRhdGVMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XHJcbmltcG9ydCB0cmFzaEljb24gZnJvbSAnLi4vaW1hZ2VzL2ljb25zOC10cmFzaC0zMi5wbmcnO1xyXG5leHBvcnQgZnVuY3Rpb24gYWRkRGVsZXRlQnRuKCkge1xyXG4gIHJldHVybiBgICAgIDxkaXYgY2xhc3M9XCJkZWxldGUtdGFza1wiPlxyXG4gICAgPGltZyBjbGFzcz1cInRyYXNoLWljb25cIiBzcmM9XCIke3RyYXNoSWNvbn1cIiBhbHQ9XCJpbWFnZSBvZiBhIHRyYXNoIGNhblwiLz5cclxuPC9kaXY+XHJcbiAgICBgO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVUYXNrKCkge1xyXG4gIGNvbnN0IGFsbERlbGV0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRyYXNoLWljb25cIik7XHJcbiAgbGV0IGJ0bnNBcnJheSA9IFsuLi5hbGxEZWxldGVCdG5zXTtcclxuICBhbGxEZWxldGVCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGJ0bi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgbGV0IGluZGV4ID0gYnRuc0FycmF5LmluZGV4T2YoYnRuKSArIDE7XHJcbiAgICAgIGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICBhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdF1bMF0gPSBkaXNwbGF5LmlubmVySFRNTDtcclxuICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcbmRlbGV0ZVRhc2soKTtcclxuLy8gaW1wb3J0IHsgZm9ybWF0RGlzdGFuY2UsIHN1YkRheXMgfSBmcm9tICdkYXRlLWZucydcclxuLy8gaW1wb3J0IHsgVmFsdWUgfSBmcm9tIFwic2Fzc1wiO1xyXG5cclxuLy8gY29uc29sZS5sb2coZm9ybWF0RGlzdGFuY2Uoc3ViRGF5cyhuZXcgRGF0ZSgpLCA0KSwgbmV3IERhdGUoKSwgeyBhZGRTdWZmaXg6IHRydWUgfSkpXHJcblxyXG4vLyBmdW5jdGlvbiBhZGRUYXNrVG9BbGwoKSB7XHJcblxyXG4vLyB9XHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0RGF0ZSh2YWx1ZSkge1xyXG4vLyAgIGlmICh2YWx1ZSA9PT0gXCJcIikge1xyXG4vLyAgICAgbGV0IGRheSA9IG5ldyBEYXRlKCkuZ2V0RGF0ZSgpO1xyXG4vLyAgICAgbGV0IG1vbnRoID0gbmV3IERhdGUoKS5nZXRNb250aCgpO1xyXG4vLyAgICAgbGV0IHllYXIgPSBuZXcgRGF0ZSgpLmdldE1vbnRoKCk7XHJcbi8vICAgICByZXR1cm4gKHZhbHVlID0gYCR7ZGF5fS0ke21vbnRofS0ke3llYXJ9YCk7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5RGVsZXRlUHJvamVjdHNCdG5zKCkge1xyXG4gIGxldCBkZWxldGVQcm9qZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0IHNwYW4nKTtcclxuICBkZWxldGVQcm9qZWN0QnRucy5mb3JFYWNoKCBidG4gPT4ge1xyXG4gICAgIGJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICB9KVxyXG59XHJcbmxldCBlZGl0UHJvamVjdHNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1wcm9qZWN0cycpO1xyXG5lZGl0UHJvamVjdHNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5RGVsZXRlUHJvamVjdHNCdG5zKVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy90b2RvLWxpc3QuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=