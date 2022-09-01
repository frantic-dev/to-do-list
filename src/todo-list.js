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