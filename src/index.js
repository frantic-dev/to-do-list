import "../styles/style.scss";

const body = document.querySelector('body');
function htmlBody() {
    body.innerHTML = `
    <h1>ToDo List</h1>

        
    <div id="all-projects">
    <button id="add-project">ADD A PROJECT +</button>
    <button id="default-project" class="project">DEFAULT PROJECT</button>
    </div>
    <div id="all-todos">
        <form action="#">
            <input type="text" autofocus/>
            <button id="add-todo">&#10004;</button>
        </form>
        <div id="display" class="default-project"></div>
    </div>

    `
}
htmlBody();