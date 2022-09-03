import "../styles/style.scss";

const body = document.querySelector('body');
function htmlBody() {
    body.innerHTML = `
        
    <div id="all-projects">
    <button id="add-project">ADD A PROJECT +</button>
    <button id="default-project" class="project">DEFAULT PROJECT</button>
    </div>
    <div id="all-todos">
        <input type="text"/>
        <button id="add-todo">&#10004;</button>
        <div id="display" class="project-default"></div>
    </div>

    `
}
htmlBody();