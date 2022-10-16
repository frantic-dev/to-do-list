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
  ["all"]: [],
  ["default-project"]: [],
};

let currentProject = "default-project";

if (allStoredProjects) {
  allProjects = allStoredProjects;
}

function todo(title, date, priority, done) {
  return { title, date, priority, done };
}

function todoList() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();
    if(dateInput.value === "") {
      storeTodoInProject(input.value, (0,_todos__WEBPACK_IMPORTED_MODULE_1__.defaultDate)(), priorityBtn.textContent);
      if(currentProject !== 'all') addTaskInAll(input.value, (0,_todos__WEBPACK_IMPORTED_MODULE_1__.defaultDate)(), priorityBtn.textContent);
    } else {
      storeTodoInProject(input.value, dateInput.value, priorityBtn.textContent);
      if(currentProject !== 'all') addTaskInAll(input.value, dateInput.value, priorityBtn.textContent); 
    }
    resetPriority();
    displayNewTodo();
    resetInput();
    checkItem();
    (0,_todos__WEBPACK_IMPORTED_MODULE_1__.deleteTask)();
    (0,_todos__WEBPACK_IMPORTED_MODULE_1__.updateTasksScore)();
    (0,_storage__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)();
    console.log(allProjects);
  });
}
function storeTodoInProject(todoTitle, todoDate, todoPriority) {
  let project = allProjects[currentProject];
  project[project.length] = todo(todoTitle, todoDate, todoPriority, "no");
  return allProjects;
}
function addTaskInAll(todoTitle, todoDate, todoPriority) {
  let project = allProjects["all"];
  project[project.length] = todo(todoTitle, todoDate, todoPriority, "no");
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
          <div class="priority ${newTask.priority}">
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
    let index = [...checkMarks].indexOf(mark);
    let task = allProjects[currentProject][index];
    mark.addEventListener("click", () => {
      checkMarks = document.querySelectorAll(".check-mark");
      if (task.done === "yes") {
        task.done = "no";
        mark.parentElement.classList.remove("check");
      } else {
        task.done = "yes";
        mark.parentElement.className = "check";
      } 
      console.log(index)
        console.log(allProjects[currentProject][index].done);
        (0,_todos__WEBPACK_IMPORTED_MODULE_1__.updateTasksScore)();
        (0,_storage__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)();
      });
  });
}

const projectsSection = document.querySelector("#all-projects");

