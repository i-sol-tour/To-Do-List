const listTaskCompleted = document.getElementById('list-task-completed');
const listTaskCompletedWrapper = document.getElementById('list-task-completed-wrapper');
const labelTaskCompleted = document.getElementById('label-task-compled-container');

export function addTaskActiveInList(taskName) {
  const checkboxCompleted = document.createElement('input');
  checkboxCompleted.type = 'checkbox';
  checkboxCompleted.classList.add('taskCheckbox');

  const labelTaskName = document.createElement('label');
  labelTaskName.textContent = taskName;

  const leftContainer = document.createElement('div');
  leftContainer.classList.add('taskLeftContainer');

  leftContainer.append(checkboxCompleted);
  leftContainer.append(labelTaskName);

  const buttonDeletedTask = document.createElement('button');
  buttonDeletedTask.id = "butDeletedTask";
  buttonDeletedTask.classList.add("button");
  buttonDeletedTask.textContent = "Удалить";

  const divTask = document.createElement('div');
  divTask.classList.add('task_content')

  divTask.append(leftContainer);
  divTask.append(buttonDeletedTask);

  const listEl = document.createElement('li');
  listEl.classList.add('task');
  listEl.style.listStyle = "none"; // Удаление маркера для отображения просто списка

  listEl.append(divTask);
  return listEl;
}

export function addTaskCompletedInList(taskName) {
  const checkboxCompleted = document.createElement('input');
  checkboxCompleted.type = 'checkbox';
  checkboxCompleted.classList.add('taskCheckbox');
  checkboxCompleted.checked = true;
  checkboxCompleted.disabled = true; // Блокируем чекбокс для завершенных задач

  const labelTaskName = document.createElement('label');
  labelTaskName.textContent = taskName;

  const leftContainer = document.createElement('div');
  leftContainer.classList.add('taskLeftContainer');

  leftContainer.append(checkboxCompleted);
  leftContainer.append(labelTaskName);

  const buttonDeletedTask = document.createElement('button');
  buttonDeletedTask.id = "butDeletedTask";
  buttonDeletedTask.classList.add("button");
  buttonDeletedTask.textContent = "Удалить";

  const divTask = document.createElement('div');
  divTask.classList.add('task_content')
  divTask.append(leftContainer);
  divTask.append(buttonDeletedTask);

  const listEl = document.createElement('li');
  listEl.className = 'task';
  listEl.classList.add('task_completed');
  listEl.style.listStyle = "none";

  listEl.append(divTask);
  return listEl;
}

export function checkCompletedTask() {
  if (listTaskCompleted.children.length > 0) {
    labelTaskCompleted.style.display = 'block';
  }
  else if (listTaskCompleted.children.length == 0) {
    labelTaskCompleted.style.display = 'none';
  }
}

export function displayListTaskCompleted() {
  console.log('Вызвана функция displayListTaskCompleted')
  console.log('listTaskCompleted.style.display:', listTaskCompleted.style.display)
  if (listTaskCompletedWrapper.style.display != 'none') {
    listTaskCompletedWrapper.style.display = 'none';
    console.log('Скрыть элементы')
  }
  else {
    listTaskCompletedWrapper.style.display = 'block';
    console.log('Показать элементы')
  }
}