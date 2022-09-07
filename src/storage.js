import { allProjects } from "./todo-list";  

export default function updateLocalStorage() {
  localStorage.setItem('allProjects', JSON.stringify(allProjects));
  let allProjects_deserialized = JSON.parse(localStorage.getItem('allProjects'));
  console.log(allProjects_deserialized);
}