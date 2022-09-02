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