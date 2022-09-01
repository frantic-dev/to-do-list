/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/todo-list.js ***!
  \**************************/
const addTodo = document.querySelector('#add-todo');
const input = document.querySelector('input');
const display = document.querySelector('#display');

function project (name, todos) {
    return {name, todos}
}

function Todo (title, description, dueDate, priority, checklist, notes) {
    return {title}
}


function displayToDo() {
    addTodo.addEventListener('click', () => {
        if(!!input.value) {
        display.innerHTML += `
        <div class="to-do-item">
            <button class="check-mark" style="padding: 5px"></button>
            <div class="to-do" style="display:inline-block">
                ${input.value}
            </div>
        </div>
        `
        resetInput();
        checkItem();
            }
    })
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
    const defaultProject = document.querySelector('#default-project');
    const addProjectBtn = document.querySelector('#add-project');
    addProjectBtn.addEventListener('click', () => {
        let newProject = document.createElement('button');
        newProject.textContent = prompt('what is the name of the new project?');
        newProject.id = newProject.textContent;
        defaultProject.after(newProject);
    })
}

displayToDo();
addProject();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kb2xpc3QuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvLWxpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYWRkVG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdG9kbycpO1xyXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XHJcbmNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlzcGxheScpO1xyXG5cclxuZnVuY3Rpb24gcHJvamVjdCAobmFtZSwgdG9kb3MpIHtcclxuICAgIHJldHVybiB7bmFtZSwgdG9kb3N9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFRvZG8gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNoZWNrbGlzdCwgbm90ZXMpIHtcclxuICAgIHJldHVybiB7dGl0bGV9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5VG9EbygpIHtcclxuICAgIGFkZFRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgaWYoISFpbnB1dC52YWx1ZSkge1xyXG4gICAgICAgIGRpc3BsYXkuaW5uZXJIVE1MICs9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwidG8tZG8taXRlbVwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2hlY2stbWFya1wiIHN0eWxlPVwicGFkZGluZzogNXB4XCI+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0by1kb1wiIHN0eWxlPVwiZGlzcGxheTppbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICR7aW5wdXQudmFsdWV9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGBcclxuICAgICAgICByZXNldElucHV0KCk7XHJcbiAgICAgICAgY2hlY2tJdGVtKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuZnVuY3Rpb24gcmVzZXRJbnB1dCgpIHtcclxuICAgIGlucHV0LnZhbHVlID0gXCJcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tJdGVtICgpIHtcclxuICAgIGxldCBjaGVja01hcmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrLW1hcmsnKTtcclxuICAgIGNoZWNrTWFya3MuZm9yRWFjaCggbWFyayA9PiB7XHJcbiAgICAgICAgbWFyay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgbWFyay5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2NoZWNrJyk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XHJcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZWZhdWx0LXByb2plY3QnKTtcclxuICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QnKTtcclxuICAgIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBuZXdQcm9qZWN0LnRleHRDb250ZW50ID0gcHJvbXB0KCd3aGF0IGlzIHRoZSBuYW1lIG9mIHRoZSBuZXcgcHJvamVjdD8nKTtcclxuICAgICAgICBuZXdQcm9qZWN0LmlkID0gbmV3UHJvamVjdC50ZXh0Q29udGVudDtcclxuICAgICAgICBkZWZhdWx0UHJvamVjdC5hZnRlcihuZXdQcm9qZWN0KTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmRpc3BsYXlUb0RvKCk7XHJcbmFkZFByb2plY3QoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=