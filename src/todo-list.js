import { updateLocalStorage } from "./storage";
import { addDeleteBtn, deleteTask, updateTasksScore , defaultDate} from "./todos";

let allStoredProjects = JSON.parse(localStorage.getItem("allProjects"));
const input = document.querySelector("input");
export const display = document.querySelector("#display");
const form = document.querySelector("form");
const dateInput = document.querySelector("#date-input");
const priorityBtn = document.querySelector("#priority-btn");
export let allProjects = {
  ["all"]: [],
  ["default-project"]: [],
};

export let currentProject = "default-project";

if (allStoredProjects) {
  allProjects = allStoredProjects;
}

function todo(title, date, priority, done) {
  return { title, date, priority, done };
}

function todoList() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();
    if(dateInput.value === "") {
      storeTodoInProject(input.value, defaultDate(), priorityBtn.textContent);
      if(currentProject !== 'all') addTaskInAll(input.value, defaultDate(), priorityBtn.textContent);
    } else {
      storeTodoInProject(input.value, dateInput.value, priorityBtn.textContent);
      if(currentProject !== 'all') addTaskInAll(input.value, dateInput.value, priorityBtn.textContent); 
    }
    resetPriority();
    displayNewTodo();
    resetInput();
    checkItem();
    deleteTask();
    updateTasksScore();
    updateLocalStorage();
    console.log(allProjects);
  });
}
function storeTodoInProject(todoTitle, todoDate, todoPriority) {
  let project = allProjects[currentProject];
  project[project.length] = todo(todoTitle, todoDate, todoPriority, "no");
  return allProjects;
}
function addTaskInAll(todoTitle, todoDate, todoPriority) {
  let project = allProjects["all"];
  project[project.length] = todo(todoTitle, todoDate, todoPriority, "no");
  return allProjects;
}
function displayNewTodo() {
  let project = allProjects[currentProject];
  let newTask = project[project.length - 1];
  display.innerHTML += `
        <div class="to-do-item">
          <div>
            <button class="check-mark"></button>
            <div class="to-do" style="display:inline-block">
                ${newTask.title}
            </div>
          </div>
          <div class="date">
              ${newTask.date}
          </div>
          <div class="priority ${newTask.priority}">
              ${newTask.priority}
          </div>
          <div>
            ${addDeleteBtn()}
          </div>
        </div>
        `;
}

function resetInput() {
  form.reset();
}

function checkItem() {
  let checkMarks = document.querySelectorAll(".check-mark");
  checkMarks.forEach((mark) => {
    let index = [...checkMarks].indexOf(mark);
    let task = allProjects[currentProject][index];
    mark.addEventListener("click", () => {
      checkMarks = document.querySelectorAll(".check-mark");
      if (task.done === "yes") {
        task.done = "no";
        mark.parentElement.classList.remove("check");
      } else {
        task.done = "yes";
        mark.parentElement.className = "check";
      } 
      console.log(index)
        console.log(allProjects[currentProject][index].done);
        updateTasksScore();
        updateLocalStorage();
      });
  });
}

const projectsSection = document.querySelector("#all-projects");

function addProject() {
  const addProjectBtn = document.querySelector("#add-project");
  addProjectBtn.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    let name = prompt("what is the name of the new project?");
    if (name !== "" && name !== null) {
      let newProject = document.createElement("button");
      let deleteProjectBtn = document.createElement("span");
      deleteProjectBtn.textContent = "-";
      newProject.textContent = name;
      newProject.id = name.split(" ").join("-");
      newProject.className = "project";
      projectsSection.appendChild(newProject);
      newProject.appendChild(deleteProjectBtn);
      createProjectStorage(newProject.id);
      switchProjects();
      updateLocalStorage();
    }
  });
}
function createProjectStorage(projectTitle) {
  allProjects[projectTitle] = [];
  console.log(allProjects);
}

function switchProjects() {
  let Projects = document.querySelector("#all-projects");
  let lastProject = Projects.lastElementChild;
  lastProject.addEventListener("click", () => {
    currentProject = lastProject.id;
    if (display.className !== currentProject) {
      display.replaceChildren();
    }
    display.className = lastProject.id;
    highlightProject(lastProject);
    checkItem();
    displayOldTasks();
    focusInput();
    resetInput();
    resetPriority();
    deleteTask();
    updateTasksScore();
    updateLocalStorage();
    console.log(allProjects)
  });
}
function focusInput() {
  input.focus();
}
function displayOldTasks() {
  let displayTasks = "";
  let project = allProjects[currentProject];
  if(Object.keys(allProjects).length !== 0){
  project.forEach((task) => {
    displayTasks += `
    <div class="to-do-item">
      <div>
        <button class="check-mark"></button>
        <div class="to-do" style="display:inline-block">
            ${task.title}
        </div>
      </div>
      <div class="date">
          ${task.date}
      </div>
      <div class="priority ${task.priority}">
          ${task.priority}
      </div>
      <div>
        ${addDeleteBtn()}
      </div>
    </div>
    `;
  });
  display.innerHTML = displayTasks;
  rememberOldCheckedItems();
  checkItem();
  deleteTask();
}
}

function rememberOldCheckedItems() {
  let project = allProjects[currentProject];
  project.forEach((task) => {
    let index = project.indexOf(task);
    let Items  = document.querySelectorAll('.to-do-item');
    if (task.done === "yes") {
      let targetDiv = Items[index].firstElementChild;
      targetDiv.className = "check";
    } else {
      let targetDiv = Items[index].firstElementChild;
      targetDiv.classList.remove("check");
    }
  })
};

todoList();
addProject();
setTimeout(() => {
  displayOldTasks();
  updateTasksScore();
}, 500); 
checkItem();
function showOldProjects() {
  for (let project in allProjects) {
    console.log(allProjects);
    console.log(project);
    let newProject = document.createElement("button");
    newProject.textContent = project.split("-").join(" ");
    newProject.id = project;
    newProject.className = "project";
    projectsSection.appendChild(newProject);
    let deleteProjectBtn = document.createElement("span");
    deleteProjectBtn.textContent = "-";
    newProject.appendChild(deleteProjectBtn);
    switchProjects();
  }
}
window.addEventListener("load", (e) => {
  e.stopImmediatePropagation();
  showOldProjects();
});

let clicks = 0;
function changePriority() {
  priorityBtn.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    clicks++;
    if (clicks === 1) {
      priorityBtn.textContent = "Mid";
      priorityBtn.setAttribute("style", "background-color: green;");
    } else if (clicks === 2) {
      priorityBtn.textContent = "High";
      priorityBtn.setAttribute("style", "background-color: red;");
    } else {
      priorityBtn.textContent = "Low";
      priorityBtn.setAttribute("style", "background-color: grey;");
      clicks = 0;
    }
  });
}
changePriority();
function resetPriority() {
  clicks = 0;
  priorityBtn.textContent = "Low";
  priorityBtn.setAttribute("style", "background-color: grey;");
}
function highlightProject(project) {
  const allProjects = document.querySelectorAll(".project");
  allProjects.forEach((project) =>
    project.setAttribute(
      "style",
      "background-color: rgb(148, 158, 250); box-shadow: none;"
    )
  );
  project.setAttribute(
    "style",
    "background-color: rgb(255 117 141); outline: 2px solid white; box-shadow: 0 0 10px #ff06ff"
  );
}
