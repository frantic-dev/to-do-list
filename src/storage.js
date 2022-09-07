import { allProjects } from "./todo-list";  

export function updateLocalStorage() {
  localStorage.setItem('allProjects', JSON.stringify(allProjects));
}
