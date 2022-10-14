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
    btn.addEventListener("click", () => {
      allDeleteBtns = document.querySelectorAll(".trash-icon");
      btnsArray = [...allDeleteBtns];
      btn.parentElement.parentElement.parentElement.remove();
      let index = btnsArray.indexOf(btn);
      console.log(index);
      console.log(allProjects[currentProject][index]);
      deleteFromAll(allProjects[currentProject][index]);
      allProjects[currentProject].splice(index, 1);
      // allProjects[currentProject][0] = display.innerHTML;
      updateLocalStorage();
      console.log(allProjects);
    });
  });
}
deleteTask();
function deleteFromAll(deletedProp) {
  let index = allProjects["all"].findIndex(
    (prop) => prop.title === deletedProp.title
  );
  console.log(index);
  allProjects["all"].splice(index, 1);
}

// import { formatDistance, subDays } from 'date-fns'
// import { Value } from "sass";

// console.log(formatDistance(subDays(new Date(), 4), new Date(), { addSuffix: true }))

// function addTaskToAll() {

// }
// export function defaultDate(value) {
//   if (value === "") {
//     let day = new Date().getDate();
//     let month = new Date().getMonth();
//     let year = new Date().getMonth();
//     return (value = `${day}-${month}-${year}`);
//   }
// }

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
    console.log(e.target.id);
    let deleteProjectBtns = document.querySelectorAll(".project span");
    deleteProjectBtns.forEach((btn) => {
      btn.style.display = "none";
    });
  }
});
