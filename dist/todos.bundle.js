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



let allStoredProjects = JSON.parse(localStorage.getItem('allProjects'));
const addTodo = document.querySelector('#add-todo');
const input = document.querySelector('input');
const display = document.querySelector('#display');
const form = document.querySelector('form');

let allProjects = {
    ['default-project']: []
};

let currentProject = "default-project";

if (allStoredProjects) {
    allProjects = allStoredProjects;
    display.innerHTML = allStoredProjects[currentProject][0];
}

function todo(title) {
    return {title}
}


function todoList() {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if(!!input.value) {
            storeTodoInProject(input.value);
            displayNewTodo();
            rememberOldTasks();
            resetInput();
            checkItem();
            (0,_todos__WEBPACK_IMPORTED_MODULE_1__.deleteTask)();
            (0,_storage__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)();
        }
    })
}
function storeTodoInProject(todoTitle) {
    let project = allProjects[currentProject];
    if (currentProject !== "default-project" && project.length === 0) {
        project[1] = todo(todoTitle);
    } else {
        project[project.length] = todo(todoTitle); 
    }
    return allProjects;
}
function displayNewTodo() {
    let project = allProjects[currentProject];
    let newTask = project[project.length - 1];
        display.innerHTML += `
        <div class="to-do-item">
            <button class="check-mark"></button>
            <div class="to-do" style="display:inline-block">
                ${newTask.title}
            </div>
            ${(0,_todos__WEBPACK_IMPORTED_MODULE_1__.addDeleteBtn)()}
        </div>
        `
}

function resetInput() {
    form.reset();
}

function checkItem () {
    let checkMarks = document.querySelectorAll('.check-mark');
    checkMarks.forEach( mark => {
        mark.addEventListener('click', () => {
            mark.parentElement.classList.toggle('check');
            allProjects[currentProject][0] = display.innerHTML;
            (0,_storage__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)();
        })
    })
}

const projectsSection = document.querySelector('#all-projects');

function addProject() {
    switchProjects();
    const addProjectBtn = document.querySelector('#add-project');
    addProjectBtn.addEventListener('click', (e) => {
        e.stopImmediatePropagation();
        let newProject = document.createElement('button');
        newProject.textContent = prompt('what is the name of the new project?');
        newProject.id = newProject.textContent.split(' ').join('-');
        newProject.className = "project";
        projectsSection.appendChild(newProject);
        createProjectStorage(newProject.id);
        switchProjects();
        (0,_storage__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)();
    })
}
function createProjectStorage(projectTitle) {
    allProjects[projectTitle] = [];
    console.log(allProjects);
}

function switchProjects () {
    let allProjects = document.querySelector('#all-projects');
    let lastProject = allProjects.lastElementChild;
    lastProject.addEventListener('click', () => {
            rememberOldTasks();
            currentProject = lastProject.id;
            if(display.className !== currentProject) {
                display.replaceChildren();
            }
            display.className = lastProject.id;
            checkItem();
            displayOldTasks();
            checkItem();
            focusInput();
            (0,_todos__WEBPACK_IMPORTED_MODULE_1__.deleteTask)();
            (0,_storage__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)();
        })
}
function focusInput() {
    input.focus();
}
function displayOldTasks() {
    let project = allProjects[currentProject];
    if (project.length !== 0){
    return display.innerHTML =  project[0];
    }
}
function rememberOldTasks () {
    let project = allProjects[currentProject];  
    project[0] = display.innerHTML;
}
todoList();
addProject();
rememberOldTasks();
displayOldTasks();
checkItem();
function showOldProjects () {
    for (let project in allProjects){
        console.log(allProjects)
        console.log(project)
        if(project !== "default-project") {
         let newProject = document.createElement('button');
        newProject.textContent = project.split('-').join(' ');
        newProject.id = project;
        newProject.className = "project";
        projectsSection.appendChild(newProject);
        switchProjects();
        }
    }
}
window.addEventListener('load',(e) => {
    e.stopImmediatePropagation();
    showOldProjects();
})

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


