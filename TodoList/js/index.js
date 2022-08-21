function getCompletedTodos() {
    let values = [];
    checked = document.querySelectorAll('input[type="checkbox"]:checked')
    checked.forEach(check =>
        values.push(check.value
    ))
    console.log(values)
}

function checkAll() {
    let checkbox = document.querySelectorAll('input[type="checkbox"]')
    checkbox.forEach(box => {
        box.checked = true
    })
}

function unCheckAll() {
    let checkbox = document.querySelectorAll('input[type="checkbox"]')
    checkbox.forEach(box => {
        box.checked = false
    })
}

window.addEventListener('DOMContentLoaded', event => {
    div_todos = document.querySelector('#todos')
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(todos => {
        todos.forEach(todo => {
            div_todos.innerHTML +=
                `<input type="checkbox" value="${todo.id}" id="${todo.id}" ${ todo.completed ? "checked" : "" } />
                <label for="${todo.id}"> ${todo.title} </label><br/>`
        });
        getCompletedTodos()
    })
    .catch(err => console.log(err))
})