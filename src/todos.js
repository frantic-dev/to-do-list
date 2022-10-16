import { allProjects, currentProject } from "./todo-list";
import { updateLocalStorage } from "./storage";
import trashIcon from "../images/icons8-trash-32.png";
export function addDeleteBtn() {
  return `    <div class="delete-task">
    <img class="trash-icon" src="${trashIcon}" alt="image of a trash can"/>
</div>
    `;
}
export function deleteTask() {
  let allDeleteBtns = document.querySelectorAll(".trash-icon");
  let btnsArray = [...allDeleteBtns];
  allDeleteBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      allDeleteBtns = document.querySelectorAll(".trash-icon");
      btnsArray = [...allDeleteBtns];
      let index = btnsArray.indexOf(btn);
      console.log(index);
      console.log(allProjects[currentProject][index]);
      if (currentProject !== "all") deleteFromAll(allProjects[currentProject][index]);
      btn.parentElement.parentElement.parentElement.remove();
      allProjects[currentProject].splice(index, 1);
      updateTasksScore();
      updateLocalStorage();
      console.log(allProjects);
    });
  });
}
function deleteFromAll(deletedProp) {
  let index = allProjects["all"].findIndex(
    (prop) => prop.title === deletedProp.title
  );
  console.log(index);
  if(index !== -1) allProjects["all"].splice(index, 1);
}

export function defaultDate() {
    let day = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear() ;
    return `${year}-${month}-${day}`;
}
let dateInput = document.querySelector('#date-input');
dateInput.setAttribute('min', `${defaultDate()}`)

function displayDeleteProjectsBtns() {
  let deleteProjectBtns = document.querySelectorAll(".project span");
  deleteProjectBtns.forEach((btn) => {
    btn.style.display = "inline-block";
    btn.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      let index = [...deleteProjectBtns].indexOf(btn);
      let targetProject = deleteProjectBtns[index].parentElement;
      targetProject.remove();
      delete allProjects[targetProject.id];
      console.log(targetProject.id);
      console.log(allProjects);
      updateLocalStorage();
    });
  });
}
let editProjectsBtn = document.querySelector("#edit-projects");
editProjectsBtn.addEventListener("click",displayDeleteProjectsBtns);

window.addEventListener("click", (e) => {
  if (e.target !== editProjectsBtn) {
    let deleteProjectBtns = document.querySelectorAll(".project span");
    deleteProjectBtns.forEach((btn) => {
      btn.style.display = "none";
    });
  }
});
export function updateTasksScore () {
  let scoreDiv = document.querySelector('#tasks-score');
  let tasksTotal = document.querySelectorAll('.to-do-item').length;
  let completedTasksScore = document.querySelectorAll('.check').length;
  let uncompletedTasksScore = tasksTotal - completedTasksScore;
  scoreDiv.textContent = `Total: ${tasksTotal} Completed: ${completedTasksScore} Rest: ${uncompletedTasksScore}`;
}
