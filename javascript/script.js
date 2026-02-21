const todoList = [{
  name: 'make dinner',
  dueDate: '2022-12-22',
  startTime: '20:00',
  endTime: '21:00'
},{
  name: 'wash dishes',
  dueDate: '2022-12-22',
  startTime: '20:00',
  endTime: '21:00'
}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const {name, dueDate, startTime, endTime} = todoObject;
    const html = `<p class="todo-item">${name} ${dueDate} ${startTime} ${endTime}
     <button onclick="
     todoList.splice(${i}, 1);
     renderTodoList();
     " class="delete-button">Delete</button>
     </p>`;
    todoListHTML += html;
  }

  console.log(todoListHTML);

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  const timeInputElement = document.querySelector('.js-start-time-input');
  const startTime = timeInputElement.value;
  const endTimeElement = document.querySelector('.js-end-time-input');
  const endTime = endTimeElement.value;


  todoList.push({
    name,
    dueDate,
    startTime,
    endTime
  });

  console.log(todoList);

  inputElement.value = '';

  renderTodoList();
}