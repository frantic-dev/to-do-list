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
  // display.innerHTML = allStoredProjects[currentProject][0];
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
    // rememberOldTasks();
    resetInput();
    checkItem();
    (0,_todos__WEBPACK_IMPORTED_MODULE_1__.deleteTask)();
    (0,_storage__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)();
    console.log(allProjects);
  });
}
function storeTodoInProject(todoTitle, todoDate, todoPriority) {
  let project = allProjects[currentProject];
  // if (project.length === 0) {
  //   project[1] = todo(todoTitle, todoDate, todoPriority);
  // } else {
  project[project.length] = todo(todoTitle, todoDate, todoPriority, "no");
  // }
  return allProjects;
}
function addTaskInAll(todoTitle, todoDate, todoPriority) {
  let project = allProjects["all"];
  // if (project.length === 0) {
  //   project[1] = todo(todoTitle, todoDate, todoPriority);
  // } else {
  project[project.length] = todo(todoTitle, todoDate, todoPriority, "no");
  // }
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
    mark.addEventListener("click", () => {
      checkMarks = document.querySelectorAll(".check-mark");
      let index = [...checkMarks].indexOf(mark);
      // mark.parentElement.classList.toggle("check");
      let task = allProjects[currentProject][index];
      if (task === "yes") {
        task.done = "no";
        mark.parentElement.classList.remove("check");
        return task
      } else {
        task.done = "yes";
        mark.parentElement.className = "check";
        return task
      } 
      // allProjects[currentProject][0] = display.innerHTML;
      console.log(index)
      // if(mark.parentElement.className === 'check') {
      //   allProjects[currentProject][index].done = "yes";
      // } else allProjects[currentProject][index].done = "no";
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
    // rememberOldTasks();
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
    console.log(allProjects)
  });
}
function focusInput() {
  input.focus();
}
function displayOldTasks() {
  // let project = allProjects[currentProject];
  // if (project.length !== 0) {
  //   return (display.innerHTML = project[0]);
  // }
  let displayTasks = "";
  let project = allProjects[currentProject];
  project.forEach((task) => {
    // console.log(task);
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
}
function rememberOldTasks() {
  let project = allProjects[currentProject];
  project[0] = display.innerHTML;
}
todoList();
addProject();
// rememberOldTasks();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kby1saXN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGxQcm9qZWN0cyB9IGZyb20gXCIuL3RvZG8tbGlzdFwiOyAgXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTG9jYWxTdG9yYWdlKCkge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGxQcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXBkYXRlTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xyXG5pbXBvcnQgeyBhZGREZWxldGVCdG4sIGRlbGV0ZVRhc2sgfSBmcm9tIFwiLi90b2Rvc1wiO1xyXG5cclxubGV0IGFsbFN0b3JlZFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFsbFByb2plY3RzXCIpKTtcclxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XHJcbmV4cG9ydCBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaXNwbGF5XCIpO1xyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XHJcbmNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZS1pbnB1dFwiKTtcclxuY29uc3QgcHJpb3JpdHlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5LWJ0blwiKTtcclxuZXhwb3J0IGxldCBhbGxQcm9qZWN0cyA9IHtcclxuICBbXCJhbGxcIl06IFtdLFxyXG4gIFtcImRlZmF1bHQtcHJvamVjdFwiXTogW10sXHJcbn07XHJcblxyXG5leHBvcnQgbGV0IGN1cnJlbnRQcm9qZWN0ID0gXCJkZWZhdWx0LXByb2plY3RcIjtcclxuXHJcbmlmIChhbGxTdG9yZWRQcm9qZWN0cykge1xyXG4gIGFsbFByb2plY3RzID0gYWxsU3RvcmVkUHJvamVjdHM7XHJcbiAgLy8gZGlzcGxheS5pbm5lckhUTUwgPSBhbGxTdG9yZWRQcm9qZWN0c1tjdXJyZW50UHJvamVjdF1bMF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZG8odGl0bGUsIGRhdGUsIHByaW9yaXR5LCBkb25lKSB7XHJcbiAgcmV0dXJuIHsgdGl0bGUsIGRhdGUsIHByaW9yaXR5LCBkb25lIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZG9MaXN0KCkge1xyXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgIHN0b3JlVG9kb0luUHJvamVjdChpbnB1dC52YWx1ZSwgZGF0ZUlucHV0LnZhbHVlLCBwcmlvcml0eUJ0bi50ZXh0Q29udGVudCk7XHJcbiAgICBpZihjdXJyZW50UHJvamVjdCAhPT0gJ2FsbCcpIGFkZFRhc2tJbkFsbChpbnB1dC52YWx1ZSwgZGF0ZUlucHV0LnZhbHVlLCBwcmlvcml0eUJ0bi50ZXh0Q29udGVudCk7XHJcbiAgICByZXNldFByaW9yaXR5KCk7XHJcbiAgICBkaXNwbGF5TmV3VG9kbygpO1xyXG4gICAgLy8gcmVtZW1iZXJPbGRUYXNrcygpO1xyXG4gICAgcmVzZXRJbnB1dCgpO1xyXG4gICAgY2hlY2tJdGVtKCk7XHJcbiAgICBkZWxldGVUYXNrKCk7XHJcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcclxuICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcclxuICB9KTtcclxufVxyXG5mdW5jdGlvbiBzdG9yZVRvZG9JblByb2plY3QodG9kb1RpdGxlLCB0b2RvRGF0ZSwgdG9kb1ByaW9yaXR5KSB7XHJcbiAgbGV0IHByb2plY3QgPSBhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdF07XHJcbiAgLy8gaWYgKHByb2plY3QubGVuZ3RoID09PSAwKSB7XHJcbiAgLy8gICBwcm9qZWN0WzFdID0gdG9kbyh0b2RvVGl0bGUsIHRvZG9EYXRlLCB0b2RvUHJpb3JpdHkpO1xyXG4gIC8vIH0gZWxzZSB7XHJcbiAgcHJvamVjdFtwcm9qZWN0Lmxlbmd0aF0gPSB0b2RvKHRvZG9UaXRsZSwgdG9kb0RhdGUsIHRvZG9Qcmlvcml0eSwgXCJub1wiKTtcclxuICAvLyB9XHJcbiAgcmV0dXJuIGFsbFByb2plY3RzO1xyXG59XHJcbmZ1bmN0aW9uIGFkZFRhc2tJbkFsbCh0b2RvVGl0bGUsIHRvZG9EYXRlLCB0b2RvUHJpb3JpdHkpIHtcclxuICBsZXQgcHJvamVjdCA9IGFsbFByb2plY3RzW1wiYWxsXCJdO1xyXG4gIC8vIGlmIChwcm9qZWN0Lmxlbmd0aCA9PT0gMCkge1xyXG4gIC8vICAgcHJvamVjdFsxXSA9IHRvZG8odG9kb1RpdGxlLCB0b2RvRGF0ZSwgdG9kb1ByaW9yaXR5KTtcclxuICAvLyB9IGVsc2Uge1xyXG4gIHByb2plY3RbcHJvamVjdC5sZW5ndGhdID0gdG9kbyh0b2RvVGl0bGUsIHRvZG9EYXRlLCB0b2RvUHJpb3JpdHksIFwibm9cIik7XHJcbiAgLy8gfVxyXG4gIHJldHVybiBhbGxQcm9qZWN0cztcclxufVxyXG5mdW5jdGlvbiBkaXNwbGF5TmV3VG9kbygpIHtcclxuICBsZXQgcHJvamVjdCA9IGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0XTtcclxuICBsZXQgbmV3VGFzayA9IHByb2plY3RbcHJvamVjdC5sZW5ndGggLSAxXTtcclxuICBkaXNwbGF5LmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRvLWRvLWl0ZW1cIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjaGVjay1tYXJrXCI+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0by1kb1wiIHN0eWxlPVwiZGlzcGxheTppbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICR7bmV3VGFzay50aXRsZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlXCI+XHJcbiAgICAgICAgICAgICAgJHtuZXdUYXNrLmRhdGV9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmlvcml0eVwiPlxyXG4gICAgICAgICAgICAgICR7bmV3VGFzay5wcmlvcml0eX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgJHthZGREZWxldGVCdG4oKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0SW5wdXQoKSB7XHJcbiAgZm9ybS5yZXNldCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0l0ZW0oKSB7XHJcbiAgbGV0IGNoZWNrTWFya3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNoZWNrLW1hcmtcIik7XHJcbiAgY2hlY2tNYXJrcy5mb3JFYWNoKChtYXJrKSA9PiB7XHJcbiAgICBtYXJrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGNoZWNrTWFya3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNoZWNrLW1hcmtcIik7XHJcbiAgICAgIGxldCBpbmRleCA9IFsuLi5jaGVja01hcmtzXS5pbmRleE9mKG1hcmspO1xyXG4gICAgICAvLyBtYXJrLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImNoZWNrXCIpO1xyXG4gICAgICBsZXQgdGFzayA9IGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0XVtpbmRleF07XHJcbiAgICAgIGlmICh0YXNrID09PSBcInllc1wiKSB7XHJcbiAgICAgICAgdGFzay5kb25lID0gXCJub1wiO1xyXG4gICAgICAgIG1hcmsucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiY2hlY2tcIik7XHJcbiAgICAgICAgcmV0dXJuIHRhc2tcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0YXNrLmRvbmUgPSBcInllc1wiO1xyXG4gICAgICAgIG1hcmsucGFyZW50RWxlbWVudC5jbGFzc05hbWUgPSBcImNoZWNrXCI7XHJcbiAgICAgICAgcmV0dXJuIHRhc2tcclxuICAgICAgfSBcclxuICAgICAgLy8gYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RdWzBdID0gZGlzcGxheS5pbm5lckhUTUw7XHJcbiAgICAgIGNvbnNvbGUubG9nKGluZGV4KVxyXG4gICAgICAvLyBpZihtYXJrLnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lID09PSAnY2hlY2snKSB7XHJcbiAgICAgIC8vICAgYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RdW2luZGV4XS5kb25lID0gXCJ5ZXNcIjtcclxuICAgICAgLy8gfSBlbHNlIGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0XVtpbmRleF0uZG9uZSA9IFwibm9cIjtcclxuICAgICAgY29uc29sZS5sb2coYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RdW2luZGV4XS5kb25lKVxyXG4gICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5jb25zdCBwcm9qZWN0c1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FsbC1wcm9qZWN0c1wiKTtcclxuXHJcbmZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XHJcbiAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3RcIik7XHJcbiAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICBsZXQgbmFtZSA9IHByb21wdChcIndoYXQgaXMgdGhlIG5hbWUgb2YgdGhlIG5ldyBwcm9qZWN0P1wiKTtcclxuICAgIGlmIChuYW1lICE9PSBcIlwiICYmIG5hbWUgIT09IG51bGwpIHtcclxuICAgICAgbGV0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICBsZXQgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICBkZWxldGVQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gXCItXCI7XHJcbiAgICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgICBuZXdQcm9qZWN0LmlkID0gbmFtZS5zcGxpdChcIiBcIikuam9pbihcIi1cIik7XHJcbiAgICAgIG5ld1Byb2plY3QuY2xhc3NOYW1lID0gXCJwcm9qZWN0XCI7XHJcbiAgICAgIHByb2plY3RzU2VjdGlvbi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcclxuICAgICAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnRuKTtcclxuICAgICAgY3JlYXRlUHJvamVjdFN0b3JhZ2UobmV3UHJvamVjdC5pZCk7XHJcbiAgICAgIHN3aXRjaFByb2plY3RzKCk7XHJcbiAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RTdG9yYWdlKHByb2plY3RUaXRsZSkge1xyXG4gIGFsbFByb2plY3RzW3Byb2plY3RUaXRsZV0gPSBbXTtcclxuICBjb25zb2xlLmxvZyhhbGxQcm9qZWN0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN3aXRjaFByb2plY3RzKCkge1xyXG4gIGxldCBQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWxsLXByb2plY3RzXCIpO1xyXG4gIGxldCBsYXN0UHJvamVjdCA9IFByb2plY3RzLmxhc3RFbGVtZW50Q2hpbGQ7XHJcbiAgbGFzdFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIC8vIHJlbWVtYmVyT2xkVGFza3MoKTtcclxuICAgIGN1cnJlbnRQcm9qZWN0ID0gbGFzdFByb2plY3QuaWQ7XHJcbiAgICBpZiAoZGlzcGxheS5jbGFzc05hbWUgIT09IGN1cnJlbnRQcm9qZWN0KSB7XHJcbiAgICAgIGRpc3BsYXkucmVwbGFjZUNoaWxkcmVuKCk7XHJcbiAgICB9XHJcbiAgICBkaXNwbGF5LmNsYXNzTmFtZSA9IGxhc3RQcm9qZWN0LmlkO1xyXG4gICAgaGlnaGxpZ2h0UHJvamVjdChsYXN0UHJvamVjdCk7XHJcbiAgICBjaGVja0l0ZW0oKTtcclxuICAgIGRpc3BsYXlPbGRUYXNrcygpO1xyXG4gICAgY2hlY2tJdGVtKCk7XHJcbiAgICBmb2N1c0lucHV0KCk7XHJcbiAgICByZXNldElucHV0KCk7XHJcbiAgICByZXNldFByaW9yaXR5KCk7XHJcbiAgICBkZWxldGVUYXNrKCk7XHJcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcclxuICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKVxyXG4gIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGZvY3VzSW5wdXQoKSB7XHJcbiAgaW5wdXQuZm9jdXMoKTtcclxufVxyXG5mdW5jdGlvbiBkaXNwbGF5T2xkVGFza3MoKSB7XHJcbiAgLy8gbGV0IHByb2plY3QgPSBhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdF07XHJcbiAgLy8gaWYgKHByb2plY3QubGVuZ3RoICE9PSAwKSB7XHJcbiAgLy8gICByZXR1cm4gKGRpc3BsYXkuaW5uZXJIVE1MID0gcHJvamVjdFswXSk7XHJcbiAgLy8gfVxyXG4gIGxldCBkaXNwbGF5VGFza3MgPSBcIlwiO1xyXG4gIGxldCBwcm9qZWN0ID0gYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RdO1xyXG4gIHByb2plY3QuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2codGFzayk7XHJcbiAgICBkaXNwbGF5VGFza3MgKz0gYFxyXG4gICAgPGRpdiBjbGFzcz1cInRvLWRvLWl0ZW1cIj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2hlY2stbWFya1wiPjwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0by1kb1wiIHN0eWxlPVwiZGlzcGxheTppbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgJHt0YXNrLnRpdGxlfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImRhdGVcIj5cclxuICAgICAgICAgICR7dGFzay5kYXRlfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInByaW9yaXR5XCI+XHJcbiAgICAgICAgICAke3Rhc2sucHJpb3JpdHl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgICR7YWRkRGVsZXRlQnRuKCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIH0pO1xyXG4gIGRpc3BsYXkuaW5uZXJIVE1MID0gZGlzcGxheVRhc2tzO1xyXG59XHJcbmZ1bmN0aW9uIHJlbWVtYmVyT2xkVGFza3MoKSB7XHJcbiAgbGV0IHByb2plY3QgPSBhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdF07XHJcbiAgcHJvamVjdFswXSA9IGRpc3BsYXkuaW5uZXJIVE1MO1xyXG59XHJcbnRvZG9MaXN0KCk7XHJcbmFkZFByb2plY3QoKTtcclxuLy8gcmVtZW1iZXJPbGRUYXNrcygpO1xyXG5zZXRUaW1lb3V0KCgpID0+IHtcclxuICBkaXNwbGF5T2xkVGFza3MoKTtcclxufSwgNTAwKTsgXHJcbmNoZWNrSXRlbSgpO1xyXG5mdW5jdGlvbiBzaG93T2xkUHJvamVjdHMoKSB7XHJcbiAgZm9yIChsZXQgcHJvamVjdCBpbiBhbGxQcm9qZWN0cykge1xyXG4gICAgY29uc29sZS5sb2coYWxsUHJvamVjdHMpO1xyXG4gICAgY29uc29sZS5sb2cocHJvamVjdCk7XHJcbiAgICBsZXQgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBuZXdQcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdC5zcGxpdChcIi1cIikuam9pbihcIiBcIik7XHJcbiAgICBuZXdQcm9qZWN0LmlkID0gcHJvamVjdDtcclxuICAgIG5ld1Byb2plY3QuY2xhc3NOYW1lID0gXCJwcm9qZWN0XCI7XHJcbiAgICBwcm9qZWN0c1NlY3Rpb24uYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XHJcbiAgICBsZXQgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgZGVsZXRlUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IFwiLVwiO1xyXG4gICAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnRuKTtcclxuICAgIHN3aXRjaFByb2plY3RzKCk7XHJcbiAgfVxyXG59XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoZSkgPT4ge1xyXG4gIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgc2hvd09sZFByb2plY3RzKCk7XHJcbn0pO1xyXG5cclxubGV0IGNsaWNrcyA9IDA7XHJcbmZ1bmN0aW9uIGNoYW5nZVByaW9yaXR5KCkge1xyXG4gIHByaW9yaXR5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgIGNsaWNrcysrO1xyXG4gICAgaWYgKGNsaWNrcyA9PT0gMSkge1xyXG4gICAgICBwcmlvcml0eUJ0bi50ZXh0Q29udGVudCA9IFwiTWlkXCI7XHJcbiAgICAgIHByaW9yaXR5QnRuLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XCIpO1xyXG4gICAgfSBlbHNlIGlmIChjbGlja3MgPT09IDIpIHtcclxuICAgICAgcHJpb3JpdHlCdG4udGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcclxuICAgICAgcHJpb3JpdHlCdG4uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJpb3JpdHlCdG4udGV4dENvbnRlbnQgPSBcIkxvd1wiO1xyXG4gICAgICBwcmlvcml0eUJ0bi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImJhY2tncm91bmQtY29sb3I6IGdyZXk7XCIpO1xyXG4gICAgICBjbGlja3MgPSAwO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbmNoYW5nZVByaW9yaXR5KCk7XHJcbmZ1bmN0aW9uIHJlc2V0UHJpb3JpdHkoKSB7XHJcbiAgY2xpY2tzID0gMDtcclxuICBwcmlvcml0eUJ0bi50ZXh0Q29udGVudCA9IFwiTG93XCI7XHJcbiAgcHJpb3JpdHlCdG4uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1wiKTtcclxufVxyXG5mdW5jdGlvbiBoaWdobGlnaHRQcm9qZWN0KHByb2plY3QpIHtcclxuICBjb25zdCBhbGxQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKTtcclxuICBhbGxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PlxyXG4gICAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgIFwic3R5bGVcIixcclxuICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ4LCAxNTgsIDI1MCk7IGJveC1zaGFkb3c6IG5vbmU7XCJcclxuICAgIClcclxuICApO1xyXG4gIHByb2plY3Quc2V0QXR0cmlidXRlKFxyXG4gICAgXCJzdHlsZVwiLFxyXG4gICAgXCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1IDExNyAxNDEpOyBvdXRsaW5lOiAycHggc29saWQgd2hpdGU7IGJveC1zaGFkb3c6IDAgMCAxMHB4ICNmZjA2ZmZcIlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYWxsUHJvamVjdHMsIGN1cnJlbnRQcm9qZWN0LCBkaXNwbGF5IH0gZnJvbSBcIi4vdG9kby1saXN0XCI7XHJcbmltcG9ydCB7IHVwZGF0ZUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcclxuaW1wb3J0IHRyYXNoSWNvbiBmcm9tICcuLi9pbWFnZXMvaWNvbnM4LXRyYXNoLTMyLnBuZyc7XHJcbmV4cG9ydCBmdW5jdGlvbiBhZGREZWxldGVCdG4oKSB7XHJcbiAgcmV0dXJuIGAgICAgPGRpdiBjbGFzcz1cImRlbGV0ZS10YXNrXCI+XHJcbiAgICA8aW1nIGNsYXNzPVwidHJhc2gtaWNvblwiIHNyYz1cIiR7dHJhc2hJY29ufVwiIGFsdD1cImltYWdlIG9mIGEgdHJhc2ggY2FuXCIvPlxyXG48L2Rpdj5cclxuICAgIGA7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRhc2soKSB7XHJcbiAgbGV0IGFsbERlbGV0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRyYXNoLWljb25cIik7XHJcbiAgbGV0IGJ0bnNBcnJheSA9IFsuLi5hbGxEZWxldGVCdG5zXTtcclxuICBhbGxEZWxldGVCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGFsbERlbGV0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRyYXNoLWljb25cIik7XHJcbiAgICAgIGJ0bnNBcnJheSA9IFsuLi5hbGxEZWxldGVCdG5zXTtcclxuICAgICAgYnRuLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICBsZXQgaW5kZXggPSBidG5zQXJyYXkuaW5kZXhPZihidG4pO1xyXG4gICAgICBjb25zb2xlLmxvZyhpbmRleClcclxuICAgICAgY29uc29sZS5sb2coYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RdW2luZGV4XSlcclxuICAgICAgZGVsZXRlRnJvbUFsbChhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdF1baW5kZXhdKVxyXG4gICAgICBhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdF0uc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgLy8gYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RdWzBdID0gZGlzcGxheS5pbm5lckhUTUw7XHJcbiAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xyXG4gICAgICBjb25zb2xlLmxvZyhhbGxQcm9qZWN0cyk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5kZWxldGVUYXNrKCk7XHJcbmZ1bmN0aW9uIGRlbGV0ZUZyb21BbGwgKGRlbGV0ZWRQcm9wKSB7XHJcbiAgbGV0IGluZGV4ID0gYWxsUHJvamVjdHNbXCJhbGxcIl0uZmluZEluZGV4KHByb3AgPT4gcHJvcC50aXRsZSA9PT0gZGVsZXRlZFByb3AudGl0bGUpO1xyXG4gIGNvbnNvbGUubG9nKGluZGV4KTtcclxuICBhbGxQcm9qZWN0c1tcImFsbFwiXS5zcGxpY2UoaW5kZXgsIDEpO1xyXG59XHJcblxyXG4vLyBpbXBvcnQgeyBmb3JtYXREaXN0YW5jZSwgc3ViRGF5cyB9IGZyb20gJ2RhdGUtZm5zJ1xyXG4vLyBpbXBvcnQgeyBWYWx1ZSB9IGZyb20gXCJzYXNzXCI7XHJcblxyXG4vLyBjb25zb2xlLmxvZyhmb3JtYXREaXN0YW5jZShzdWJEYXlzKG5ldyBEYXRlKCksIDQpLCBuZXcgRGF0ZSgpLCB7IGFkZFN1ZmZpeDogdHJ1ZSB9KSlcclxuXHJcbi8vIGZ1bmN0aW9uIGFkZFRhc2tUb0FsbCgpIHtcclxuXHJcbi8vIH1cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHREYXRlKHZhbHVlKSB7XHJcbi8vICAgaWYgKHZhbHVlID09PSBcIlwiKSB7XHJcbi8vICAgICBsZXQgZGF5ID0gbmV3IERhdGUoKS5nZXREYXRlKCk7XHJcbi8vICAgICBsZXQgbW9udGggPSBuZXcgRGF0ZSgpLmdldE1vbnRoKCk7XHJcbi8vICAgICBsZXQgeWVhciA9IG5ldyBEYXRlKCkuZ2V0TW9udGgoKTtcclxuLy8gICAgIHJldHVybiAodmFsdWUgPSBgJHtkYXl9LSR7bW9udGh9LSR7eWVhcn1gKTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlEZWxldGVQcm9qZWN0c0J0bnMoKSB7XHJcbiAgbGV0IGRlbGV0ZVByb2plY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3Qgc3BhbicpO1xyXG4gIGRlbGV0ZVByb2plY3RCdG5zLmZvckVhY2goIGJ0biA9PiB7XHJcbiAgICAgYnRuLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gIH0pXHJcbn1cclxubGV0IGVkaXRQcm9qZWN0c0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXByb2plY3RzJyk7XHJcbmVkaXRQcm9qZWN0c0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlEZWxldGVQcm9qZWN0c0J0bnMpXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3RvZG9zLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9