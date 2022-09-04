/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/todo-list.js ***!
  \**************************/
const addTodo = document.querySelector('#add-todo');
const input = document.querySelector('input');
const display = document.querySelector('#display');
const form = document.querySelector('form');

let allProjects = {
    ['default-project']: []
};


function todo(title) {
    return {title}
}

let currentProject = "default-project";

function todoList() {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if(!!input.value) {
            storeTodoInProject(input.value);
            displayNewTodo();
            resetInput();
            checkItem();
            console.log(allProjects)
        }
    })
}
function storeTodoInProject(todoTitle) {
    let project = allProjects[currentProject];
    project[project.length] = todo(todoTitle);
    return allProjects;
}
function displayNewTodo() {
    let project = allProjects[currentProject];
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
    form.reset();
}

function checkItem () {
    let checkMarks = document.querySelectorAll('.check-mark');
    checkMarks.forEach( mark => {
        mark.addEventListener('click', () => {
            mark.parentElement.classList.toggle('check');
        })
    })
}

const projectsSection = document.querySelector('#all-projects');

function addProject() {
    switchProjects();
    const sectionProjects = document.querySelector('#all-projects');
    const addProjectBtn = document.querySelector('#add-project');
    addProjectBtn.addEventListener('click', () => {
        let newProject = document.createElement('button');
        newProject.textContent = prompt('what is the name of the new project?');
        newProject.id = newProject.textContent.split(' ').join('-');
        newProject.className = "project";
        sectionProjects.appendChild(newProject);
        createProjectStorage(newProject.id);
        switchProjects();
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
            currentProject = lastProject.id;
            if(display.className !== currentProject) {
                display.replaceChildren();
            }
            display.className = lastProject.id;
            displayOldTasks();
            autofocusInput();
        })
}
function autofocusInput() {
    input.focus();
}
function displayOldTasks() {
    let project = allProjects[currentProject];
    let displayAllTasks = "";
    for (let i = 0; i < project.length; i++ ) {
        displayAllTasks += `
        <div class="to-do-item">
            <button class="check-mark" style="padding: 5px"></button>
            <div class="to-do" style="display:inline-block">
                ${project[i].title}
            </div>
        </div>
        `
    }
    return display.innerHTML =  displayAllTasks;
}

