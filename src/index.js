import "../styles/style.scss";

const body = document.querySelector("body");
function htmlBody() {
  body.innerHTML = `
    <h1>ToDo List</h1>

        
    <div id="all-projects">
    <div>Projects
        <div>
            <span id="add-project">+</span>
            <span id="edit-projects"><img src="https://img.icons8.com/ios/50/000000/edit--v1.png"/></span>
        </div>
    </div>
    <button id="all" class="project">all</button>
    </div>
    <div id="all-todos">
        <form action="#">
            <input type="text" id="task-input" placeholder='Enter your task' autofocus required/>
            <input type="date" id="date-input"/>
            <div id="priority-btn">Low</div>
            <button id="add-todo">&#10004;</button>
        </form>
        <div id="display" class="default-project"></div>
    </div>

    `;
}
htmlBody();
