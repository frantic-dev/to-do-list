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
/* harmony export */   "allProjects": () => (/* binding */ allProjects)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/storage.js");

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
            console.log(allProjects)
            ;(0,_storage__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)();
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/storage.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQzFDO0FBQ087QUFDUCxxREFBcUQsbURBQVc7QUFDaEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw2REFBa0I7QUFDOUI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNERBQWtCO0FBQzlCLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDREQUFrQjtBQUMxQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNERBQWtCO0FBQzlCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7VUNwSkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvLWxpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGxQcm9qZWN0cyB9IGZyb20gXCIuL3RvZG8tbGlzdFwiOyAgXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTG9jYWxTdG9yYWdlKCkge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGxQcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSk7XHJcbn1cclxuIiwiaW1wb3J0IHt1cGRhdGVMb2NhbFN0b3JhZ2V9IGZyb20gXCIuL3N0b3JhZ2VcIjtcclxubGV0IGFsbFN0b3JlZFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsUHJvamVjdHMnKSk7XHJcbmNvbnN0IGFkZFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRvZG8nKTtcclxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xyXG5jb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rpc3BsYXknKTtcclxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcclxuXHJcbmV4cG9ydCBsZXQgYWxsUHJvamVjdHMgPSB7XHJcbiAgICBbJ2RlZmF1bHQtcHJvamVjdCddOiBbXVxyXG59O1xyXG5cclxubGV0IGN1cnJlbnRQcm9qZWN0ID0gXCJkZWZhdWx0LXByb2plY3RcIjtcclxuXHJcbmlmIChhbGxTdG9yZWRQcm9qZWN0cykge1xyXG4gICAgYWxsUHJvamVjdHMgPSBhbGxTdG9yZWRQcm9qZWN0cztcclxuICAgIGRpc3BsYXkuaW5uZXJIVE1MID0gYWxsU3RvcmVkUHJvamVjdHNbY3VycmVudFByb2plY3RdWzBdO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b2RvKHRpdGxlKSB7XHJcbiAgICByZXR1cm4ge3RpdGxlfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gdG9kb0xpc3QoKSB7XHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCEhaW5wdXQudmFsdWUpIHtcclxuICAgICAgICAgICAgc3RvcmVUb2RvSW5Qcm9qZWN0KGlucHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgZGlzcGxheU5ld1RvZG8oKTtcclxuICAgICAgICAgICAgcmVtZW1iZXJPbGRUYXNrcygpO1xyXG4gICAgICAgICAgICByZXNldElucHV0KCk7XHJcbiAgICAgICAgICAgIGNoZWNrSXRlbSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhbGxQcm9qZWN0cylcclxuICAgICAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5mdW5jdGlvbiBzdG9yZVRvZG9JblByb2plY3QodG9kb1RpdGxlKSB7XHJcbiAgICBsZXQgcHJvamVjdCA9IGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0XTtcclxuICAgIGlmIChjdXJyZW50UHJvamVjdCAhPT0gXCJkZWZhdWx0LXByb2plY3RcIiAmJiBwcm9qZWN0Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHByb2plY3RbMV0gPSB0b2RvKHRvZG9UaXRsZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHByb2plY3RbcHJvamVjdC5sZW5ndGhdID0gdG9kbyh0b2RvVGl0bGUpOyBcclxuICAgIH1cclxuICAgIHJldHVybiBhbGxQcm9qZWN0cztcclxufVxyXG5mdW5jdGlvbiBkaXNwbGF5TmV3VG9kbygpIHtcclxuICAgIGxldCBwcm9qZWN0ID0gYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RdO1xyXG4gICAgbGV0IG5ld1Rhc2sgPSBwcm9qZWN0W3Byb2plY3QubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgZGlzcGxheS5pbm5lckhUTUwgKz0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0by1kby1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjaGVjay1tYXJrXCI+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0by1kb1wiIHN0eWxlPVwiZGlzcGxheTppbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICR7bmV3VGFzay50aXRsZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYFxyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldElucHV0KCkge1xyXG4gICAgZm9ybS5yZXNldCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0l0ZW0gKCkge1xyXG4gICAgbGV0IGNoZWNrTWFya3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2stbWFyaycpO1xyXG4gICAgY2hlY2tNYXJrcy5mb3JFYWNoKCBtYXJrID0+IHtcclxuICAgICAgICBtYXJrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBtYXJrLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnY2hlY2snKTtcclxuICAgICAgICAgICAgYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RdWzBdID0gZGlzcGxheS5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCBwcm9qZWN0c1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWxsLXByb2plY3RzJyk7XHJcblxyXG5mdW5jdGlvbiBhZGRQcm9qZWN0KCkge1xyXG4gICAgc3dpdGNoUHJvamVjdHMoKTtcclxuICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QnKTtcclxuICAgIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBuZXdQcm9qZWN0LnRleHRDb250ZW50ID0gcHJvbXB0KCd3aGF0IGlzIHRoZSBuYW1lIG9mIHRoZSBuZXcgcHJvamVjdD8nKTtcclxuICAgICAgICBuZXdQcm9qZWN0LmlkID0gbmV3UHJvamVjdC50ZXh0Q29udGVudC5zcGxpdCgnICcpLmpvaW4oJy0nKTtcclxuICAgICAgICBuZXdQcm9qZWN0LmNsYXNzTmFtZSA9IFwicHJvamVjdFwiO1xyXG4gICAgICAgIHByb2plY3RzU2VjdGlvbi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcclxuICAgICAgICBjcmVhdGVQcm9qZWN0U3RvcmFnZShuZXdQcm9qZWN0LmlkKTtcclxuICAgICAgICBzd2l0Y2hQcm9qZWN0cygpO1xyXG4gICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xyXG4gICAgfSlcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0U3RvcmFnZShwcm9qZWN0VGl0bGUpIHtcclxuICAgIGFsbFByb2plY3RzW3Byb2plY3RUaXRsZV0gPSBbXTtcclxuICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3dpdGNoUHJvamVjdHMgKCkge1xyXG4gICAgbGV0IGFsbFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FsbC1wcm9qZWN0cycpO1xyXG4gICAgbGV0IGxhc3RQcm9qZWN0ID0gYWxsUHJvamVjdHMubGFzdEVsZW1lbnRDaGlsZDtcclxuICAgIGxhc3RQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICByZW1lbWJlck9sZFRhc2tzKCk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gbGFzdFByb2plY3QuaWQ7XHJcbiAgICAgICAgICAgIGlmKGRpc3BsYXkuY2xhc3NOYW1lICE9PSBjdXJyZW50UHJvamVjdCkge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheS5yZXBsYWNlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwbGF5LmNsYXNzTmFtZSA9IGxhc3RQcm9qZWN0LmlkO1xyXG4gICAgICAgICAgICBjaGVja0l0ZW0oKTtcclxuICAgICAgICAgICAgZGlzcGxheU9sZFRhc2tzKCk7XHJcbiAgICAgICAgICAgIGNoZWNrSXRlbSgpO1xyXG4gICAgICAgICAgICBmb2N1c0lucHV0KCk7XHJcbiAgICAgICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgIH0pXHJcbn1cclxuZnVuY3Rpb24gZm9jdXNJbnB1dCgpIHtcclxuICAgIGlucHV0LmZvY3VzKCk7XHJcbn1cclxuZnVuY3Rpb24gZGlzcGxheU9sZFRhc2tzKCkge1xyXG4gICAgbGV0IHByb2plY3QgPSBhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdF07XHJcbiAgICBpZiAocHJvamVjdC5sZW5ndGggIT09IDApe1xyXG4gICAgcmV0dXJuIGRpc3BsYXkuaW5uZXJIVE1MID0gIHByb2plY3RbMF07XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gcmVtZW1iZXJPbGRUYXNrcyAoKSB7XHJcbiAgICBsZXQgcHJvamVjdCA9IGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0XTsgIFxyXG4gICAgcHJvamVjdFswXSA9IGRpc3BsYXkuaW5uZXJIVE1MO1xyXG59XHJcbnRvZG9MaXN0KCk7XHJcbmFkZFByb2plY3QoKTtcclxucmVtZW1iZXJPbGRUYXNrcygpO1xyXG5kaXNwbGF5T2xkVGFza3MoKTtcclxuY2hlY2tJdGVtKCk7XHJcbmZ1bmN0aW9uIHNob3dPbGRQcm9qZWN0cyAoKSB7XHJcbiAgICBmb3IgKGxldCBwcm9qZWN0IGluIGFsbFByb2plY3RzKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhhbGxQcm9qZWN0cylcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0KVxyXG4gICAgICAgIGlmKHByb2plY3QgIT09IFwiZGVmYXVsdC1wcm9qZWN0XCIpIHtcclxuICAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBuZXdQcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdC5zcGxpdCgnLScpLmpvaW4oJyAnKTtcclxuICAgICAgICBuZXdQcm9qZWN0LmlkID0gcHJvamVjdDtcclxuICAgICAgICBuZXdQcm9qZWN0LmNsYXNzTmFtZSA9IFwicHJvamVjdFwiO1xyXG4gICAgICAgIHByb2plY3RzU2VjdGlvbi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcclxuICAgICAgICBzd2l0Y2hQcm9qZWN0cygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsKGUpID0+IHtcclxuICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICBzaG93T2xkUHJvamVjdHMoKTtcclxufSkiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3N0b3JhZ2UuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=