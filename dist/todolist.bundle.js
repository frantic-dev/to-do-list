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


function todo(title, oldTasks) {
    return {title, oldTasks}
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
            rememberOldTasks();
            currentProject = lastProject.id;
            if(display.className !== currentProject) {
                display.replaceChildren();
            }
            display.className = lastProject.id;
            displayOldTasks();
            autofocusInput();
            checkItem();
        })
}
function autofocusInput() {
    input.focus();
}
function displayOldTasks() {
    let project = allProjects[currentProject];
    if (project.length !== 0){
    return display.innerHTML =  project.oldTasks;
    }
}
function rememberOldTasks () {
    let project = allProjects[currentProject];  
    project.oldTasks = display.innerHTML;
}
todoList();
addProject();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kb2xpc3QuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZG8tbGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhZGRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10b2RvJyk7XHJcbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcclxuY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkaXNwbGF5Jyk7XHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XHJcblxyXG5sZXQgYWxsUHJvamVjdHMgPSB7XHJcbiAgICBbJ2RlZmF1bHQtcHJvamVjdCddOiBbXVxyXG59O1xyXG5cclxuXHJcbmZ1bmN0aW9uIHRvZG8odGl0bGUsIG9sZFRhc2tzKSB7XHJcbiAgICByZXR1cm4ge3RpdGxlLCBvbGRUYXNrc31cclxufVxyXG5cclxubGV0IGN1cnJlbnRQcm9qZWN0ID0gXCJkZWZhdWx0LXByb2plY3RcIjtcclxuXHJcbmZ1bmN0aW9uIHRvZG9MaXN0KCkge1xyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZighIWlucHV0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHN0b3JlVG9kb0luUHJvamVjdChpbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgIGRpc3BsYXlOZXdUb2RvKCk7XHJcbiAgICAgICAgICAgIHJlc2V0SW5wdXQoKTtcclxuICAgICAgICAgICAgY2hlY2tJdGVtKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuZnVuY3Rpb24gc3RvcmVUb2RvSW5Qcm9qZWN0KHRvZG9UaXRsZSkge1xyXG4gICAgbGV0IHByb2plY3QgPSBhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdF07XHJcbiAgICBwcm9qZWN0W3Byb2plY3QubGVuZ3RoXSA9IHRvZG8odG9kb1RpdGxlKTtcclxuICAgIHJldHVybiBhbGxQcm9qZWN0cztcclxufVxyXG5mdW5jdGlvbiBkaXNwbGF5TmV3VG9kbygpIHtcclxuICAgIGxldCBwcm9qZWN0ID0gYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RdO1xyXG4gICAgbGV0IG5ld1Rhc2sgPSBwcm9qZWN0W3Byb2plY3QubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgZGlzcGxheS5pbm5lckhUTUwgKz0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0by1kby1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjaGVjay1tYXJrXCI+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0by1kb1wiIHN0eWxlPVwiZGlzcGxheTppbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICR7bmV3VGFzay50aXRsZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYFxyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldElucHV0KCkge1xyXG4gICAgZm9ybS5yZXNldCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0l0ZW0gKCkge1xyXG4gICAgbGV0IGNoZWNrTWFya3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2stbWFyaycpO1xyXG4gICAgY2hlY2tNYXJrcy5mb3JFYWNoKCBtYXJrID0+IHtcclxuICAgICAgICBtYXJrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBtYXJrLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnY2hlY2snKTtcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgcHJvamVjdHNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FsbC1wcm9qZWN0cycpO1xyXG5cclxuZnVuY3Rpb24gYWRkUHJvamVjdCgpIHtcclxuICAgIHN3aXRjaFByb2plY3RzKCk7XHJcbiAgICBjb25zdCBzZWN0aW9uUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWxsLXByb2plY3RzJyk7XHJcbiAgICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1wcm9qZWN0Jyk7XHJcbiAgICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGxldCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgbmV3UHJvamVjdC50ZXh0Q29udGVudCA9IHByb21wdCgnd2hhdCBpcyB0aGUgbmFtZSBvZiB0aGUgbmV3IHByb2plY3Q/Jyk7XHJcbiAgICAgICAgbmV3UHJvamVjdC5pZCA9IG5ld1Byb2plY3QudGV4dENvbnRlbnQuc3BsaXQoJyAnKS5qb2luKCctJyk7XHJcbiAgICAgICAgbmV3UHJvamVjdC5jbGFzc05hbWUgPSBcInByb2plY3RcIjtcclxuICAgICAgICBzZWN0aW9uUHJvamVjdHMuYXBwZW5kQ2hpbGQobmV3UHJvamVjdCk7XHJcbiAgICAgICAgY3JlYXRlUHJvamVjdFN0b3JhZ2UobmV3UHJvamVjdC5pZCk7XHJcbiAgICAgICAgc3dpdGNoUHJvamVjdHMoKTtcclxuICAgIH0pXHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdFN0b3JhZ2UocHJvamVjdFRpdGxlKSB7XHJcbiAgICBhbGxQcm9qZWN0c1twcm9qZWN0VGl0bGVdID0gW107XHJcbiAgICBjb25zb2xlLmxvZyhhbGxQcm9qZWN0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN3aXRjaFByb2plY3RzICgpIHtcclxuICAgIGxldCBhbGxQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbGwtcHJvamVjdHMnKTtcclxuICAgIGxldCBsYXN0UHJvamVjdCA9IGFsbFByb2plY3RzLmxhc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICBsYXN0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgcmVtZW1iZXJPbGRUYXNrcygpO1xyXG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IGxhc3RQcm9qZWN0LmlkO1xyXG4gICAgICAgICAgICBpZihkaXNwbGF5LmNsYXNzTmFtZSAhPT0gY3VycmVudFByb2plY3QpIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXkucmVwbGFjZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGlzcGxheS5jbGFzc05hbWUgPSBsYXN0UHJvamVjdC5pZDtcclxuICAgICAgICAgICAgZGlzcGxheU9sZFRhc2tzKCk7XHJcbiAgICAgICAgICAgIGF1dG9mb2N1c0lucHV0KCk7XHJcbiAgICAgICAgICAgIGNoZWNrSXRlbSgpO1xyXG4gICAgICAgIH0pXHJcbn1cclxuZnVuY3Rpb24gYXV0b2ZvY3VzSW5wdXQoKSB7XHJcbiAgICBpbnB1dC5mb2N1cygpO1xyXG59XHJcbmZ1bmN0aW9uIGRpc3BsYXlPbGRUYXNrcygpIHtcclxuICAgIGxldCBwcm9qZWN0ID0gYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RdO1xyXG4gICAgaWYgKHByb2plY3QubGVuZ3RoICE9PSAwKXtcclxuICAgIHJldHVybiBkaXNwbGF5LmlubmVySFRNTCA9ICBwcm9qZWN0Lm9sZFRhc2tzO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHJlbWVtYmVyT2xkVGFza3MgKCkge1xyXG4gICAgbGV0IHByb2plY3QgPSBhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdF07ICBcclxuICAgIHByb2plY3Qub2xkVGFza3MgPSBkaXNwbGF5LmlubmVySFRNTDtcclxufVxyXG50b2RvTGlzdCgpO1xyXG5hZGRQcm9qZWN0KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9