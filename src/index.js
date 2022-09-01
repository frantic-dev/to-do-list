const body = document.querySelector('body');
function htmlBody() {
    body.innerHTML = `
        <button id="default-project" >DEFAULT PROJECT</button>
        <button id="add-project">ADD A PROJECT +</button>
        <br>
        <input type="text"/>
        <button id="add-todo">&#10004;</button>
        <div id="display" class="project-default"></div>

    `
}
htmlBody();