function addDeleteBtn() {
  return `    <div class="delete-task">
    <img class="trash-icon" src="../images/icons8-trash-32.png" alt="image of a trash can"/>
</div>
    `;
}
function deleteTask() {
  const allDeleteBtns = document.querySelectorAll(".trash-icon");
  let btnsArray = [...allDeleteBtns];
  console.log(allDeleteBtns);
  allDeleteBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log(btn);
      btn.parentElement.parentElement.remove();
      console.log(btnsArray.indexOf(btn));
      let index = btnsArray.indexOf(btn) + 1;
      _todo_list__WEBPACK_IMPORTED_MODULE_0__.allProjects[_todo_list__WEBPACK_IMPORTED_MODULE_0__.currentProject].splice(index, 1);
      _todo_list__WEBPACK_IMPORTED_MODULE_0__.allProjects[_todo_list__WEBPACK_IMPORTED_MODULE_0__.currentProject][0] = _todo_list__WEBPACK_IMPORTED_MODULE_0__.display.innerHTML;
    //   return allProjects;:
    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.updateLocalStorage)();
      console.log(_todo_list__WEBPACK_IMPORTED_MODULE_0__.allProjects);
    });
  });
}
deleteTask();


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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/todos.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kb3MuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUMxQztBQUNPO0FBQ1AscURBQXFELG1EQUFXO0FBQ2hFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSjZDO0FBQ0k7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxrREFBVTtBQUN0QixZQUFZLDREQUFrQjtBQUM5QjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQSxjQUFjLG9EQUFZO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDREQUFrQjtBQUM5QixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0REFBa0I7QUFDMUIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtEQUFVO0FBQ3RCLFlBQVksNERBQWtCO0FBQzlCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hKa0U7QUFDcEI7QUFDeEM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG1EQUFXLENBQUMsc0RBQWM7QUFDaEMsTUFBTSxtREFBVyxDQUFDLHNEQUFjLE9BQU8seURBQWlCO0FBQ3hELDRCQUE0QjtBQUM1QixJQUFJLDREQUFrQjtBQUN0QixrQkFBa0IsbURBQVc7QUFDN0IsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOzs7Ozs7O1VDMUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kby1saXN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kb3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGxQcm9qZWN0cyB9IGZyb20gXCIuL3RvZG8tbGlzdFwiOyAgXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTG9jYWxTdG9yYWdlKCkge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGxQcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSk7XHJcbn1cclxuIiwiaW1wb3J0IHt1cGRhdGVMb2NhbFN0b3JhZ2V9IGZyb20gXCIuL3N0b3JhZ2VcIjtcclxuaW1wb3J0IHthZGREZWxldGVCdG4sIGRlbGV0ZVRhc2t9IGZyb20gXCIuL3RvZG9zXCI7XHJcblxyXG5sZXQgYWxsU3RvcmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxQcm9qZWN0cycpKTtcclxuY29uc3QgYWRkVG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdG9kbycpO1xyXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XHJcbmV4cG9ydCBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rpc3BsYXknKTtcclxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcclxuXHJcbmV4cG9ydCBsZXQgYWxsUHJvamVjdHMgPSB7XHJcbiAgICBbJ2RlZmF1bHQtcHJvamVjdCddOiBbXVxyXG59O1xyXG5cclxuZXhwb3J0IGxldCBjdXJyZW50UHJvamVjdCA9IFwiZGVmYXVsdC1wcm9qZWN0XCI7XHJcblxyXG5pZiAoYWxsU3RvcmVkUHJvamVjdHMpIHtcclxuICAgIGFsbFByb2plY3RzID0gYWxsU3RvcmVkUHJvamVjdHM7XHJcbiAgICBkaXNwbGF5LmlubmVySFRNTCA9IGFsbFN0b3JlZFByb2plY3RzW2N1cnJlbnRQcm9qZWN0XVswXTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9kbyh0aXRsZSkge1xyXG4gICAgcmV0dXJuIHt0aXRsZX1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHRvZG9MaXN0KCkge1xyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZighIWlucHV0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHN0b3JlVG9kb0luUHJvamVjdChpbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgIGRpc3BsYXlOZXdUb2RvKCk7XHJcbiAgICAgICAgICAgIHJlbWVtYmVyT2xkVGFza3MoKTtcclxuICAgICAgICAgICAgcmVzZXRJbnB1dCgpO1xyXG4gICAgICAgICAgICBjaGVja0l0ZW0oKTtcclxuICAgICAgICAgICAgZGVsZXRlVGFzaygpO1xyXG4gICAgICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcbmZ1bmN0aW9uIHN0b3JlVG9kb0luUHJvamVjdCh0b2RvVGl0bGUpIHtcclxuICAgIGxldCBwcm9qZWN0ID0gYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RdO1xyXG4gICAgaWYgKGN1cnJlbnRQcm9qZWN0ICE9PSBcImRlZmF1bHQtcHJvamVjdFwiICYmIHByb2plY3QubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcHJvamVjdFsxXSA9IHRvZG8odG9kb1RpdGxlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcHJvamVjdFtwcm9qZWN0Lmxlbmd0aF0gPSB0b2RvKHRvZG9UaXRsZSk7IFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFsbFByb2plY3RzO1xyXG59XHJcbmZ1bmN0aW9uIGRpc3BsYXlOZXdUb2RvKCkge1xyXG4gICAgbGV0IHByb2plY3QgPSBhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdF07XHJcbiAgICBsZXQgbmV3VGFzayA9IHByb2plY3RbcHJvamVjdC5sZW5ndGggLSAxXTtcclxuICAgICAgICBkaXNwbGF5LmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRvLWRvLWl0ZW1cIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNoZWNrLW1hcmtcIj48L2J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvLWRvXCIgc3R5bGU9XCJkaXNwbGF5OmlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgJHtuZXdUYXNrLnRpdGxlfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgJHthZGREZWxldGVCdG4oKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0SW5wdXQoKSB7XHJcbiAgICBmb3JtLnJlc2V0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrSXRlbSAoKSB7XHJcbiAgICBsZXQgY2hlY2tNYXJrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVjay1tYXJrJyk7XHJcbiAgICBjaGVja01hcmtzLmZvckVhY2goIG1hcmsgPT4ge1xyXG4gICAgICAgIG1hcmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1hcmsucGFyZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdjaGVjaycpO1xyXG4gICAgICAgICAgICBhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdF1bMF0gPSBkaXNwbGF5LmlubmVySFRNTDtcclxuICAgICAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbnN0IHByb2plY3RzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbGwtcHJvamVjdHMnKTtcclxuXHJcbmZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XHJcbiAgICBzd2l0Y2hQcm9qZWN0cygpO1xyXG4gICAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtcHJvamVjdCcpO1xyXG4gICAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBsZXQgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSBwcm9tcHQoJ3doYXQgaXMgdGhlIG5hbWUgb2YgdGhlIG5ldyBwcm9qZWN0PycpO1xyXG4gICAgICAgIG5ld1Byb2plY3QuaWQgPSBuZXdQcm9qZWN0LnRleHRDb250ZW50LnNwbGl0KCcgJykuam9pbignLScpO1xyXG4gICAgICAgIG5ld1Byb2plY3QuY2xhc3NOYW1lID0gXCJwcm9qZWN0XCI7XHJcbiAgICAgICAgcHJvamVjdHNTZWN0aW9uLmFwcGVuZENoaWxkKG5ld1Byb2plY3QpO1xyXG4gICAgICAgIGNyZWF0ZVByb2plY3RTdG9yYWdlKG5ld1Byb2plY3QuaWQpO1xyXG4gICAgICAgIHN3aXRjaFByb2plY3RzKCk7XHJcbiAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XHJcbiAgICB9KVxyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RTdG9yYWdlKHByb2plY3RUaXRsZSkge1xyXG4gICAgYWxsUHJvamVjdHNbcHJvamVjdFRpdGxlXSA9IFtdO1xyXG4gICAgY29uc29sZS5sb2coYWxsUHJvamVjdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzd2l0Y2hQcm9qZWN0cyAoKSB7XHJcbiAgICBsZXQgYWxsUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWxsLXByb2plY3RzJyk7XHJcbiAgICBsZXQgbGFzdFByb2plY3QgPSBhbGxQcm9qZWN0cy5sYXN0RWxlbWVudENoaWxkO1xyXG4gICAgbGFzdFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlbWVtYmVyT2xkVGFza3MoKTtcclxuICAgICAgICAgICAgY3VycmVudFByb2plY3QgPSBsYXN0UHJvamVjdC5pZDtcclxuICAgICAgICAgICAgaWYoZGlzcGxheS5jbGFzc05hbWUgIT09IGN1cnJlbnRQcm9qZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5LnJlcGxhY2VDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpc3BsYXkuY2xhc3NOYW1lID0gbGFzdFByb2plY3QuaWQ7XHJcbiAgICAgICAgICAgIGNoZWNrSXRlbSgpO1xyXG4gICAgICAgICAgICBkaXNwbGF5T2xkVGFza3MoKTtcclxuICAgICAgICAgICAgY2hlY2tJdGVtKCk7XHJcbiAgICAgICAgICAgIGZvY3VzSW5wdXQoKTtcclxuICAgICAgICAgICAgZGVsZXRlVGFzaygpO1xyXG4gICAgICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgICB9KVxyXG59XHJcbmZ1bmN0aW9uIGZvY3VzSW5wdXQoKSB7XHJcbiAgICBpbnB1dC5mb2N1cygpO1xyXG59XHJcbmZ1bmN0aW9uIGRpc3BsYXlPbGRUYXNrcygpIHtcclxuICAgIGxldCBwcm9qZWN0ID0gYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RdO1xyXG4gICAgaWYgKHByb2plY3QubGVuZ3RoICE9PSAwKXtcclxuICAgIHJldHVybiBkaXNwbGF5LmlubmVySFRNTCA9ICBwcm9qZWN0WzBdO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHJlbWVtYmVyT2xkVGFza3MgKCkge1xyXG4gICAgbGV0IHByb2plY3QgPSBhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdF07ICBcclxuICAgIHByb2plY3RbMF0gPSBkaXNwbGF5LmlubmVySFRNTDtcclxufVxyXG50b2RvTGlzdCgpO1xyXG5hZGRQcm9qZWN0KCk7XHJcbnJlbWVtYmVyT2xkVGFza3MoKTtcclxuZGlzcGxheU9sZFRhc2tzKCk7XHJcbmNoZWNrSXRlbSgpO1xyXG5mdW5jdGlvbiBzaG93T2xkUHJvamVjdHMgKCkge1xyXG4gICAgZm9yIChsZXQgcHJvamVjdCBpbiBhbGxQcm9qZWN0cyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coYWxsUHJvamVjdHMpXHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdClcclxuICAgICAgICBpZihwcm9qZWN0ICE9PSBcImRlZmF1bHQtcHJvamVjdFwiKSB7XHJcbiAgICAgICAgIGxldCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgbmV3UHJvamVjdC50ZXh0Q29udGVudCA9IHByb2plY3Quc3BsaXQoJy0nKS5qb2luKCcgJyk7XHJcbiAgICAgICAgbmV3UHJvamVjdC5pZCA9IHByb2plY3Q7XHJcbiAgICAgICAgbmV3UHJvamVjdC5jbGFzc05hbWUgPSBcInByb2plY3RcIjtcclxuICAgICAgICBwcm9qZWN0c1NlY3Rpb24uYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XHJcbiAgICAgICAgc3dpdGNoUHJvamVjdHMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLChlKSA9PiB7XHJcbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgc2hvd09sZFByb2plY3RzKCk7XHJcbn0pIiwiaW1wb3J0IHsgYWxsUHJvamVjdHMsIGN1cnJlbnRQcm9qZWN0LCBkaXNwbGF5IH0gZnJvbSBcIi4vdG9kby1saXN0XCI7XHJcbmltcG9ydCB7IHVwZGF0ZUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIGFkZERlbGV0ZUJ0bigpIHtcclxuICByZXR1cm4gYCAgICA8ZGl2IGNsYXNzPVwiZGVsZXRlLXRhc2tcIj5cclxuICAgIDxpbWcgY2xhc3M9XCJ0cmFzaC1pY29uXCIgc3JjPVwiLi4vaW1hZ2VzL2ljb25zOC10cmFzaC0zMi5wbmdcIiBhbHQ9XCJpbWFnZSBvZiBhIHRyYXNoIGNhblwiLz5cclxuPC9kaXY+XHJcbiAgICBgO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVUYXNrKCkge1xyXG4gIGNvbnN0IGFsbERlbGV0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRyYXNoLWljb25cIik7XHJcbiAgbGV0IGJ0bnNBcnJheSA9IFsuLi5hbGxEZWxldGVCdG5zXTtcclxuICBjb25zb2xlLmxvZyhhbGxEZWxldGVCdG5zKTtcclxuICBhbGxEZWxldGVCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGJ0bik7XHJcbiAgICAgIGJ0bi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGJ0bnNBcnJheS5pbmRleE9mKGJ0bikpO1xyXG4gICAgICBsZXQgaW5kZXggPSBidG5zQXJyYXkuaW5kZXhPZihidG4pICsgMTtcclxuICAgICAgYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RdLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0XVswXSA9IGRpc3BsYXkuaW5uZXJIVE1MO1xyXG4gICAgLy8gICByZXR1cm4gYWxsUHJvamVjdHM7OlxyXG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcbmRlbGV0ZVRhc2soKTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy90b2Rvcy5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==