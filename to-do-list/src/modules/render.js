import iconTrashClosed from '../assets/icon/trash-closed.png'
import iconTrashOpen from '../assets/icon/trash-open.png'

const listTaskCompleted = document.getElementById('list-task--completed');
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
  buttonDeletedTask.className = "button-deleted";

  const trashClosedIcon = document.createElement('img');
  trashClosedIcon.src = iconTrashClosed;
  trashClosedIcon.alt = 'Удалить';
  trashClosedIcon.className = 'trash-closed';

  const trashOpenIcon = document.createElement('img');
  trashOpenIcon.src = iconTrashOpen;
  trashOpenIcon.alt = 'Удалить';
  trashOpenIcon.className = 'trash-open';
  
  buttonDeletedTask.appendChild(trashClosedIcon);
  buttonDeletedTask.appendChild(trashOpenIcon);
  

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
  if (listTaskCompleted.style.display != 'none') {
    listTaskCompleted.style.display = 'none';
  }
  else {
    listTaskCompleted.style.display = 'block';
  }
}