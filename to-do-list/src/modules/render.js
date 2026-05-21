const listTaskCompleted = document.getElementById('list-task-completed');
const listTaskCompletedWrapper = document.getElementById('list-task-completed-wrapper');
const labelTaskCompleted = document.getElementById('label-task-completed-container');

export function addTaskInList(taskName) {
  const checkboxCompleted = document.createElement('input');
  checkboxCompleted.type = 'checkbox';
  checkboxCompleted.className = 'task-checkbox';

  const labelTaskName = document.createElement('label');
  labelTaskName.textContent = taskName;

  const leftContainer = document.createElement('div');
  leftContainer.className = 'task-left-container';

  leftContainer.append(checkboxCompleted);
  leftContainer.append(labelTaskName);

  const buttonDeletedTask = document.createElement('button');
  buttonDeletedTask.id = "butDeletedTask";
  buttonDeletedTask.className = "button";
  buttonDeletedTask.textContent = "Удалить";

  const divTask = document.createElement('div');
  divTask.className = 'task_content';

  divTask.append(leftContainer);
  divTask.append(buttonDeletedTask);

  const listEl = document.createElement('li');
  listEl.className = 'task';
  listEl.style.listStyle = "none"; // Удаление маркера для отображения просто списка

  listEl.append(divTask);
  return listEl;
}

export function addTaskCompletedInList(taskName) {
  let listEl = addTaskInList(taskName);

  let checkboxCompleted = listEl.querySelector('.task-checkbox');
  checkboxCompleted.checked = true;
  checkboxCompleted.disabled = true; // Блокируем чекбокс для завершенных задач

  listEl.classList.add('task_completed');
  listEl.style.listStyle = "none";

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
  if (listTaskCompletedWrapper.style.display != 'none') {
    listTaskCompletedWrapper.style.display = 'none';
  }
  else {
    listTaskCompletedWrapper.style.display = 'block';
  }
}