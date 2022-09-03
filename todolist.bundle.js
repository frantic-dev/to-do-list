/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/todo-list.js ***!
  \**************************/
const addTodo = document.querySelector('#add-todo');
const input = document.querySelector('input');
const display = document.querySelector('#display');

let allProjects = {
    ['default-project']: []
};


function todo(title) {
    return {title}
}

function todoList() {
    addTodo.addEventListener('click', () => {
        if(!!input.value) {
            storeTodoInProject(input.value);
            displayTodo();
            resetInput();
            checkItem();
            console.log(allProjects)
        }
    })
}
function storeTodoInProject(todoTitle) {
    let project = allProjects['default-project'];
    project[project.length] = todo(todoTitle);
    return allProjects;
}
function displayTodo() {
    let project = allProjects['default-project'];
    let newTask = project[project.length - 1];
        display.innerHTML += `
        <div class="to-do-item">
            <button class="check-mark" style="padding: 5px"></button>
            <div class="to-do" style="display:inline-block">
                ${newTask.title}
            </div>
        </div>
        `
}

function resetInput() {
    input.value = "";
}

function checkItem () {
    let checkMarks = document.querySelectorAll('.check-mark');
    checkMarks.forEach( mark => {
        mark.addEventListener('click', () => {
            mark.parentElement.classList.toggle('check');
        })
    })
}

function addProject() {
    const sectionProjects = document.querySelector('#all-projects');
    const addProjectBtn = document.querySelector('#add-project');
    addProjectBtn.addEventListener('click', () => {
        let newProject = document.createElement('button');
        newProject.textContent = prompt('what is the name of the new project?');
        newProject.id = newProject.textContent.split(' ').join('-');
        sectionProjects.appendChild(newProject);
    })
}

todoList();
addProject();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kb2xpc3QuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvLWxpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYWRkVG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdG9kbycpO1xyXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XHJcbmNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlzcGxheScpO1xyXG5cclxubGV0IGFsbFByb2plY3RzID0ge1xyXG4gICAgWydkZWZhdWx0LXByb2plY3QnXTogW11cclxufTtcclxuXHJcblxyXG5mdW5jdGlvbiB0b2RvKHRpdGxlKSB7XHJcbiAgICByZXR1cm4ge3RpdGxlfVxyXG59XHJcblxyXG5mdW5jdGlvbiB0b2RvTGlzdCgpIHtcclxuICAgIGFkZFRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgaWYoISFpbnB1dC52YWx1ZSkge1xyXG4gICAgICAgICAgICBzdG9yZVRvZG9JblByb2plY3QoaW5wdXQudmFsdWUpO1xyXG4gICAgICAgICAgICBkaXNwbGF5VG9kbygpO1xyXG4gICAgICAgICAgICByZXNldElucHV0KCk7XHJcbiAgICAgICAgICAgIGNoZWNrSXRlbSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhbGxQcm9qZWN0cylcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcbmZ1bmN0aW9uIHN0b3JlVG9kb0luUHJvamVjdCh0b2RvVGl0bGUpIHtcclxuICAgIGxldCBwcm9qZWN0ID0gYWxsUHJvamVjdHNbJ2RlZmF1bHQtcHJvamVjdCddO1xyXG4gICAgcHJvamVjdFtwcm9qZWN0Lmxlbmd0aF0gPSB0b2RvKHRvZG9UaXRsZSk7XHJcbiAgICByZXR1cm4gYWxsUHJvamVjdHM7XHJcbn1cclxuZnVuY3Rpb24gZGlzcGxheVRvZG8oKSB7XHJcbiAgICBsZXQgcHJvamVjdCA9IGFsbFByb2plY3RzWydkZWZhdWx0LXByb2plY3QnXTtcclxuICAgIGxldCBuZXdUYXNrID0gcHJvamVjdFtwcm9qZWN0Lmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIGRpc3BsYXkuaW5uZXJIVE1MICs9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwidG8tZG8taXRlbVwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2hlY2stbWFya1wiIHN0eWxlPVwicGFkZGluZzogNXB4XCI+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0by1kb1wiIHN0eWxlPVwiZGlzcGxheTppbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICR7bmV3VGFzay50aXRsZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYFxyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldElucHV0KCkge1xyXG4gICAgaW5wdXQudmFsdWUgPSBcIlwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0l0ZW0gKCkge1xyXG4gICAgbGV0IGNoZWNrTWFya3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2stbWFyaycpO1xyXG4gICAgY2hlY2tNYXJrcy5mb3JFYWNoKCBtYXJrID0+IHtcclxuICAgICAgICBtYXJrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBtYXJrLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnY2hlY2snKTtcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUHJvamVjdCgpIHtcclxuICAgIGNvbnN0IHNlY3Rpb25Qcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbGwtcHJvamVjdHMnKTtcclxuICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QnKTtcclxuICAgIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBuZXdQcm9qZWN0LnRleHRDb250ZW50ID0gcHJvbXB0KCd3aGF0IGlzIHRoZSBuYW1lIG9mIHRoZSBuZXcgcHJvamVjdD8nKTtcclxuICAgICAgICBuZXdQcm9qZWN0LmlkID0gbmV3UHJvamVjdC50ZXh0Q29udGVudC5zcGxpdCgnICcpLmpvaW4oJy0nKTtcclxuICAgICAgICBzZWN0aW9uUHJvamVjdHMuYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XHJcbiAgICB9KVxyXG59XHJcblxyXG50b2RvTGlzdCgpO1xyXG5hZGRQcm9qZWN0KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9