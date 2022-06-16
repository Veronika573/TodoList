const form = document.querySelector(".todo-form");
const btnCreate = document.querySelector(".menu-text");
const input = document.querySelector(".input");
const list = document.querySelector(".list");
const plus = document.querySelector(".add-box");

let arr = [];

function renderTodos() {
  list.innerHTML = "";
  arr.forEach((elem, index) => {
    elem = document.createElement("li");
    list.appendChild(elem);
    let text = document.createElement("p");
    elem.appendChild(text);
    text.textContent = arr[index].text;
  })
};

function condition() {
    if (input.value) {
        arr.push(obj = {
            text: input.value,
            able: false
        })
        renderTodos();
    }
}

plus.addEventListener('click', () => {
    condition()
})

