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
      console.log(index)
      console.log(_todo_list__WEBPACK_IMPORTED_MODULE_0__.allProjects[_todo_list__WEBPACK_IMPORTED_MODULE_0__.currentProject][index])
      deleteFromAll(_todo_list__WEBPACK_IMPORTED_MODULE_0__.allProjects[_todo_list__WEBPACK_IMPORTED_MODULE_0__.currentProject][index])
      _todo_list__WEBPACK_IMPORTED_MODULE_0__.allProjects[_todo_list__WEBPACK_IMPORTED_MODULE_0__.currentProject].splice(index, 1);
      // allProjects[currentProject][0] = display.innerHTML;
      (0,_storage__WEBPACK_IMPORTED_MODULE_1__.updateLocalStorage)();
      console.log(_todo_list__WEBPACK_IMPORTED_MODULE_0__.allProjects);
    });
  });
}
deleteTask();
function deleteFromAll (deletedProp) {
  let index = _todo_list__WEBPACK_IMPORTED_MODULE_0__.allProjects.all.findIndex(prop => prop.title === deletedProp.title);
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/todos.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kby1saXN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGxQcm9qZWN0cyB9IGZyb20gXCIuL3RvZG8tbGlzdFwiOyAgXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTG9jYWxTdG9yYWdlKCkge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGxQcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXBkYXRlTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xyXG5pbXBvcnQgeyBhZGREZWxldGVCdG4sIGRlbGV0ZVRhc2sgfSBmcm9tIFwiLi90b2Rvc1wiO1xyXG5cclxubGV0IGFsbFN0b3JlZFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFsbFByb2plY3RzXCIpKTtcclxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XHJcbmV4cG9ydCBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaXNwbGF5XCIpO1xyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XHJcbmNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZS1pbnB1dFwiKTtcclxuY29uc3QgcHJpb3JpdHlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5LWJ0blwiKTtcclxuZXhwb3J0IGxldCBhbGxQcm9qZWN0cyA9IHtcclxuICBbXCJhbGxcIl06IFtdLFxyXG4gIFtcImRlZmF1bHQtcHJvamVjdFwiXTogW10sXHJcbn07XHJcblxyXG5leHBvcnQgbGV0IGN1cnJlbnRQcm9qZWN0ID0gXCJkZWZhdWx0LXByb2plY3RcIjtcclxuXHJcbmlmIChhbGxTdG9yZWRQcm9qZWN0cykge1xyXG4gIGFsbFByb2plY3RzID0gYWxsU3RvcmVkUHJvamVjdHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZG8odGl0bGUsIGRhdGUsIHByaW9yaXR5LCBkb25lKSB7XHJcbiAgcmV0dXJuIHsgdGl0bGUsIGRhdGUsIHByaW9yaXR5LCBkb25lIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZG9MaXN0KCkge1xyXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgIHN0b3JlVG9kb0luUHJvamVjdChpbnB1dC52YWx1ZSwgZGF0ZUlucHV0LnZhbHVlLCBwcmlvcml0eUJ0bi50ZXh0Q29udGVudCk7XHJcbiAgICBpZihjdXJyZW50UHJvamVjdCAhPT0gJ2FsbCcpIGFkZFRhc2tJbkFsbChpbnB1dC52YWx1ZSwgZGF0ZUlucHV0LnZhbHVlLCBwcmlvcml0eUJ0bi50ZXh0Q29udGVudCk7XHJcbiAgICByZXNldFByaW9yaXR5KCk7XHJcbiAgICBkaXNwbGF5TmV3VG9kbygpO1xyXG4gICAgcmVzZXRJbnB1dCgpO1xyXG4gICAgY2hlY2tJdGVtKCk7XHJcbiAgICBkZWxldGVUYXNrKCk7XHJcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcclxuICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcclxuICB9KTtcclxufVxyXG5mdW5jdGlvbiBzdG9yZVRvZG9JblByb2plY3QodG9kb1RpdGxlLCB0b2RvRGF0ZSwgdG9kb1ByaW9yaXR5KSB7XHJcbiAgbGV0IHByb2plY3QgPSBhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdF07XHJcbiAgcHJvamVjdFtwcm9qZWN0Lmxlbmd0aF0gPSB0b2RvKHRvZG9UaXRsZSwgdG9kb0RhdGUsIHRvZG9Qcmlvcml0eSwgXCJub1wiKTtcclxuICByZXR1cm4gYWxsUHJvamVjdHM7XHJcbn1cclxuZnVuY3Rpb24gYWRkVGFza0luQWxsKHRvZG9UaXRsZSwgdG9kb0RhdGUsIHRvZG9Qcmlvcml0eSkge1xyXG4gIGxldCBwcm9qZWN0ID0gYWxsUHJvamVjdHNbXCJhbGxcIl07XHJcbiAgcHJvamVjdFtwcm9qZWN0Lmxlbmd0aF0gPSB0b2RvKHRvZG9UaXRsZSwgdG9kb0RhdGUsIHRvZG9Qcmlvcml0eSwgXCJub1wiKTtcclxuICByZXR1cm4gYWxsUHJvamVjdHM7XHJcbn1cclxuZnVuY3Rpb24gZGlzcGxheU5ld1RvZG8oKSB7XHJcbiAgbGV0IHByb2plY3QgPSBhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdF07XHJcbiAgbGV0IG5ld1Rhc2sgPSBwcm9qZWN0W3Byb2plY3QubGVuZ3RoIC0gMV07XHJcbiAgZGlzcGxheS5pbm5lckhUTUwgKz0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0by1kby1pdGVtXCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2hlY2stbWFya1wiPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG8tZG9cIiBzdHlsZT1cImRpc3BsYXk6aW5saW5lLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAke25ld1Rhc2sudGl0bGV9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPlxyXG4gICAgICAgICAgICAgICR7bmV3VGFzay5kYXRlfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpb3JpdHlcIj5cclxuICAgICAgICAgICAgICAke25ld1Rhc2sucHJpb3JpdHl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICR7YWRkRGVsZXRlQnRuKCl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldElucHV0KCkge1xyXG4gIGZvcm0ucmVzZXQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tJdGVtKCkge1xyXG4gIGxldCBjaGVja01hcmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaGVjay1tYXJrXCIpO1xyXG4gIGNoZWNrTWFya3MuZm9yRWFjaCgobWFyaykgPT4ge1xyXG4gICAgbGV0IGluZGV4ID0gWy4uLmNoZWNrTWFya3NdLmluZGV4T2YobWFyayk7XHJcbiAgICBsZXQgdGFzayA9IGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0XVtpbmRleF07XHJcbiAgICBtYXJrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGNoZWNrTWFya3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNoZWNrLW1hcmtcIik7XHJcbiAgICAgIGlmICh0YXNrLmRvbmUgPT09IFwieWVzXCIpIHtcclxuICAgICAgICB0YXNrLmRvbmUgPSBcIm5vXCI7XHJcbiAgICAgICAgbWFyay5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJjaGVja1wiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0YXNrLmRvbmUgPSBcInllc1wiO1xyXG4gICAgICAgIG1hcmsucGFyZW50RWxlbWVudC5jbGFzc05hbWUgPSBcImNoZWNrXCI7XHJcbiAgICAgIH0gXHJcbiAgICAgIGNvbnNvbGUubG9nKGluZGV4KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0XVtpbmRleF0uZG9uZSlcclxuICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IHByb2plY3RzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWxsLXByb2plY3RzXCIpO1xyXG5cclxuZnVuY3Rpb24gYWRkUHJvamVjdCgpIHtcclxuICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdFwiKTtcclxuICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgIGxldCBuYW1lID0gcHJvbXB0KFwid2hhdCBpcyB0aGUgbmFtZSBvZiB0aGUgbmV3IHByb2plY3Q/XCIpO1xyXG4gICAgaWYgKG5hbWUgIT09IFwiXCIgJiYgbmFtZSAhPT0gbnVsbCkge1xyXG4gICAgICBsZXQgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgIGxldCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgIGRlbGV0ZVByb2plY3RCdG4udGV4dENvbnRlbnQgPSBcIi1cIjtcclxuICAgICAgbmV3UHJvamVjdC50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgICAgIG5ld1Byb2plY3QuaWQgPSBuYW1lLnNwbGl0KFwiIFwiKS5qb2luKFwiLVwiKTtcclxuICAgICAgbmV3UHJvamVjdC5jbGFzc05hbWUgPSBcInByb2plY3RcIjtcclxuICAgICAgcHJvamVjdHNTZWN0aW9uLmFwcGVuZENoaWxkKG5ld1Byb2plY3QpO1xyXG4gICAgICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdG4pO1xyXG4gICAgICBjcmVhdGVQcm9qZWN0U3RvcmFnZShuZXdQcm9qZWN0LmlkKTtcclxuICAgICAgc3dpdGNoUHJvamVjdHMoKTtcclxuICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdFN0b3JhZ2UocHJvamVjdFRpdGxlKSB7XHJcbiAgYWxsUHJvamVjdHNbcHJvamVjdFRpdGxlXSA9IFtdO1xyXG4gIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3dpdGNoUHJvamVjdHMoKSB7XHJcbiAgbGV0IFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhbGwtcHJvamVjdHNcIik7XHJcbiAgbGV0IGxhc3RQcm9qZWN0ID0gUHJvamVjdHMubGFzdEVsZW1lbnRDaGlsZDtcclxuICBsYXN0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgY3VycmVudFByb2plY3QgPSBsYXN0UHJvamVjdC5pZDtcclxuICAgIGlmIChkaXNwbGF5LmNsYXNzTmFtZSAhPT0gY3VycmVudFByb2plY3QpIHtcclxuICAgICAgZGlzcGxheS5yZXBsYWNlQ2hpbGRyZW4oKTtcclxuICAgIH1cclxuICAgIGRpc3BsYXkuY2xhc3NOYW1lID0gbGFzdFByb2plY3QuaWQ7XHJcbiAgICBoaWdobGlnaHRQcm9qZWN0KGxhc3RQcm9qZWN0KTtcclxuICAgIGNoZWNrSXRlbSgpO1xyXG4gICAgZGlzcGxheU9sZFRhc2tzKCk7XHJcbiAgICBmb2N1c0lucHV0KCk7XHJcbiAgICByZXNldElucHV0KCk7XHJcbiAgICByZXNldFByaW9yaXR5KCk7XHJcbiAgICBkZWxldGVUYXNrKCk7XHJcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcclxuICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKVxyXG4gIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGZvY3VzSW5wdXQoKSB7XHJcbiAgaW5wdXQuZm9jdXMoKTtcclxufVxyXG5mdW5jdGlvbiBkaXNwbGF5T2xkVGFza3MoKSB7XHJcbiAgbGV0IGRpc3BsYXlUYXNrcyA9IFwiXCI7XHJcbiAgbGV0IHByb2plY3QgPSBhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdF07XHJcbiAgcHJvamVjdC5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICBkaXNwbGF5VGFza3MgKz0gYFxyXG4gICAgPGRpdiBjbGFzcz1cInRvLWRvLWl0ZW1cIj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2hlY2stbWFya1wiPjwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0by1kb1wiIHN0eWxlPVwiZGlzcGxheTppbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgJHt0YXNrLnRpdGxlfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImRhdGVcIj5cclxuICAgICAgICAgICR7dGFzay5kYXRlfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInByaW9yaXR5XCI+XHJcbiAgICAgICAgICAke3Rhc2sucHJpb3JpdHl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgICR7YWRkRGVsZXRlQnRuKCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIH0pO1xyXG4gIGRpc3BsYXkuaW5uZXJIVE1MID0gZGlzcGxheVRhc2tzO1xyXG4gIHJlbWVtYmVyT2xkQ2hlY2tlZEl0ZW1zKCk7XHJcbiAgY2hlY2tJdGVtKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbWVtYmVyT2xkQ2hlY2tlZEl0ZW1zKCkge1xyXG4gIGxldCBwcm9qZWN0ID0gYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RdO1xyXG4gIHByb2plY3QuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgbGV0IGluZGV4ID0gcHJvamVjdC5pbmRleE9mKHRhc2spO1xyXG4gICAgbGV0IEl0ZW1zICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50by1kby1pdGVtJyk7XHJcbiAgICBpZiAodGFzay5kb25lID09PSBcInllc1wiKSB7XHJcbiAgICAgIGxldCB0YXJnZXREaXYgPSBJdGVtc1tpbmRleF0uZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgIHRhcmdldERpdi5jbGFzc05hbWUgPSBcImNoZWNrXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgdGFyZ2V0RGl2ID0gSXRlbXNbaW5kZXhdLmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgICB0YXJnZXREaXYuY2xhc3NMaXN0LnJlbW92ZShcImNoZWNrXCIpO1xyXG4gICAgfVxyXG4gIH0pXHJcbn07XHJcblxyXG50b2RvTGlzdCgpO1xyXG5hZGRQcm9qZWN0KCk7XHJcbnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gIGRpc3BsYXlPbGRUYXNrcygpO1xyXG59LCA1MDApOyBcclxuY2hlY2tJdGVtKCk7XHJcbmZ1bmN0aW9uIHNob3dPbGRQcm9qZWN0cygpIHtcclxuICBmb3IgKGxldCBwcm9qZWN0IGluIGFsbFByb2plY3RzKSB7XHJcbiAgICBjb25zb2xlLmxvZyhhbGxQcm9qZWN0cyk7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcclxuICAgIGxldCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSBwcm9qZWN0LnNwbGl0KFwiLVwiKS5qb2luKFwiIFwiKTtcclxuICAgIG5ld1Byb2plY3QuaWQgPSBwcm9qZWN0O1xyXG4gICAgbmV3UHJvamVjdC5jbGFzc05hbWUgPSBcInByb2plY3RcIjtcclxuICAgIHByb2plY3RzU2VjdGlvbi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcclxuICAgIGxldCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBkZWxldGVQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gXCItXCI7XHJcbiAgICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdG4pO1xyXG4gICAgc3dpdGNoUHJvamVjdHMoKTtcclxuICB9XHJcbn1cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIChlKSA9PiB7XHJcbiAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICBzaG93T2xkUHJvamVjdHMoKTtcclxufSk7XHJcblxyXG5sZXQgY2xpY2tzID0gMDtcclxuZnVuY3Rpb24gY2hhbmdlUHJpb3JpdHkoKSB7XHJcbiAgcHJpb3JpdHlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgY2xpY2tzKys7XHJcbiAgICBpZiAoY2xpY2tzID09PSAxKSB7XHJcbiAgICAgIHByaW9yaXR5QnRuLnRleHRDb250ZW50ID0gXCJNaWRcIjtcclxuICAgICAgcHJpb3JpdHlCdG4uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcIik7XHJcbiAgICB9IGVsc2UgaWYgKGNsaWNrcyA9PT0gMikge1xyXG4gICAgICBwcmlvcml0eUJ0bi50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xyXG4gICAgICBwcmlvcml0eUJ0bi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IHJlZDtcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwcmlvcml0eUJ0bi50ZXh0Q29udGVudCA9IFwiTG93XCI7XHJcbiAgICAgIHByaW9yaXR5QnRuLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcIik7XHJcbiAgICAgIGNsaWNrcyA9IDA7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuY2hhbmdlUHJpb3JpdHkoKTtcclxuZnVuY3Rpb24gcmVzZXRQcmlvcml0eSgpIHtcclxuICBjbGlja3MgPSAwO1xyXG4gIHByaW9yaXR5QnRuLnRleHRDb250ZW50ID0gXCJMb3dcIjtcclxuICBwcmlvcml0eUJ0bi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IGdyZXk7XCIpO1xyXG59XHJcbmZ1bmN0aW9uIGhpZ2hsaWdodFByb2plY3QocHJvamVjdCkge1xyXG4gIGNvbnN0IGFsbFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpO1xyXG4gIGFsbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+XHJcbiAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZShcclxuICAgICAgXCJzdHlsZVwiLFxyXG4gICAgICBcImJhY2tncm91bmQtY29sb3I6IHJnYigxNDgsIDE1OCwgMjUwKTsgYm94LXNoYWRvdzogbm9uZTtcIlxyXG4gICAgKVxyXG4gICk7XHJcbiAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoXHJcbiAgICBcInN0eWxlXCIsXHJcbiAgICBcImJhY2tncm91bmQtY29sb3I6IHJnYigyNTUgMTE3IDE0MSk7IG91dGxpbmU6IDJweCBzb2xpZCB3aGl0ZTsgYm94LXNoYWRvdzogMCAwIDEwcHggI2ZmMDZmZlwiXHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBhbGxQcm9qZWN0cywgY3VycmVudFByb2plY3QsIGRpc3BsYXkgfSBmcm9tIFwiLi90b2RvLWxpc3RcIjtcclxuaW1wb3J0IHsgdXBkYXRlTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xyXG5pbXBvcnQgdHJhc2hJY29uIGZyb20gJy4uL2ltYWdlcy9pY29uczgtdHJhc2gtMzIucG5nJztcclxuZXhwb3J0IGZ1bmN0aW9uIGFkZERlbGV0ZUJ0bigpIHtcclxuICByZXR1cm4gYCAgICA8ZGl2IGNsYXNzPVwiZGVsZXRlLXRhc2tcIj5cclxuICAgIDxpbWcgY2xhc3M9XCJ0cmFzaC1pY29uXCIgc3JjPVwiJHt0cmFzaEljb259XCIgYWx0PVwiaW1hZ2Ugb2YgYSB0cmFzaCBjYW5cIi8+XHJcbjwvZGl2PlxyXG4gICAgYDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVGFzaygpIHtcclxuICBsZXQgYWxsRGVsZXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudHJhc2gtaWNvblwiKTtcclxuICBsZXQgYnRuc0FycmF5ID0gWy4uLmFsbERlbGV0ZUJ0bnNdO1xyXG4gIGFsbERlbGV0ZUJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgYWxsRGVsZXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudHJhc2gtaWNvblwiKTtcclxuICAgICAgYnRuc0FycmF5ID0gWy4uLmFsbERlbGV0ZUJ0bnNdO1xyXG4gICAgICBidG4ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgIGxldCBpbmRleCA9IGJ0bnNBcnJheS5pbmRleE9mKGJ0bik7XHJcbiAgICAgIGNvbnNvbGUubG9nKGluZGV4KVxyXG4gICAgICBjb25zb2xlLmxvZyhhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdF1baW5kZXhdKVxyXG4gICAgICBkZWxldGVGcm9tQWxsKGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0XVtpbmRleF0pXHJcbiAgICAgIGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAvLyBhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdF1bMF0gPSBkaXNwbGF5LmlubmVySFRNTDtcclxuICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcbmRlbGV0ZVRhc2soKTtcclxuZnVuY3Rpb24gZGVsZXRlRnJvbUFsbCAoZGVsZXRlZFByb3ApIHtcclxuICBsZXQgaW5kZXggPSBhbGxQcm9qZWN0c1tcImFsbFwiXS5maW5kSW5kZXgocHJvcCA9PiBwcm9wLnRpdGxlID09PSBkZWxldGVkUHJvcC50aXRsZSk7XHJcbiAgY29uc29sZS5sb2coaW5kZXgpO1xyXG4gIGFsbFByb2plY3RzW1wiYWxsXCJdLnNwbGljZShpbmRleCwgMSk7XHJcbn1cclxuXHJcbi8vIGltcG9ydCB7IGZvcm1hdERpc3RhbmNlLCBzdWJEYXlzIH0gZnJvbSAnZGF0ZS1mbnMnXHJcbi8vIGltcG9ydCB7IFZhbHVlIH0gZnJvbSBcInNhc3NcIjtcclxuXHJcbi8vIGNvbnNvbGUubG9nKGZvcm1hdERpc3RhbmNlKHN1YkRheXMobmV3IERhdGUoKSwgNCksIG5ldyBEYXRlKCksIHsgYWRkU3VmZml4OiB0cnVlIH0pKVxyXG5cclxuLy8gZnVuY3Rpb24gYWRkVGFza1RvQWxsKCkge1xyXG5cclxuLy8gfVxyXG4vLyBleHBvcnQgZnVuY3Rpb24gZGVmYXVsdERhdGUodmFsdWUpIHtcclxuLy8gICBpZiAodmFsdWUgPT09IFwiXCIpIHtcclxuLy8gICAgIGxldCBkYXkgPSBuZXcgRGF0ZSgpLmdldERhdGUoKTtcclxuLy8gICAgIGxldCBtb250aCA9IG5ldyBEYXRlKCkuZ2V0TW9udGgoKTtcclxuLy8gICAgIGxldCB5ZWFyID0gbmV3IERhdGUoKS5nZXRNb250aCgpO1xyXG4vLyAgICAgcmV0dXJuICh2YWx1ZSA9IGAke2RheX0tJHttb250aH0tJHt5ZWFyfWApO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheURlbGV0ZVByb2plY3RzQnRucygpIHtcclxuICBsZXQgZGVsZXRlUHJvamVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCBzcGFuJyk7XHJcbiAgZGVsZXRlUHJvamVjdEJ0bnMuZm9yRWFjaCggYnRuID0+IHtcclxuICAgICBidG4uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgfSlcclxufVxyXG5sZXQgZWRpdFByb2plY3RzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtcHJvamVjdHMnKTtcclxuZWRpdFByb2plY3RzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheURlbGV0ZVByb2plY3RzQnRucylcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvdG9kb3MuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=