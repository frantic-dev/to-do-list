import {updateLocalStorage} from "./storage";
let allStoredProjects = JSON.parse(localStorage.getItem('allProjects'));
const addTodo = document.querySelector('#add-todo');
const input = document.querySelector('input');
const display = document.querySelector('#display');
const form = document.querySelector('form');

export let allProjects = {
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
            updateLocalStorage();
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
            updateLocalStorage();
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
        updateLocalStorage();
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
            updateLocalStorage();
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