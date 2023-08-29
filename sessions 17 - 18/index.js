const input = document.getElementById("add-todo-input");
const button = document.querySelector("#action-button");
const todos = document.querySelector(".todo_container");
let editId = null;

window.onload = () => {
  const todoList = localStorage.getItem("todos");
  if (todoList === null) {
    localStorage.setItem(
      "todos",
      JSON.stringify({
        items: [],
      })
    );
  } else {
    const todoListJson = JSON.parse(todoList);
    todoListJson.items.forEach((elem) => {
      addTodo(elem, false);
    });
  }
};

button.onclick = () => {
  if (input.value == "") {
    return;
  } else if (editId == null) {
    const todoJson = {
      content: input.value,
      id: crypto.randomUUID(),
    };
    addTodo(todoJson);
  } else {
    editTodo(editId, input.value);
  }
};

function toggleMode(id) {
  if (button.textContent === "Edit") {
    button.textContent = "Add";
  } else {
    button.textContent = "Edit";
  }
  if (editId === null) {
    editId = id;
  } else {
    editId = null;
  }
}

function addTodo(todo, isnew = true) {
  //  creating todo json
  const todoJson = {
    content: todo.content,
    id: todo.id,
  };

  //   saving to local Storage
  if (isnew) {
    const localTodos = JSON.parse(localStorage.getItem("todos"));
    localTodos.items.push(todoJson);
    localStorage.setItem("todos", JSON.stringify(localTodos));
  }
  //   creating element
  const element = document.createElement("div");

  //   creating delete Button
  const deleteButton = document.createElement("button");
  deleteButton.onclick = () => {
    deleteTodo(todoJson.id);
  };
  deleteButton.textContent = "delete me";

  // creating the edit button
  const editButton = document.createElement("button");
  editButton.onclick = () => {
    toggleMode(todoJson.id);
  };
  editButton.textContent = "edit me";

  // adding element to the container
  const text = document.createElement("span");
  text.classList.add("text");
  text.innerHTML = todoJson.content;
  element.appendChild(text);
  element.appendChild(deleteButton);
  element.appendChild(editButton);
  element.id = todoJson.id;
  todos.appendChild(element);
}

function deleteTodo(id) {
  const element = document.getElementById(id);
  todos.removeChild(element);
  const localTodos = JSON.parse(localStorage.getItem("todos"));
  const newTodos = localTodos.items.filter((elem) => {
    return elem.id != id;
  });
  localStorage.setItem("todos", JSON.stringify({ items: newTodos }));
}

function editTodo(id, text) {
  const element = document.getElementById(id);
  // changing the ui
  const textElement = element.childNodes[0];
  textElement.innerHTML = text;
  // saving change to local storage
  const localTodos = JSON.parse(localStorage.getItem("todos"));
  const newTodos = localTodos.items.map((elem) => {
    if (elem.id == id) {
      return { id: id, content: text };
    } else {
      return elem;
    }
  });
  localStorage.setItem("todos", JSON.stringify({ items: newTodos }));
}
