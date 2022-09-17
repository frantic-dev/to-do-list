import { allProjects, currentProject, display } from "./todo-list";
import { updateLocalStorage } from "./storage";
export function addDeleteBtn() {
  return `    <div class="delete-task">
    <img class="trash-icon" src="../images/icons8-trash-32.png" alt="image of a trash can"/>
</div>
    `;
}
export function deleteTask() {
  const allDeleteBtns = document.querySelectorAll(".trash-icon");
  let btnsArray = [...allDeleteBtns];
  console.log(allDeleteBtns);
  allDeleteBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log(btn);
      btn.parentElement.parentElement.remove();
      console.log(btnsArray.indexOf(btn));
      let index = btnsArray.indexOf(btn) + 1;
      allProjects[currentProject].splice(index, 1);
      allProjects[currentProject][0] = display.innerHTML;
      //   return allProjects;:
      updateLocalStorage();
      console.log(allProjects);
    });
  });
}
deleteTask();
