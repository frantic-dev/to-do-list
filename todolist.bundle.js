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
        createProjectStorage(newProject.id);
    })
}
function createProjectStorage(projectTitle) {
    allProjects[projectTitle] = [];
    console.log(allProjects);
}

todoList();
addProject();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kb2xpc3QuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kby1saXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFkZFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRvZG8nKTtcclxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xyXG5jb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rpc3BsYXknKTtcclxuXHJcbmxldCBhbGxQcm9qZWN0cyA9IHtcclxuICAgIFsnZGVmYXVsdC1wcm9qZWN0J106IFtdXHJcbn07XHJcblxyXG5cclxuZnVuY3Rpb24gdG9kbyh0aXRsZSkge1xyXG4gICAgcmV0dXJuIHt0aXRsZX1cclxufVxyXG5cclxuZnVuY3Rpb24gdG9kb0xpc3QoKSB7XHJcbiAgICBhZGRUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGlmKCEhaW5wdXQudmFsdWUpIHtcclxuICAgICAgICAgICAgc3RvcmVUb2RvSW5Qcm9qZWN0KGlucHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgZGlzcGxheVRvZG8oKTtcclxuICAgICAgICAgICAgcmVzZXRJbnB1dCgpO1xyXG4gICAgICAgICAgICBjaGVja0l0ZW0oKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYWxsUHJvamVjdHMpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5mdW5jdGlvbiBzdG9yZVRvZG9JblByb2plY3QodG9kb1RpdGxlKSB7XHJcbiAgICBsZXQgcHJvamVjdCA9IGFsbFByb2plY3RzWydkZWZhdWx0LXByb2plY3QnXTtcclxuICAgIHByb2plY3RbcHJvamVjdC5sZW5ndGhdID0gdG9kbyh0b2RvVGl0bGUpO1xyXG4gICAgcmV0dXJuIGFsbFByb2plY3RzO1xyXG59XHJcbmZ1bmN0aW9uIGRpc3BsYXlUb2RvKCkge1xyXG4gICAgbGV0IHByb2plY3QgPSBhbGxQcm9qZWN0c1snZGVmYXVsdC1wcm9qZWN0J107XHJcbiAgICBsZXQgbmV3VGFzayA9IHByb2plY3RbcHJvamVjdC5sZW5ndGggLSAxXTtcclxuICAgICAgICBkaXNwbGF5LmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRvLWRvLWl0ZW1cIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNoZWNrLW1hcmtcIiBzdHlsZT1cInBhZGRpbmc6IDVweFwiPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG8tZG9cIiBzdHlsZT1cImRpc3BsYXk6aW5saW5lLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAke25ld1Rhc2sudGl0bGV9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGBcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRJbnB1dCgpIHtcclxuICAgIGlucHV0LnZhbHVlID0gXCJcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tJdGVtICgpIHtcclxuICAgIGxldCBjaGVja01hcmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrLW1hcmsnKTtcclxuICAgIGNoZWNrTWFya3MuZm9yRWFjaCggbWFyayA9PiB7XHJcbiAgICAgICAgbWFyay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgbWFyay5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2NoZWNrJyk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XHJcbiAgICBjb25zdCBzZWN0aW9uUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWxsLXByb2plY3RzJyk7XHJcbiAgICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1wcm9qZWN0Jyk7XHJcbiAgICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGxldCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgbmV3UHJvamVjdC50ZXh0Q29udGVudCA9IHByb21wdCgnd2hhdCBpcyB0aGUgbmFtZSBvZiB0aGUgbmV3IHByb2plY3Q/Jyk7XHJcbiAgICAgICAgbmV3UHJvamVjdC5pZCA9IG5ld1Byb2plY3QudGV4dENvbnRlbnQuc3BsaXQoJyAnKS5qb2luKCctJyk7XHJcbiAgICAgICAgc2VjdGlvblByb2plY3RzLmFwcGVuZENoaWxkKG5ld1Byb2plY3QpO1xyXG4gICAgICAgIGNyZWF0ZVByb2plY3RTdG9yYWdlKG5ld1Byb2plY3QuaWQpO1xyXG4gICAgfSlcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0U3RvcmFnZShwcm9qZWN0VGl0bGUpIHtcclxuICAgIGFsbFByb2plY3RzW3Byb2plY3RUaXRsZV0gPSBbXTtcclxuICAgIGNvbnNvbGUubG9nKGFsbFByb2plY3RzKTtcclxufVxyXG5cclxudG9kb0xpc3QoKTtcclxuYWRkUHJvamVjdCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==