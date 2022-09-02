const addTodo = document.querySelector('#add-todo');
const input = document.querySelector('input');
const display = document.querySelector('#display');

let defaultProject = [];

function todo(title) {
    return {title}
}

function storeTodoInProject(todoTitle) {
    defaultProject[defaultProject.length] = todo(todoTitle);
}

function todoList() {
    addTodo.addEventListener('click', () => {
        if(!!input.value) {
            storeTodoInProject(input.value);
            displayTodo();
            resetInput();
            checkItem();
            console.log(defaultProject)
            }
    })
}
function displayTodo() {
    let newTask = defaultProject[defaultProject.length - 1]
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
    const defaultProject = document.querySelector('#default-project');
    const addProjectBtn = document.querySelector('#add-project');
    addProjectBtn.addEventListener('click', () => {
        let newProject = document.createElement('button');
        newProject.textContent = prompt('what is the name of the new project?');
        newProject.id = newProject.textContent;
        defaultProject.after(newProject);
    })
}

todoList();
addProject();