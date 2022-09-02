/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/todo-list.js ***!
  \**************************/
const addTodo = document.querySelector('#add-todo');
const input = document.querySelector('input');
const display = document.querySelector('#display');

let defaultProject = [];

function todo(title) {
    return {title}
}

function storeTodoInProject(projectName ,todoTitle ) {
    projectName[projectName.length] = todo(todoTitle);
}
let currentProject = defaultProject;


function displayTodo() {
    let newTask = currentProject[currentProject.length - 1]
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

const projectsSection = document.querySelector('#all-projects');

function addProject() {
    const addProjectBtn = document.querySelector('#add-project');
    addProjectBtn.addEventListener('click', () => {
        let newProject = document.createElement('button');
        newProject.textContent = prompt('what is the name of the new project?');
        newProject.id =newProject.textContent.split(' ').join('-');
        newProject.className = "project";
        projectsSection.appendChild(newProject);
        createNewProject(newProject);
        switchProjects();

    })
}
function createNewProject (name) {
    name = [];
    
    return currentProject = name;
};
todoList();
addProject();

function switchProjects() {
    let allProjects = document.querySelectorAll(".project");
    console.log(allProjects);
    allProjects.forEach( project => {
        project.addEventListener('click', () => {
            display.className = project.id;
            currentProject = project.id;
        })
    })
}

    function todoList() {
        addTodo.addEventListener('click', () => {
            if(!!input.value) {
                storeTodoInProject(currentProject, input.value);
                displayTodo();
                resetInput();
                checkItem();
                console.log(currentProject);
                }
        })
    }
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kb2xpc3QuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsSyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kby1saXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFkZFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRvZG8nKTtcclxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xyXG5jb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rpc3BsYXknKTtcclxuXHJcbmxldCBkZWZhdWx0UHJvamVjdCA9IFtdO1xyXG5cclxuZnVuY3Rpb24gdG9kbyh0aXRsZSkge1xyXG4gICAgcmV0dXJuIHt0aXRsZX1cclxufVxyXG5cclxuZnVuY3Rpb24gc3RvcmVUb2RvSW5Qcm9qZWN0KHByb2plY3ROYW1lICx0b2RvVGl0bGUgKSB7XHJcbiAgICBwcm9qZWN0TmFtZVtwcm9qZWN0TmFtZS5sZW5ndGhdID0gdG9kbyh0b2RvVGl0bGUpO1xyXG59XHJcbmxldCBjdXJyZW50UHJvamVjdCA9IGRlZmF1bHRQcm9qZWN0O1xyXG5cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlUb2RvKCkge1xyXG4gICAgbGV0IG5ld1Rhc2sgPSBjdXJyZW50UHJvamVjdFtjdXJyZW50UHJvamVjdC5sZW5ndGggLSAxXVxyXG4gICAgICAgIGRpc3BsYXkuaW5uZXJIVE1MICs9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwidG8tZG8taXRlbVwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2hlY2stbWFya1wiIHN0eWxlPVwicGFkZGluZzogNXB4XCI+PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0by1kb1wiIHN0eWxlPVwiZGlzcGxheTppbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICR7bmV3VGFzay50aXRsZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYFxyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldElucHV0KCkge1xyXG4gICAgaW5wdXQudmFsdWUgPSBcIlwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0l0ZW0gKCkge1xyXG4gICAgbGV0IGNoZWNrTWFya3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2stbWFyaycpO1xyXG4gICAgY2hlY2tNYXJrcy5mb3JFYWNoKCBtYXJrID0+IHtcclxuICAgICAgICBtYXJrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBtYXJrLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnY2hlY2snKTtcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgcHJvamVjdHNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FsbC1wcm9qZWN0cycpO1xyXG5cclxuZnVuY3Rpb24gYWRkUHJvamVjdCgpIHtcclxuICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QnKTtcclxuICAgIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBuZXdQcm9qZWN0LnRleHRDb250ZW50ID0gcHJvbXB0KCd3aGF0IGlzIHRoZSBuYW1lIG9mIHRoZSBuZXcgcHJvamVjdD8nKTtcclxuICAgICAgICBuZXdQcm9qZWN0LmlkID1uZXdQcm9qZWN0LnRleHRDb250ZW50LnNwbGl0KCcgJykuam9pbignLScpO1xyXG4gICAgICAgIG5ld1Byb2plY3QuY2xhc3NOYW1lID0gXCJwcm9qZWN0XCI7XHJcbiAgICAgICAgcHJvamVjdHNTZWN0aW9uLmFwcGVuZENoaWxkKG5ld1Byb2plY3QpO1xyXG4gICAgICAgIGNyZWF0ZU5ld1Byb2plY3QobmV3UHJvamVjdCk7XHJcbiAgICAgICAgc3dpdGNoUHJvamVjdHMoKTtcclxuXHJcbiAgICB9KVxyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QgKG5hbWUpIHtcclxuICAgIG5hbWUgPSBbXTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0ID0gbmFtZTtcclxufTtcclxudG9kb0xpc3QoKTtcclxuYWRkUHJvamVjdCgpO1xyXG5cclxuZnVuY3Rpb24gc3dpdGNoUHJvamVjdHMoKSB7XHJcbiAgICBsZXQgYWxsUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RcIik7XHJcbiAgICBjb25zb2xlLmxvZyhhbGxQcm9qZWN0cyk7XHJcbiAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKCBwcm9qZWN0ID0+IHtcclxuICAgICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5LmNsYXNzTmFtZSA9IHByb2plY3QuaWQ7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdC5pZDtcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvZG9MaXN0KCkge1xyXG4gICAgICAgIGFkZFRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKCEhaW5wdXQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHN0b3JlVG9kb0luUHJvamVjdChjdXJyZW50UHJvamVjdCwgaW5wdXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheVRvZG8oKTtcclxuICAgICAgICAgICAgICAgIHJlc2V0SW5wdXQoKTtcclxuICAgICAgICAgICAgICAgIGNoZWNrSXRlbSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9