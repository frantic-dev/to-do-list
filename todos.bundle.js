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
    storeTodoInProject(input.value, dateInput.value, priorityBtn.textContent);
    if(currentProject !== 'all') addTaskInAll(input.value, dateInput.value, priorityBtn.textContent);
    resetPriority();
    displayNewTodo();
    resetInput();
    checkItem();
    (0,_todos__WEBPACK_IMPORTED_MODULE_1__.deleteTask)();
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
        console.log(allProjects[currentProject][index].done)
        ;(0,_storage__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)();
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
      <div class="priority">
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
  let allDeleteBtns = document.querySelectorAll(".trash-icon");
  let btnsArray = [...allDeleteBtns];
  allDeleteBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      allDeleteBtns = document.querySelectorAll(".trash-icon");
      btnsArray = [...allDeleteBtns];
      btn.parentElement.parentElement.parentElement.remove();
      let index = btnsArray.indexOf(btn);
      console.log(index);
      console.log(_todo_list__WEBPACK_IMPORTED_MODULE_0__.allProjects[_todo_list__WEBPACK_IMPORTED_MODULE_0__.currentProject][index]);
      deleteFromAll(_todo_list__WEBPACK_IMPORTED_MODULE_0__.allProjects[_todo_list__WEBPACK_IMPORTED_MODULE_0__.currentProject][index]);
      _todo_list__WEBPACK_IMPORTED_MODULE_0__.allProjects[_todo_list__WEBPACK_IMPORTED_MODULE_0__.currentProject].splice(index, 1);
      // allProjects[currentProject][0] = display.innerHTML;
      (0,_storage__WEBPACK_IMPORTED_MODULE_1__.updateLocalStorage)();
      console.log(_todo_list__WEBPACK_IMPORTED_MODULE_0__.allProjects);
    });
  });
}
deleteTask();
function deleteFromAll(deletedProp) {
  let index = _todo_list__WEBPACK_IMPORTED_MODULE_0__.allProjects.all.findIndex(
    (prop) => prop.title === deletedProp.title
  );
  console.log(index);
  _todo_list__WEBPACK_IMPORTED_MODULE_0__.allProjects.all.splice(index, 1);
}

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
    console.log(e.target.id);
    let deleteProjectBtns = document.querySelectorAll(".project span");
    deleteProjectBtns.forEach((btn) => {
      btn.style.display = "none";
    });
  }
});


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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/todos.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1VFZkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvLWxpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2Rvcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbFByb2plY3RzIH0gZnJvbSBcIi4vdG9kby1saXN0XCI7ICBcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVMb2NhbFN0b3JhZ2UoKSB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsbFByb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdHMpKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1cGRhdGVMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XHJcbmltcG9ydCB7IGFkZERlbGV0ZUJ0biwgZGVsZXRlVGFzayB9IGZyb20gXCIuL3RvZG9zXCI7XHJcblxyXG5sZXQgYWxsU3RvcmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWxsUHJvamVjdHNcIikpO1xyXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcclxuZXhwb3J0IGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rpc3BsYXlcIik7XHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcclxuY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlLWlucHV0XCIpO1xyXG5jb25zdCBwcmlvcml0eUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHktYnRuXCIpO1xyXG5leHBvcnQgbGV0IGFsbFByb2plY3RzID0ge1xyXG4gIFtcImFsbFwiXTogW10sXHJcbiAgW1wiZGVmYXVsdC1wcm9qZWN0XCJdOiBbXSxcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgY3VycmVudFByb2plY3QgPSBcImRlZmF1bHQtcHJvamVjdFwiO1xyXG5cclxuaWYgKGFsbFN0b3JlZFByb2plY3RzKSB7XHJcbiAgYWxsUHJvamVjdHMgPSBhbGxTdG9yZWRQcm9qZWN0cztcclxufVxyXG5cclxuZnVuY3Rpb24gdG9kbyh0aXRsZSwgZGF0ZSwgcHJpb3JpdHksIGRvbmUpIHtcclxuICByZXR1cm4geyB0aXRsZSwgZGF0ZSwgcHJpb3JpdHksIGRvbmUgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9kb0xpc3QoKSB7XHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgc3RvcmVUb2RvSW5Qcm9qZWN0KGlucHV0LnZhbHVlLCBkYXRlSW5wdXQudmFsdWUsIHByaW9yaXR5QnRuLnRleHRDb250ZW50KTtcclxuICAgIGlmKGN1cnJlbnRQcm9qZWN0ICE9PSAnYWxsJykgYWRkVGFza0luQWxsKGlucHV0LnZhbHVlLCBkYXRlSW5wdXQudmFsdWUsIHByaW9yaXR5QnRuLnRleHRDb250ZW50KTtcclxuICAgIHJlc2V0UHJpb3JpdHkoKTtcclxuICAgIGRpc3BsYXlOZXdUb2RvKCk7XHJcbiAgICByZXNldElucHV0KCk7XHJcbiAgICBjaGVja0l0ZW0oKTtcclxuICAgIGRlbGV0ZVRhc2soKTtcclxuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xyXG4gICAgY29uc29sZS5sb2coYWxsUHJvamVjdHMpO1xyXG4gIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHN0b3JlVG9kb0luUHJvamVjdCh0b2RvVGl0bGUsIHRvZG9EYXRlLCB0b2RvUHJpb3JpdHkpIHtcclxuICBsZXQgcHJvamVjdCA9IGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0XTtcclxuICBwcm9qZWN0W3Byb2plY3QubGVuZ3RoXSA9IHRvZG8odG9kb1RpdGxlLCB0b2RvRGF0ZSwgdG9kb1ByaW9yaXR5LCBcIm5vXCIpO1xyXG4gIHJldHVybiBhbGxQcm9qZWN0cztcclxufVxyXG5mdW5jdGlvbiBhZGRUYXNrSW5BbGwodG9kb1RpdGxlLCB0b2RvRGF0ZSwgdG9kb1ByaW9yaXR5KSB7XHJcbiAgbGV0IHByb2plY3QgPSBhbGxQcm9qZWN0c1tcImFsbFwiXTtcclxuICBwcm9qZWN0W3Byb2plY3QubGVuZ3RoXSA9IHRvZG8odG9kb1RpdGxlLCB0b2RvRGF0ZSwgdG9kb1ByaW9yaXR5LCBcIm5vXCIpO1xyXG4gIHJldHVybiBhbGxQcm9qZWN0cztcclxufVxyXG5mdW5jdGlvbiBkaXNwbGF5TmV3VG9kbygpIHtcclxuICBsZXQgcHJvamVjdCA9IGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0XTtcclxuICBsZXQgbmV3VGFzayA9IHByb2plY3RbcHJvamVjdC5sZW5ndGggLSAxXTtcclxuICBkaXNwbGF5LmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRvLWRvLWl0ZW1cIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjaGVjay1tYXJrXCI+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0by1kb1wiIHN0eWxlPVwiZGlzcGxheTppbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICR7bmV3VGFzay50aXRsZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlXCI+XHJcbiAgICAgICAgICAgICAgJHtuZXdUYXNrLmRhdGV9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmlvcml0eVwiPlxyXG4gICAgICAgICAgICAgICR7bmV3VGFzay5wcmlvcml0eX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgJHthZGREZWxldGVCdG4oKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0SW5wdXQoKSB7XHJcbiAgZm9ybS5yZXNldCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0l0ZW0oKSB7XHJcbiAgbGV0IGNoZWNrTWFya3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNoZWNrLW1hcmtcIik7XHJcbiAgY2hlY2tNYXJrcy5mb3JFYWNoKChtYXJrKSA9PiB7XHJcbiAgICBsZXQgaW5kZXggPSBbLi4uY2hlY2tNYXJrc10uaW5kZXhPZihtYXJrKTtcclxuICAgIGxldCB0YXNrID0gYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RdW2luZGV4XTtcclxuICAgIG1hcmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgY2hlY2tNYXJrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hlY2stbWFya1wiKTtcclxuICAgICAgaWYgKHRhc2suZG9uZSA9PT0gXCJ5ZXNcIikge1xyXG4gICAgICAgIHRhc2suZG9uZSA9IFwibm9cIjtcclxuICAgICAgICBtYXJrLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImNoZWNrXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRhc2suZG9uZSA9IFwieWVzXCI7XHJcbiAgICAgICAgbWFyay5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZSA9IFwiY2hlY2tcIjtcclxuICAgICAgfSBcclxuICAgICAgY29uc29sZS5sb2coaW5kZXgpXHJcbiAgICAgICAgY29uc29sZS5sb2coYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RdW2luZGV4XS5kb25lKVxyXG4gICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xyXG4gICAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuY29uc3QgcHJvamVjdHNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhbGwtcHJvamVjdHNcIik7XHJcblxyXG5mdW5jdGlvbiBhZGRQcm9qZWN0KCkge1xyXG4gIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0XCIpO1xyXG4gIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgbGV0IG5hbWUgPSBwcm9tcHQoXCJ3aGF0IGlzIHRoZSBuYW1lIG9mIHRoZSBuZXcgcHJvamVjdD9cIik7XHJcbiAgICBpZiAobmFtZSAhPT0gXCJcIiAmJiBuYW1lICE9PSBudWxsKSB7XHJcbiAgICAgIGxldCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgbGV0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgZGVsZXRlUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IFwiLVwiO1xyXG4gICAgICBuZXdQcm9qZWN0LnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgICAgbmV3UHJvamVjdC5pZCA9IG5hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCItXCIpO1xyXG4gICAgICBuZXdQcm9qZWN0LmNsYXNzTmFtZSA9IFwicHJvamVjdFwiO1xyXG4gICAgICBwcm9qZWN0c1NlY3Rpb24uYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XHJcbiAgICAgIG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdEJ0bik7XHJcbiAgICAgIGNyZWF0ZVByb2plY3RTdG9yYWdlKG5ld1Byb2plY3QuaWQpO1xyXG4gICAgICBzd2l0Y2hQcm9qZWN0cygpO1xyXG4gICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0U3RvcmFnZShwcm9qZWN0VGl0bGUpIHtcclxuICBhbGxQcm9qZWN0c1twcm9qZWN0VGl0bGVdID0gW107XHJcbiAgY29uc29sZS5sb2coYWxsUHJvamVjdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzd2l0Y2hQcm9qZWN0cygpIHtcclxuICBsZXQgUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FsbC1wcm9qZWN0c1wiKTtcclxuICBsZXQgbGFzdFByb2plY3QgPSBQcm9qZWN0cy5sYXN0RWxlbWVudENoaWxkO1xyXG4gIGxhc3RQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBjdXJyZW50UHJvamVjdCA9IGxhc3RQcm9qZWN0LmlkO1xyXG4gICAgaWYgKGRpc3BsYXkuY2xhc3NOYW1lICE9PSBjdXJyZW50UHJvamVjdCkge1xyXG4gICAgICBkaXNwbGF5LnJlcGxhY2VDaGlsZHJlbigpO1xyXG4gICAgfVxyXG4gICAgZGlzcGxheS5jbGFzc05hbWUgPSBsYXN0UHJvamVjdC5pZDtcclxuICAgIGhpZ2hsaWdodFByb2plY3QobGFzdFByb2plY3QpO1xyXG4gICAgY2hlY2tJdGVtKCk7XHJcbiAgICBkaXNwbGF5T2xkVGFza3MoKTtcclxuICAgIGZvY3VzSW5wdXQoKTtcclxuICAgIHJlc2V0SW5wdXQoKTtcclxuICAgIHJlc2V0UHJpb3JpdHkoKTtcclxuICAgIGRlbGV0ZVRhc2soKTtcclxuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xyXG4gICAgY29uc29sZS5sb2coYWxsUHJvamVjdHMpXHJcbiAgfSk7XHJcbn1cclxuZnVuY3Rpb24gZm9jdXNJbnB1dCgpIHtcclxuICBpbnB1dC5mb2N1cygpO1xyXG59XHJcbmZ1bmN0aW9uIGRpc3BsYXlPbGRUYXNrcygpIHtcclxuICBsZXQgZGlzcGxheVRhc2tzID0gXCJcIjtcclxuICBsZXQgcHJvamVjdCA9IGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0XTtcclxuICBpZihPYmplY3Qua2V5cyhhbGxQcm9qZWN0cykubGVuZ3RoICE9PSAwKXtcclxuICBwcm9qZWN0LmZvckVhY2goKHRhc2spID0+IHtcclxuICAgIGRpc3BsYXlUYXNrcyArPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwidG8tZG8taXRlbVwiPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJjaGVjay1tYXJrXCI+PC9idXR0b24+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRvLWRvXCIgc3R5bGU9XCJkaXNwbGF5OmlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAke3Rhc2sudGl0bGV9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPlxyXG4gICAgICAgICAgJHt0YXNrLmRhdGV9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicHJpb3JpdHlcIj5cclxuICAgICAgICAgICR7dGFzay5wcmlvcml0eX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgJHthZGREZWxldGVCdG4oKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgfSk7XHJcbiAgZGlzcGxheS5pbm5lckhUTUwgPSBkaXNwbGF5VGFza3M7XHJcbiAgcmVtZW1iZXJPbGRDaGVja2VkSXRlbXMoKTtcclxuICBjaGVja0l0ZW0oKTtcclxufVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1lbWJlck9sZENoZWNrZWRJdGVtcygpIHtcclxuICBsZXQgcHJvamVjdCA9IGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0XTtcclxuICBwcm9qZWN0LmZvckVhY2goKHRhc2spID0+IHtcclxuICAgIGxldCBpbmRleCA9IHByb2plY3QuaW5kZXhPZih0YXNrKTtcclxuICAgIGxldCBJdGVtcyAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG8tZG8taXRlbScpO1xyXG4gICAgaWYgKHRhc2suZG9uZSA9PT0gXCJ5ZXNcIikge1xyXG4gICAgICBsZXQgdGFyZ2V0RGl2ID0gSXRlbXNbaW5kZXhdLmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgICB0YXJnZXREaXYuY2xhc3NOYW1lID0gXCJjaGVja1wiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IHRhcmdldERpdiA9IEl0ZW1zW2luZGV4XS5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgICAgdGFyZ2V0RGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJjaGVja1wiKTtcclxuICAgIH1cclxuICB9KVxyXG59O1xyXG5cclxudG9kb0xpc3QoKTtcclxuYWRkUHJvamVjdCgpO1xyXG5zZXRUaW1lb3V0KCgpID0+IHtcclxuICBkaXNwbGF5T2xkVGFza3MoKTtcclxufSwgNTAwKTsgXHJcbmNoZWNrSXRlbSgpO1xyXG5mdW5jdGlvbiBzaG93T2xkUHJvamVjdHMoKSB7XHJcbiAgZm9yIChsZXQgcHJvamVjdCBpbiBhbGxQcm9qZWN0cykge1xyXG4gICAgY29uc29sZS5sb2coYWxsUHJvamVjdHMpO1xyXG4gICAgY29uc29sZS5sb2cocHJvamVjdCk7XHJcbiAgICBsZXQgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBuZXdQcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdC5zcGxpdChcIi1cIikuam9pbihcIiBcIik7XHJcbiAgICBuZXdQcm9qZWN0LmlkID0gcHJvamVjdDtcclxuICAgIG5ld1Byb2plY3QuY2xhc3NOYW1lID0gXCJwcm9qZWN0XCI7XHJcbiAgICBwcm9qZWN0c1NlY3Rpb24uYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XHJcbiAgICBsZXQgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgZGVsZXRlUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IFwiLVwiO1xyXG4gICAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnRuKTtcclxuICAgIHN3aXRjaFByb2plY3RzKCk7XHJcbiAgfVxyXG59XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoZSkgPT4ge1xyXG4gIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgc2hvd09sZFByb2plY3RzKCk7XHJcbn0pO1xyXG5cclxubGV0IGNsaWNrcyA9IDA7XHJcbmZ1bmN0aW9uIGNoYW5nZVByaW9yaXR5KCkge1xyXG4gIHByaW9yaXR5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgIGNsaWNrcysrO1xyXG4gICAgaWYgKGNsaWNrcyA9PT0gMSkge1xyXG4gICAgICBwcmlvcml0eUJ0bi50ZXh0Q29udGVudCA9IFwiTWlkXCI7XHJcbiAgICAgIHByaW9yaXR5QnRuLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XCIpO1xyXG4gICAgfSBlbHNlIGlmIChjbGlja3MgPT09IDIpIHtcclxuICAgICAgcHJpb3JpdHlCdG4udGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcclxuICAgICAgcHJpb3JpdHlCdG4uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJpb3JpdHlCdG4udGV4dENvbnRlbnQgPSBcIkxvd1wiO1xyXG4gICAgICBwcmlvcml0eUJ0bi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IGdyZXk7XCIpO1xyXG4gICAgICBjbGlja3MgPSAwO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbmNoYW5nZVByaW9yaXR5KCk7XHJcbmZ1bmN0aW9uIHJlc2V0UHJpb3JpdHkoKSB7XHJcbiAgY2xpY2tzID0gMDtcclxuICBwcmlvcml0eUJ0bi50ZXh0Q29udGVudCA9IFwiTG93XCI7XHJcbiAgcHJpb3JpdHlCdG4uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1wiKTtcclxufVxyXG5mdW5jdGlvbiBoaWdobGlnaHRQcm9qZWN0KHByb2plY3QpIHtcclxuICBjb25zdCBhbGxQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKTtcclxuICBhbGxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PlxyXG4gICAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgIFwic3R5bGVcIixcclxuICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ4LCAxNTgsIDI1MCk7IGJveC1zaGFkb3c6IG5vbmU7XCJcclxuICAgIClcclxuICApO1xyXG4gIHByb2plY3Quc2V0QXR0cmlidXRlKFxyXG4gICAgXCJzdHlsZVwiLFxyXG4gICAgXCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1IDExNyAxNDEpOyBvdXRsaW5lOiAycHggc29saWQgd2hpdGU7IGJveC1zaGFkb3c6IDAgMCAxMHB4ICNmZjA2ZmZcIlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYWxsUHJvamVjdHMsIGN1cnJlbnRQcm9qZWN0IH0gZnJvbSBcIi4vdG9kby1saXN0XCI7XHJcbmltcG9ydCB7IHVwZGF0ZUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcclxuaW1wb3J0IHRyYXNoSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL2ljb25zOC10cmFzaC0zMi5wbmdcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIGFkZERlbGV0ZUJ0bigpIHtcclxuICByZXR1cm4gYCAgICA8ZGl2IGNsYXNzPVwiZGVsZXRlLXRhc2tcIj5cclxuICAgIDxpbWcgY2xhc3M9XCJ0cmFzaC1pY29uXCIgc3JjPVwiJHt0cmFzaEljb259XCIgYWx0PVwiaW1hZ2Ugb2YgYSB0cmFzaCBjYW5cIi8+XHJcbjwvZGl2PlxyXG4gICAgYDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVGFzaygpIHtcclxuICBsZXQgYWxsRGVsZXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudHJhc2gtaWNvblwiKTtcclxuICBsZXQgYnRuc0FycmF5ID0gWy4uLmFsbERlbGV0ZUJ0bnNdO1xyXG4gIGFsbERlbGV0ZUJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgYWxsRGVsZXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudHJhc2gtaWNvblwiKTtcclxuICAgICAgYnRuc0FycmF5ID0gWy4uLmFsbERlbGV0ZUJ0bnNdO1xyXG4gICAgICBidG4ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgIGxldCBpbmRleCA9IGJ0bnNBcnJheS5pbmRleE9mKGJ0bik7XHJcbiAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcclxuICAgICAgY29uc29sZS5sb2coYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RdW2luZGV4XSk7XHJcbiAgICAgIGRlbGV0ZUZyb21BbGwoYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RdW2luZGV4XSk7XHJcbiAgICAgIGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAvLyBhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdF1bMF0gPSBkaXNwbGF5LmlubmVySFRNTDtcclxuICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcbmRlbGV0ZVRhc2soKTtcclxuZnVuY3Rpb24gZGVsZXRlRnJvbUFsbChkZWxldGVkUHJvcCkge1xyXG4gIGxldCBpbmRleCA9IGFsbFByb2plY3RzW1wiYWxsXCJdLmZpbmRJbmRleChcclxuICAgIChwcm9wKSA9PiBwcm9wLnRpdGxlID09PSBkZWxldGVkUHJvcC50aXRsZVxyXG4gICk7XHJcbiAgY29uc29sZS5sb2coaW5kZXgpO1xyXG4gIGFsbFByb2plY3RzW1wiYWxsXCJdLnNwbGljZShpbmRleCwgMSk7XHJcbn1cclxuXHJcbi8vIGltcG9ydCB7IGZvcm1hdERpc3RhbmNlLCBzdWJEYXlzIH0gZnJvbSAnZGF0ZS1mbnMnXHJcbi8vIGltcG9ydCB7IFZhbHVlIH0gZnJvbSBcInNhc3NcIjtcclxuXHJcbi8vIGNvbnNvbGUubG9nKGZvcm1hdERpc3RhbmNlKHN1YkRheXMobmV3IERhdGUoKSwgNCksIG5ldyBEYXRlKCksIHsgYWRkU3VmZml4OiB0cnVlIH0pKVxyXG5cclxuLy8gZnVuY3Rpb24gYWRkVGFza1RvQWxsKCkge1xyXG5cclxuLy8gfVxyXG4vLyBleHBvcnQgZnVuY3Rpb24gZGVmYXVsdERhdGUodmFsdWUpIHtcclxuLy8gICBpZiAodmFsdWUgPT09IFwiXCIpIHtcclxuLy8gICAgIGxldCBkYXkgPSBuZXcgRGF0ZSgpLmdldERhdGUoKTtcclxuLy8gICAgIGxldCBtb250aCA9IG5ldyBEYXRlKCkuZ2V0TW9udGgoKTtcclxuLy8gICAgIGxldCB5ZWFyID0gbmV3IERhdGUoKS5nZXRNb250aCgpO1xyXG4vLyAgICAgcmV0dXJuICh2YWx1ZSA9IGAke2RheX0tJHttb250aH0tJHt5ZWFyfWApO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheURlbGV0ZVByb2plY3RzQnRucygpIHtcclxuICBsZXQgZGVsZXRlUHJvamVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3Qgc3BhblwiKTtcclxuICBkZWxldGVQcm9qZWN0QnRucy5mb3JFYWNoKChidG4pID0+IHtcclxuICAgIGJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgbGV0IGluZGV4ID0gWy4uLmRlbGV0ZVByb2plY3RCdG5zXS5pbmRleE9mKGJ0bik7XHJcbiAgICAgIGxldCB0YXJnZXRQcm9qZWN0ID0gZGVsZXRlUHJvamVjdEJ0bnNbaW5kZXhdLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgIHRhcmdldFByb2plY3QucmVtb3ZlKCk7XHJcbiAgICAgIGRlbGV0ZSBhbGxQcm9qZWN0c1t0YXJnZXRQcm9qZWN0LmlkXTtcclxuICAgICAgY29uc29sZS5sb2codGFyZ2V0UHJvamVjdC5pZCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcclxuICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5sZXQgZWRpdFByb2plY3RzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXByb2plY3RzXCIpO1xyXG5lZGl0UHJvamVjdHNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZGlzcGxheURlbGV0ZVByb2plY3RzQnRucyk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgaWYgKGUudGFyZ2V0ICE9PSBlZGl0UHJvamVjdHNCdG4pIHtcclxuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmlkKTtcclxuICAgIGxldCBkZWxldGVQcm9qZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdCBzcGFuXCIpO1xyXG4gICAgZGVsZXRlUHJvamVjdEJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICAgIGJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy90b2Rvcy5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==