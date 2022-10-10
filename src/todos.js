import { allProjects, currentProject, display } from "./todo-list";
import { updateLocalStorage } from "./storage";
import trashIcon from '../images/icons8-trash-32.png';
export function addDeleteBtn() {
  return `    <div class="delete-task">
    <img class="trash-icon" src="${trashIcon}" alt="image of a trash can"/>
</div>
    `;
}
export function deleteTask() {
  const allDeleteBtns = document.querySelectorAll(".trash-icon");
  let btnsArray = [...allDeleteBtns];
  allDeleteBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.parentElement.parentElement.parentElement.remove();
      let index = btnsArray.indexOf(btn) + 1;
      allProjects[currentProject].splice(index, 1);
      allProjects[currentProject][0] = display.innerHTML;
      updateLocalStorage();
      console.log(allProjects);
    });
  });
}
deleteTask();
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