todoList();
addProject();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kb2xpc3QuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0JBQW9CO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvLWxpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYWRkVG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdG9kbycpO1xyXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XHJcbmNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlzcGxheScpO1xyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xyXG5cclxubGV0IGFsbFByb2plY3RzID0ge1xyXG4gICAgWydkZWZhdWx0LXByb2plY3QnXTogW11cclxufTtcclxuXHJcblxyXG5mdW5jdGlvbiB0b2RvKHRpdGxlKSB7XHJcbiAgICByZXR1cm4ge3RpdGxlfVxyXG59XHJcblxyXG5sZXQgY3VycmVudFByb2plY3QgPSBcImRlZmF1bHQtcHJvamVjdFwiO1xyXG5cclxuZnVuY3Rpb24gdG9kb0xpc3QoKSB7XHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKCEhaW5wdXQudmFsdWUpIHtcclxuICAgICAgICAgICAgc3RvcmVUb2RvSW5Qcm9qZWN0KGlucHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgZGlzcGxheU5ld1RvZG8oKTtcclxuICAgICAgICAgICAgcmVzZXRJbnB1dCgpO1xyXG4gICAgICAgICAgICBjaGVja0l0ZW0oKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYWxsUHJvamVjdHMpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5mdW5jdGlvbiBzdG9yZVRvZG9JblByb2plY3QodG9kb1RpdGxlKSB7XHJcbiAgICBsZXQgcHJvamVjdCA9IGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0XTtcclxuICAgIHByb2plY3RbcHJvamVjdC5sZW5ndGhdID0gdG9kbyh0b2RvVGl0bGUpO1xyXG4gICAgcmV0dXJuIGFsbFByb2plY3RzO1xyXG59XHJcbmZ1bmN0aW9uIGRpc3BsYXlOZXdUb2RvKCkge1xyXG4gICAgbGV0IHByb2plY3QgPSBhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdF07XHJcbiAgICBsZXQgbmV3VGFzayA9IHByb2plY3RbcHJvamVjdC5sZW5ndGggLSAxXTtcclxuICAgICAgICBkaXNwbGF5LmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRvLWRvLWl0ZW1cIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNoZWNrLW1hcmtcIiBzdHlsZT1cInBhZGRpbmc6IDVweFwiPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG8tZG9cIiBzdHlsZT1cImRpc3BsYXk6aW5saW5lLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAke25ld1Rhc2sudGl0bGV9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGBcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRJbnB1dCgpIHtcclxuICAgIGZvcm0ucmVzZXQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tJdGVtICgpIHtcclxuICAgIGxldCBjaGVja01hcmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrLW1hcmsnKTtcclxuICAgIGNoZWNrTWFya3MuZm9yRWFjaCggbWFyayA9PiB7XHJcbiAgICAgICAgbWFyay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgbWFyay5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2NoZWNrJyk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbnN0IHByb2plY3RzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbGwtcHJvamVjdHMnKTtcclxuXHJcbmZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XHJcbiAgICBzd2l0Y2hQcm9qZWN0cygpO1xyXG4gICAgY29uc3Qgc2VjdGlvblByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FsbC1wcm9qZWN0cycpO1xyXG4gICAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtcHJvamVjdCcpO1xyXG4gICAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsZXQgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSBwcm9tcHQoJ3doYXQgaXMgdGhlIG5hbWUgb2YgdGhlIG5ldyBwcm9qZWN0PycpO1xyXG4gICAgICAgIG5ld1Byb2plY3QuaWQgPSBuZXdQcm9qZWN0LnRleHRDb250ZW50LnNwbGl0KCcgJykuam9pbignLScpO1xyXG4gICAgICAgIG5ld1Byb2plY3QuY2xhc3NOYW1lID0gXCJwcm9qZWN0XCI7XHJcbiAgICAgICAgc2VjdGlvblByb2plY3RzLmFwcGVuZENoaWxkKG5ld1Byb2plY3QpO1xyXG4gICAgICAgIGNyZWF0ZVByb2plY3RTdG9yYWdlKG5ld1Byb2plY3QuaWQpO1xyXG4gICAgICAgIHN3aXRjaFByb2plY3RzKCk7XHJcbiAgICB9KVxyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RTdG9yYWdlKHByb2plY3RUaXRsZSkge1xyXG4gICAgYWxsUHJvamVjdHNbcHJvamVjdFRpdGxlXSA9IFtdO1xyXG4gICAgY29uc29sZS5sb2coYWxsUHJvamVjdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzd2l0Y2hQcm9qZWN0cyAoKSB7XHJcbiAgICBsZXQgYWxsUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWxsLXByb2plY3RzJyk7XHJcbiAgICBsZXQgbGFzdFByb2plY3QgPSBhbGxQcm9qZWN0cy5sYXN0RWxlbWVudENoaWxkO1xyXG4gICAgbGFzdFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gbGFzdFByb2plY3QuaWQ7XHJcbiAgICAgICAgICAgIGlmKGRpc3BsYXkuY2xhc3NOYW1lICE9PSBjdXJyZW50UHJvamVjdCkge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheS5yZXBsYWNlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwbGF5LmNsYXNzTmFtZSA9IGxhc3RQcm9qZWN0LmlkO1xyXG4gICAgICAgICAgICBkaXNwbGF5T2xkVGFza3MoKTtcclxuICAgICAgICAgICAgYXV0b2ZvY3VzSW5wdXQoKTtcclxuICAgICAgICB9KVxyXG59XHJcbmZ1bmN0aW9uIGF1dG9mb2N1c0lucHV0KCkge1xyXG4gICAgaW5wdXQuZm9jdXMoKTtcclxufVxyXG5mdW5jdGlvbiBkaXNwbGF5T2xkVGFza3MoKSB7XHJcbiAgICBsZXQgcHJvamVjdCA9IGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0XTtcclxuICAgIGxldCBkaXNwbGF5QWxsVGFza3MgPSBcIlwiO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0Lmxlbmd0aDsgaSsrICkge1xyXG4gICAgICAgIGRpc3BsYXlBbGxUYXNrcyArPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRvLWRvLWl0ZW1cIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNoZWNrLW1hcmtcIiBzdHlsZT1cInBhZGRpbmc6IDVweFwiPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG8tZG9cIiBzdHlsZT1cImRpc3BsYXk6aW5saW5lLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAke3Byb2plY3RbaV0udGl0bGV9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGBcclxuICAgIH1cclxuICAgIHJldHVybiBkaXNwbGF5LmlubmVySFRNTCA9ICBkaXNwbGF5QWxsVGFza3M7XHJcbn1cclxuXHJcbnRvZG9MaXN0KCk7XHJcbmFkZFByb2plY3QoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=