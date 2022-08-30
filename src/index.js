const body = document.querySelector('body');
function htmlBody() {
    body.innerHTML = `
        <input type="text"/>
        <button>&#10004;</button>
        <div id="display"></div>

    `
}
htmlBody();