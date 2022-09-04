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