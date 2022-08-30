const btn = document.querySelector('button');
const input = document.querySelector('input');
const display = document.querySelector('#display');

function displayToDo() {
    btn.addEventListener('click', () => {
        display.innerHTML += `
        <div class="to-do-item">
            <button class="check-mark" style="padding: 5px"></button>
            <div class="to-do" style="display:inline-block">
                ${input.value}
            </div>
        </div>
        `
        resetInput();
        checkItem();
    })
}
function resetInput() {
    input.value = "";
}

displayToDo();
function checkItem () {
    let checkMarks = document.querySelectorAll('.check-mark');
    checkMarks.forEach( mark => {
        mark.addEventListener('click', () => {
            if (mark.style.backgroundColor === "rgb(146 146 255)") {
                mark.style.backgroundColor = "white"
            } else {
                mark.style.backgroundColor = "rgb(146 146 255)";
            }
        })
    })
}
