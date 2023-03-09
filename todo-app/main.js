let todoInput = document.querySelector("input[name='task']");
let addNewTodoButton = document.getElementById("add-button");
let todoList = document.getElementById("todo-list");


let todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
    todoList.innerHTML = '';
    for(todo of todos) {
        let todoElement = document.createElement("li");
        let todoTextContent = document.createTextNode(todo);
        let linkElement = document.createElement("a");
        let linkTextContent = document.createTextNode("Excluir");

        linkElement.setAttribute("href", "#");

        let pos = todos.indexOf(todo);

        linkElement.setAttribute("onclick", 'deleteTodo('+ pos +')')

        linkElement.appendChild(linkTextContent);

        todoElement.appendChild(todoTextContent);
        todoElement.appendChild(linkElement);
        todoList.appendChild(todoElement);
    }
}

function deleteTodo(pos) {

    todos.splice(pos, 1);

    renderTodos();
    saveToStorage();
}


addNewTodoButton.addEventListener('click', () => {
    let todoTextContent = todoInput.value;
    todos.push(todoTextContent);
    todoInput.innerHTML = '';

    renderTodos();
    saveToStorage();
});

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}


renderTodos();