function addProject() {
  const addProjectBtn = document.querySelector("#add-project");
  addProjectBtn.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    let name = prompt("what is the name of the new project?");
    if (name !== "" && name !== null) {
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
  let Projects = document.querySelector("#all-projects");
  let lastProject = Projects.lastElementChild;
  lastProject.addEventListener("click", () => {
    currentProject = lastProject.id;
    if (display.className !== currentProject) {
      display.replaceChildren();
    }
    display.className = lastProject.id;
    highlightProject(lastProject);
    checkItem();
    displayOldTasks();
    focusInput();
    resetInput();
    resetPriority();
    (0,_todos__WEBPACK_IMPORTED_MODULE_1__.deleteTask)();
    (0,_todos__WEBPACK_IMPORTED_MODULE_1__.updateTasksScore)();
    (0,_storage__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)();
    console.log(allProjects)
  });
}
function focusInput() {
  input.focus();
}
function displayOldTasks() {
  let displayTasks = "";
  let project = allProjects[currentProject];
  if(Object.keys(allProjects).length !== 0){
  project.forEach((task) => {
    displayTasks += `
    <div class="to-do-item">
      <div>
        <button class="check-mark"></button>
        <div class="to-do" style="display:inline-block">
            ${task.title}
        </div>
      </div>
      <div class="date">
          ${task.date}
      </div>
      <div class="priority ${task.priority}">
          ${task.priority}
      </div>
      <div>
        ${(0,_todos__WEBPACK_IMPORTED_MODULE_1__.addDeleteBtn)()}
      </div>
    </div>
    `;
  });
  display.innerHTML = displayTasks;
  rememberOldCheckedItems();
  checkItem();
  (0,_todos__WEBPACK_IMPORTED_MODULE_1__.deleteTask)();
}
}

function rememberOldCheckedItems() {
  let project = allProjects[currentProject];
  project.forEach((task) => {
    let index = project.indexOf(task);
    let Items  = document.querySelectorAll('.to-do-item');
    if (task.done === "yes") {
      let targetDiv = Items[index].firstElementChild;
      targetDiv.className = "check";
    } else {
      let targetDiv = Items[index].firstElementChild;
      targetDiv.classList.remove("check");
    }
  })
};

todoList();
addProject();
setTimeout(() => {
  displayOldTasks();
  (0,_todos__WEBPACK_IMPORTED_MODULE_1__.updateTasksScore)();
}, 500); 
checkItem();
function showOldProjects() {
  for (let project in allProjects) {
    console.log(allProjects);
    console.log(project);
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
/* harmony export */   "defaultDate": () => (/* binding */ defaultDate),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "updateTasksScore": () => (/* binding */ updateTasksScore)
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
  let allDeleteBtns = document.querySelectorAll(".trash-icon");
  let btnsArray = [...allDeleteBtns];
  allDeleteBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      allDeleteBtns = document.querySelectorAll(".trash-icon");
      btnsArray = [...allDeleteBtns];
      let index = btnsArray.indexOf(btn);
      console.log(index);
      console.log(_todo_list__WEBPACK_IMPORTED_MODULE_0__.allProjects[_todo_list__WEBPACK_IMPORTED_MODULE_0__.currentProject][index]);
      if (_todo_list__WEBPACK_IMPORTED_MODULE_0__.currentProject !== "all") deleteFromAll(_todo_list__WEBPACK_IMPORTED_MODULE_0__.allProjects[_todo_list__WEBPACK_IMPORTED_MODULE_0__.currentProject][index]);
      btn.parentElement.parentElement.parentElement.remove();
      _todo_list__WEBPACK_IMPORTED_MODULE_0__.allProjects[_todo_list__WEBPACK_IMPORTED_MODULE_0__.currentProject].splice(index, 1);
      updateTasksScore();
      (0,_storage__WEBPACK_IMPORTED_MODULE_1__.updateLocalStorage)();
      console.log(_todo_list__WEBPACK_IMPORTED_MODULE_0__.allProjects);
    });
  });
}
function deleteFromAll(deletedProp) {
  let index = _todo_list__WEBPACK_IMPORTED_MODULE_0__.allProjects.all.findIndex(
    (prop) => prop.title === deletedProp.title
  );
  console.log(index);
  if(index !== -1) _todo_list__WEBPACK_IMPORTED_MODULE_0__.allProjects.all.splice(index, 1);
}

function defaultDate() {
    let day = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear() ;
    return `${year}-${month}-${day}`;
}
let dateInput = document.querySelector('#date-input');
dateInput.setAttribute('min', `${defaultDate()}`)

function displayDeleteProjectsBtns() {
  let deleteProjectBtns = document.querySelectorAll(".project span");
  deleteProjectBtns.forEach((btn) => {
    btn.style.display = "inline-block";
    btn.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      let index = [...deleteProjectBtns].indexOf(btn);
      let targetProject = deleteProjectBtns[index].parentElement;
      targetProject.remove();
      delete _todo_list__WEBPACK_IMPORTED_MODULE_0__.allProjects[targetProject.id];
      console.log(targetProject.id);
      console.log(_todo_list__WEBPACK_IMPORTED_MODULE_0__.allProjects);
      (0,_storage__WEBPACK_IMPORTED_MODULE_1__.updateLocalStorage)();
    });
  });
}
let editProjectsBtn = document.querySelector("#edit-projects");
editProjectsBtn.addEventListener("click",displayDeleteProjectsBtns);

