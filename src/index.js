import "../styles/style.scss";
export let tasksTotal = 0;
export let completedTasksScore = 0;
export let uncompletedTasksScore = 0;
const body = document.querySelector("body");
function htmlBody() {
  body.innerHTML = `
    <h1>ToDo List</h1>

        
    <div id="all-projects">
        <div>Projects
            <div>
                <span id="add-project">+</span>
                <span><img id="edit-projects" src="https://img.icons8.com/ios/50/000000/edit--v1.png"/></span>
            </div>
        </div>
    </div>
    <div id="all-todos">
        <form action="#">
            <input type="text" id="task-input" placeholder='Enter your task' autofocus required/>
            <input type="date" id="date-input"/>
            <div id="priority-btn">Low</div>
            <button id="add-todo">&#10004;</button>
        </form>
        <div id="display" class="default-project"></div>
        <div id="tasks-score">Total: ${tasksTotal} Completed: ${completedTasksScore} Rest: ${uncompletedTasksScore} </div>
    </div>

    `;
}
htmlBody();