window.addEventListener("click", (e) => {
  if (e.target !== editProjectsBtn) {
    let deleteProjectBtns = document.querySelectorAll(".project span");
    deleteProjectBtns.forEach((btn) => {
      btn.style.display = "none";
    });
  }
});
function updateTasksScore () {
  let scoreDiv = document.querySelector('#tasks-score');
  let tasksTotal = document.querySelectorAll('.to-do-item').length;
  let completedTasksScore = document.querySelectorAll('.check').length;
  let uncompletedTasksScore = tasksTotal - completedTasksScore;
  scoreDiv.textContent = `Total: ${tasksTotal} Completed: ${completedTasksScore} Rest: ${uncompletedTasksScore}`;
}


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7VUVmQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZG8tbGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZG9zLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsUHJvamVjdHMgfSBmcm9tIFwiLi90b2RvLWxpc3RcIjsgIFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUxvY2FsU3RvcmFnZSgpIHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWxsUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShhbGxQcm9qZWN0cykpO1xyXG59XHJcbiIsImltcG9ydCB7IHVwZGF0ZUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcclxuaW1wb3J0IHsgYWRkRGVsZXRlQnRuLCBkZWxldGVUYXNrLCB1cGRhdGVUYXNrc1Njb3JlICwgZGVmYXVsdERhdGV9IGZyb20gXCIuL3RvZG9zXCI7XHJcblxyXG5sZXQgYWxsU3RvcmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWxsUHJvamVjdHNcIikpO1xyXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcclxuZXhwb3J0IGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rpc3BsYXlcIik7XHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcclxuY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlLWlucHV0XCIpO1xyXG5jb25zdCBwcmlvcml0eUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHktYnRuXCIpO1xyXG5leHBvcnQgbGV0IGFsbFByb2plY3RzID0ge1xyXG4gIFtcImFsbFwiXTogW10sXHJcbiAgW1wiZGVmYXVsdC1wcm9qZWN0XCJdOiBbXSxcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgY3VycmVudFByb2plY3QgPSBcImRlZmF1bHQtcHJvamVjdFwiO1xyXG5cclxuaWYgKGFsbFN0b3JlZFByb2plY3RzKSB7XHJcbiAgYWxsUHJvamVjdHMgPSBhbGxTdG9yZWRQcm9qZWN0cztcclxufVxyXG5cclxuZnVuY3Rpb24gdG9kbyh0aXRsZSwgZGF0ZSwgcHJpb3JpdHksIGRvbmUpIHtcclxuICByZXR1cm4geyB0aXRsZSwgZGF0ZSwgcHJpb3JpdHksIGRvbmUgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9kb0xpc3QoKSB7XHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgaWYoZGF0ZUlucHV0LnZhbHVlID09PSBcIlwiKSB7XHJcbiAgICAgIHN0b3JlVG9kb0luUHJvamVjdChpbnB1dC52YWx1ZSwgZGVmYXVsdERhdGUoKSwgcHJpb3JpdHlCdG4udGV4dENvbnRlbnQpO1xyXG4gICAgICBpZihjdXJyZW50UHJvamVjdCAhPT0gJ2FsbCcpIGFkZFRhc2tJbkFsbChpbnB1dC52YWx1ZSwgZGVmYXVsdERhdGUoKSwgcHJpb3JpdHlCdG4udGV4dENvbnRlbnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3RvcmVUb2RvSW5Qcm9qZWN0KGlucHV0LnZhbHVlLCBkYXRlSW5wdXQudmFsdWUsIHByaW9yaXR5QnRuLnRleHRDb250ZW50KTtcclxuICAgICAgaWYoY3VycmVudFByb2plY3QgIT09ICdhbGwnKSBhZGRUYXNrSW5BbGwoaW5wdXQudmFsdWUsIGRhdGVJbnB1dC52YWx1ZSwgcHJpb3JpdHlCdG4udGV4dENvbnRlbnQpOyBcclxuICAgIH1cclxuICAgIHJlc2V0UHJpb3JpdHkoKTtcclxuICAgIGRpc3BsYXlOZXdUb2RvKCk7XHJcbiAgICByZXNldElucHV0KCk7XHJcbiAgICBjaGVja0l0ZW0oKTtcclxuICAgIGRlbGV0ZVRhc2soKTtcclxuICAgIHVwZGF0ZVRhc2tzU2NvcmUoKTtcclxuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xyXG4gICAgY29uc29sZS5sb2coYWxsUHJvamVjdHMpO1xyXG4gIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHN0b3JlVG9kb0luUHJvamVjdCh0b2RvVGl0bGUsIHRvZG9EYXRlLCB0b2RvUHJpb3JpdHkpIHtcclxuICBsZXQgcHJvamVjdCA9IGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0XTtcclxuICBwcm9qZWN0W3Byb2plY3QubGVuZ3RoXSA9IHRvZG8odG9kb1RpdGxlLCB0b2RvRGF0ZSwgdG9kb1ByaW9yaXR5LCBcIm5vXCIpO1xyXG4gIHJldHVybiBhbGxQcm9qZWN0cztcclxufVxyXG5mdW5jdGlvbiBhZGRUYXNrSW5BbGwodG9kb1RpdGxlLCB0b2RvRGF0ZSwgdG9kb1ByaW9yaXR5KSB7XHJcbiAgbGV0IHByb2plY3QgPSBhbGxQcm9qZWN0c1tcImFsbFwiXTtcclxuICBwcm9qZWN0W3Byb2plY3QubGVuZ3RoXSA9IHRvZG8odG9kb1RpdGxlLCB0b2RvRGF0ZSwgdG9kb1ByaW9yaXR5LCBcIm5vXCIpO1xyXG4gIHJldHVybiBhbGxQcm9qZWN0cztcclxufVxyXG5mdW5jdGlvbiBkaXNwbGF5TmV3VG9kbygpIHtcclxuICBsZXQgcHJvamVjdCA9IGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0XTtcclxuICBsZXQgbmV3VGFzayA9IHByb2plY3RbcHJvamVjdC5sZW5ndGggLSAxXTtcclxuICBkaXNwbGF5LmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRvLWRvLWl0ZW1cIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjaGVjay1tYXJrXCI+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0by1kb1wiIHN0eWxlPVwiZGlzcGxheTppbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICR7bmV3VGFzay50aXRsZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlXCI+XHJcbiAgICAgICAgICAgICAgJHtuZXdUYXNrLmRhdGV9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmlvcml0eSAke25ld1Rhc2sucHJpb3JpdHl9XCI+XHJcbiAgICAgICAgICAgICAgJHtuZXdUYXNrLnByaW9yaXR5fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAke2FkZERlbGV0ZUJ0bigpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRJbnB1dCgpIHtcclxuICBmb3JtLnJlc2V0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrSXRlbSgpIHtcclxuICBsZXQgY2hlY2tNYXJrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hlY2stbWFya1wiKTtcclxuICBjaGVja01hcmtzLmZvckVhY2goKG1hcmspID0+IHtcclxuICAgIGxldCBpbmRleCA9IFsuLi5jaGVja01hcmtzXS5pbmRleE9mKG1hcmspO1xyXG4gICAgbGV0IHRhc2sgPSBhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdF1baW5kZXhdO1xyXG4gICAgbWFyay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBjaGVja01hcmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaGVjay1tYXJrXCIpO1xyXG4gICAgICBpZiAodGFzay5kb25lID09PSBcInllc1wiKSB7XHJcbiAgICAgICAgdGFzay5kb25lID0gXCJub1wiO1xyXG4gICAgICAgIG1hcmsucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiY2hlY2tcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGFzay5kb25lID0gXCJ5ZXNcIjtcclxuICAgICAgICBtYXJrLnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lID0gXCJjaGVja1wiO1xyXG4gICAgICB9IFxyXG4gICAgICBjb25zb2xlLmxvZyhpbmRleClcclxuICAgICAgICBjb25zb2xlLmxvZyhhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdF1baW5kZXhdLmRvbmUpO1xyXG4gICAgICAgIHVwZGF0ZVRhc2tzU2NvcmUoKTtcclxuICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IHByb2plY3RzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWxsLXByb2plY3RzXCIpO1xyXG5cclxuZnVuY3Rpb24gYWRkUHJvamVjdCgpIHtcclxuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdFwiKTtcclxuICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgIGxldCBuYW1lID0gcHJvbXB0KFwid2hhdCBpcyB0aGUgbmFtZSBvZiB0aGUgbmV3IHByb2plY3Q/XCIpO1xyXG4gICAgaWYgKG5hbWUgIT09IFwiXCIgJiYgbmFtZSAhPT0gbnVsbCkge1xyXG4gICAgICBsZXQgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgIGxldCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgIGRlbGV0ZVByb2plY3RCdG4udGV4dENvbnRlbnQgPSBcIi1cIjtcclxuICAgICAgbmV3UHJvamVjdC50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgICAgIG5ld1Byb2plY3QuaWQgPSBuYW1lLnNwbGl0KFwiIFwiKS5qb2luKFwiLVwiKTtcclxuICAgICAgbmV3UHJvamVjdC5jbGFzc05hbWUgPSBcInByb2plY3RcIjtcclxuICAgICAgcHJvamVjdHNTZWN0aW9uLmFwcGVuZENoaWxkKG5ld1Byb2plY3QpO1xyXG4gICAgICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdG4pO1xyXG4gICAgICBjcmVhdGVQcm9qZWN0U3RvcmFnZShuZXdQcm9qZWN0LmlkKTtcclxuICAgICAgc3dpdGNoUHJvamVjdHMoKTtcclxuICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdFN0b3JhZ2UocHJvamVjdFRpdGxlKSB7XHJcbiAgYWxsUHJvamVjdHNbcHJvamVjdFRpdGxlXSA9IFtdO1xyXG4gIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3dpdGNoUHJvamVjdHMoKSB7XHJcbiAgbGV0IFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhbGwtcHJvamVjdHNcIik7XHJcbiAgbGV0IGxhc3RQcm9qZWN0ID0gUHJvamVjdHMubGFzdEVsZW1lbnRDaGlsZDtcclxuICBsYXN0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgY3VycmVudFByb2plY3QgPSBsYXN0UHJvamVjdC5pZDtcclxuICAgIGlmIChkaXNwbGF5LmNsYXNzTmFtZSAhPT0gY3VycmVudFByb2plY3QpIHtcclxuICAgICAgZGlzcGxheS5yZXBsYWNlQ2hpbGRyZW4oKTtcclxuICAgIH1cclxuICAgIGRpc3BsYXkuY2xhc3NOYW1lID0gbGFzdFByb2plY3QuaWQ7XHJcbiAgICBoaWdobGlnaHRQcm9qZWN0KGxhc3RQcm9qZWN0KTtcclxuICAgIGNoZWNrSXRlbSgpO1xyXG4gICAgZGlzcGxheU9sZFRhc2tzKCk7XHJcbiAgICBmb2N1c0lucHV0KCk7XHJcbiAgICByZXNldElucHV0KCk7XHJcbiAgICByZXNldFByaW9yaXR5KCk7XHJcbiAgICBkZWxldGVUYXNrKCk7XHJcbiAgICB1cGRhdGVUYXNrc1Njb3JlKCk7XHJcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcclxuICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKVxyXG4gIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGZvY3VzSW5wdXQoKSB7XHJcbiAgaW5wdXQuZm9jdXMoKTtcclxufVxyXG5mdW5jdGlvbiBkaXNwbGF5T2xkVGFza3MoKSB7XHJcbiAgbGV0IGRpc3BsYXlUYXNrcyA9IFwiXCI7XHJcbiAgbGV0IHByb2plY3QgPSBhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdF07XHJcbiAgaWYoT2JqZWN0LmtleXMoYWxsUHJvamVjdHMpLmxlbmd0aCAhPT0gMCl7XHJcbiAgcHJvamVjdC5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICBkaXNwbGF5VGFza3MgKz0gYFxyXG4gICAgPGRpdiBjbGFzcz1cInRvLWRvLWl0ZW1cIj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2hlY2stbWFya1wiPjwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0by1kb1wiIHN0eWxlPVwiZGlzcGxheTppbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgJHt0YXNrLnRpdGxlfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImRhdGVcIj5cclxuICAgICAgICAgICR7dGFzay5kYXRlfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInByaW9yaXR5ICR7dGFzay5wcmlvcml0eX1cIj5cclxuICAgICAgICAgICR7dGFzay5wcmlvcml0eX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgJHthZGREZWxldGVCdG4oKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgfSk7XHJcbiAgZGlzcGxheS5pbm5lckhUTUwgPSBkaXNwbGF5VGFza3M7XHJcbiAgcmVtZW1iZXJPbGRDaGVja2VkSXRlbXMoKTtcclxuICBjaGVja0l0ZW0oKTtcclxuICBkZWxldGVUYXNrKCk7XHJcbn1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtZW1iZXJPbGRDaGVja2VkSXRlbXMoKSB7XHJcbiAgbGV0IHByb2plY3QgPSBhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdF07XHJcbiAgcHJvamVjdC5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICBsZXQgaW5kZXggPSBwcm9qZWN0LmluZGV4T2YodGFzayk7XHJcbiAgICBsZXQgSXRlbXMgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvLWRvLWl0ZW0nKTtcclxuICAgIGlmICh0YXNrLmRvbmUgPT09IFwieWVzXCIpIHtcclxuICAgICAgbGV0IHRhcmdldERpdiA9IEl0ZW1zW2luZGV4XS5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgICAgdGFyZ2V0RGl2LmNsYXNzTmFtZSA9IFwiY2hlY2tcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCB0YXJnZXREaXYgPSBJdGVtc1tpbmRleF0uZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgIHRhcmdldERpdi5jbGFzc0xpc3QucmVtb3ZlKFwiY2hlY2tcIik7XHJcbiAgICB9XHJcbiAgfSlcclxufTtcclxuXHJcbnRvZG9MaXN0KCk7XHJcbmFkZFByb2plY3QoKTtcclxuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgZGlzcGxheU9sZFRhc2tzKCk7XHJcbiAgdXBkYXRlVGFza3NTY29yZSgpO1xyXG59LCA1MDApOyBcclxuY2hlY2tJdGVtKCk7XHJcbmZ1bmN0aW9uIHNob3dPbGRQcm9qZWN0cygpIHtcclxuICBmb3IgKGxldCBwcm9qZWN0IGluIGFsbFByb2plY3RzKSB7XHJcbiAgICBjb25zb2xlLmxvZyhhbGxQcm9qZWN0cyk7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcclxuICAgIGxldCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSBwcm9qZWN0LnNwbGl0KFwiLVwiKS5qb2luKFwiIFwiKTtcclxuICAgIG5ld1Byb2plY3QuaWQgPSBwcm9qZWN0O1xyXG4gICAgbmV3UHJvamVjdC5jbGFzc05hbWUgPSBcInByb2plY3RcIjtcclxuICAgIHByb2plY3RzU2VjdGlvbi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcclxuICAgIGxldCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBkZWxldGVQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gXCItXCI7XHJcbiAgICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdG4pO1xyXG4gICAgc3dpdGNoUHJvamVjdHMoKTtcclxuICB9XHJcbn1cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIChlKSA9PiB7XHJcbiAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICBzaG93T2xkUHJvamVjdHMoKTtcclxufSk7XHJcblxyXG5sZXQgY2xpY2tzID0gMDtcclxuZnVuY3Rpb24gY2hhbmdlUHJpb3JpdHkoKSB7XHJcbiAgcHJpb3JpdHlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgY2xpY2tzKys7XHJcbiAgICBpZiAoY2xpY2tzID09PSAxKSB7XHJcbiAgICAgIHByaW9yaXR5QnRuLnRleHRDb250ZW50ID0gXCJNaWRcIjtcclxuICAgICAgcHJpb3JpdHlCdG4uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcIik7XHJcbiAgICB9IGVsc2UgaWYgKGNsaWNrcyA9PT0gMikge1xyXG4gICAgICBwcmlvcml0eUJ0bi50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xyXG4gICAgICBwcmlvcml0eUJ0bi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IHJlZDtcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwcmlvcml0eUJ0bi50ZXh0Q29udGVudCA9IFwiTG93XCI7XHJcbiAgICAgIHByaW9yaXR5QnRuLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcIik7XHJcbiAgICAgIGNsaWNrcyA9IDA7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuY2hhbmdlUHJpb3JpdHkoKTtcclxuZnVuY3Rpb24gcmVzZXRQcmlvcml0eSgpIHtcclxuICBjbGlja3MgPSAwO1xyXG4gIHByaW9yaXR5QnRuLnRleHRDb250ZW50ID0gXCJMb3dcIjtcclxuICBwcmlvcml0eUJ0bi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IGdyZXk7XCIpO1xyXG59XHJcbmZ1bmN0aW9uIGhpZ2hsaWdodFByb2plY3QocHJvamVjdCkge1xyXG4gIGNvbnN0IGFsbFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpO1xyXG4gIGFsbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+XHJcbiAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZShcclxuICAgICAgXCJzdHlsZVwiLFxyXG4gICAgICBcImJhY2tncm91bmQtY29sb3I6IHJnYigxNDgsIDE1OCwgMjUwKTsgYm94LXNoYWRvdzogbm9uZTtcIlxyXG4gICAgKVxyXG4gICk7XHJcbiAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoXHJcbiAgICBcInN0eWxlXCIsXHJcbiAgICBcImJhY2tncm91bmQtY29sb3I6IHJnYigyNTUgMTE3IDE0MSk7IG91dGxpbmU6IDJweCBzb2xpZCB3aGl0ZTsgYm94LXNoYWRvdzogMCAwIDEwcHggI2ZmMDZmZlwiXHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBhbGxQcm9qZWN0cywgY3VycmVudFByb2plY3QgfSBmcm9tIFwiLi90b2RvLWxpc3RcIjtcclxuaW1wb3J0IHsgdXBkYXRlTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xyXG5pbXBvcnQgdHJhc2hJY29uIGZyb20gXCIuLi9pbWFnZXMvaWNvbnM4LXRyYXNoLTMyLnBuZ1wiO1xyXG5leHBvcnQgZnVuY3Rpb24gYWRkRGVsZXRlQnRuKCkge1xyXG4gIHJldHVybiBgICAgIDxkaXYgY2xhc3M9XCJkZWxldGUtdGFza1wiPlxyXG4gICAgPGltZyBjbGFzcz1cInRyYXNoLWljb25cIiBzcmM9XCIke3RyYXNoSWNvbn1cIiBhbHQ9XCJpbWFnZSBvZiBhIHRyYXNoIGNhblwiLz5cclxuPC9kaXY+XHJcbiAgICBgO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVUYXNrKCkge1xyXG4gIGxldCBhbGxEZWxldGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50cmFzaC1pY29uXCIpO1xyXG4gIGxldCBidG5zQXJyYXkgPSBbLi4uYWxsRGVsZXRlQnRuc107XHJcbiAgYWxsRGVsZXRlQnRucy5mb3JFYWNoKChidG4pID0+IHtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgYWxsRGVsZXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudHJhc2gtaWNvblwiKTtcclxuICAgICAgYnRuc0FycmF5ID0gWy4uLmFsbERlbGV0ZUJ0bnNdO1xyXG4gICAgICBsZXQgaW5kZXggPSBidG5zQXJyYXkuaW5kZXhPZihidG4pO1xyXG4gICAgICBjb25zb2xlLmxvZyhpbmRleCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0XVtpbmRleF0pO1xyXG4gICAgICBpZiAoY3VycmVudFByb2plY3QgIT09IFwiYWxsXCIpIGRlbGV0ZUZyb21BbGwoYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RdW2luZGV4XSk7XHJcbiAgICAgIGJ0bi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RdLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIHVwZGF0ZVRhc2tzU2NvcmUoKTtcclxuICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGRlbGV0ZUZyb21BbGwoZGVsZXRlZFByb3ApIHtcclxuICBsZXQgaW5kZXggPSBhbGxQcm9qZWN0c1tcImFsbFwiXS5maW5kSW5kZXgoXHJcbiAgICAocHJvcCkgPT4gcHJvcC50aXRsZSA9PT0gZGVsZXRlZFByb3AudGl0bGVcclxuICApO1xyXG4gIGNvbnNvbGUubG9nKGluZGV4KTtcclxuICBpZihpbmRleCAhPT0gLTEpIGFsbFByb2plY3RzW1wiYWxsXCJdLnNwbGljZShpbmRleCwgMSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0RGF0ZSgpIHtcclxuICAgIGxldCBkYXkgPSBuZXcgRGF0ZSgpLmdldERhdGUoKTtcclxuICAgIGxldCBtb250aCA9IG5ldyBEYXRlKCkuZ2V0TW9udGgoKSArIDE7XHJcbiAgICBsZXQgeWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSA7XHJcbiAgICByZXR1cm4gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YDtcclxufVxyXG5sZXQgZGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUtaW5wdXQnKTtcclxuZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnbWluJywgYCR7ZGVmYXVsdERhdGUoKX1gKVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheURlbGV0ZVByb2plY3RzQnRucygpIHtcclxuICBsZXQgZGVsZXRlUHJvamVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3Qgc3BhblwiKTtcclxuICBkZWxldGVQcm9qZWN0QnRucy5mb3JFYWNoKChidG4pID0+IHtcclxuICAgIGJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgbGV0IGluZGV4ID0gWy4uLmRlbGV0ZVByb2plY3RCdG5zXS5pbmRleE9mKGJ0bik7XHJcbiAgICAgIGxldCB0YXJnZXRQcm9qZWN0ID0gZGVsZXRlUHJvamVjdEJ0bnNbaW5kZXhdLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgIHRhcmdldFByb2plY3QucmVtb3ZlKCk7XHJcbiAgICAgIGRlbGV0ZSBhbGxQcm9qZWN0c1t0YXJnZXRQcm9qZWN0LmlkXTtcclxuICAgICAgY29uc29sZS5sb2codGFyZ2V0UHJvamVjdC5pZCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcclxuICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5sZXQgZWRpdFByb2plY3RzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXByb2plY3RzXCIpO1xyXG5lZGl0UHJvamVjdHNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZGlzcGxheURlbGV0ZVByb2plY3RzQnRucyk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgaWYgKGUudGFyZ2V0ICE9PSBlZGl0UHJvamVjdHNCdG4pIHtcclxuICAgIGxldCBkZWxldGVQcm9qZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdCBzcGFuXCIpO1xyXG4gICAgZGVsZXRlUHJvamVjdEJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICAgIGJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVGFza3NTY29yZSAoKSB7XHJcbiAgbGV0IHNjb3JlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tzLXNjb3JlJyk7XHJcbiAgbGV0IHRhc2tzVG90YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG8tZG8taXRlbScpLmxlbmd0aDtcclxuICBsZXQgY29tcGxldGVkVGFza3NTY29yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVjaycpLmxlbmd0aDtcclxuICBsZXQgdW5jb21wbGV0ZWRUYXNrc1Njb3JlID0gdGFza3NUb3RhbCAtIGNvbXBsZXRlZFRhc2tzU2NvcmU7XHJcbiAgc2NvcmVEaXYudGV4dENvbnRlbnQgPSBgVG90YWw6ICR7dGFza3NUb3RhbH0gQ29tcGxldGVkOiAke2NvbXBsZXRlZFRhc2tzU2NvcmV9IFJlc3Q6ICR7dW5jb21wbGV0ZWRUYXNrc1Njb3JlfWA7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc3RvcmFnZS5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==