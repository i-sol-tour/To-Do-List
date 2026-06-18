import { addTaskInList, addTaskCompletedInList } from "./modules/render";
import { checkCompletedTask } from "./modules/render";
import { addTaskStorage, deletedTaskStorage, getTasksStorage} from "./modules/storage";
import { checkingUniqueTaskName } from "./modules/utils";
import { displayListTaskCompleted } from "./modules/render";
import { searchTaskByName } from "./modules/search"

const listTaskStandart = document.getElementById('list-task-wrapper');
const listTaskSearch = document.getElementById('list-task-search-container');
const formAddTask = document.getElementById('form-add-and-search-task');
const inputTask = document.getElementById('input-task');
const buttonAddTask = document.getElementById('button-add-task');
const listTaskActive = document.getElementById('list-task--active');
const listTaskCompleted = document.getElementById('list-task--completed');

const buttonSearchTask = document.getElementById('button-search');

let tasks = getTasksStorage();
if (tasks == null) {
  tasks = {
    active: [],
    completed: []
  }
}
localStorage.setItem('tasks', JSON.stringify(tasks));
getTasksList();
let statusSearch = false;

formAddTask.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = event.submitter;
  if (button && button.id == 'button-search'){
    console.log("Прерывание")
    return;
  }
  if (inputTask.value != '') {
    if (statusSearch){
      console.log("Выполнен поиск")
      listTaskStandart.style.display = 'none';
      listTaskSearch.style.display = 'block';
      searchTaskByName(inputTask.value);
    }
    else{
      if (!checkingUniqueTaskName(inputTask.value)) {
        alert("Задача с таким название уже существет!");
        return;
      };
      addTaskStorage(inputTask.value);
      listTaskActive.prepend(addTaskInList(inputTask.value));
      inputTask.value = '';
    }
  }
});

listTaskStandart.addEventListener('click', (event) => {
  const checkbox = event.target.closest('input');
  const button = event.target.closest('button');
  const divTaskCompleted = event.target.closest('div');

  if (button) {
    const label = button.closest('div')
      .querySelector('.task-left-container label');
    if (!label) {
      return;
    }
    if (button.className == 'button-deleted') {
      deletedTaskStorage(label.textContent); // передаем в функцию только 1 фрагмент текста без кнопок
      const li = button.closest('li');
      li.remove();
    }
  };
  if (checkbox) {
    const label = checkbox.parentElement.querySelector('label');
    if (!label) {
      return;
    }
    const liText = label.textContent
    if (checkbox.checked == true) {
      deletedTaskStorage(liText);
      addTaskStorage(liText, 'complete');
      listTaskCompleted.prepend(addTaskCompletedInList(liText));
      const li = checkbox.closest('li');
      li.remove();
    }
  }

  if (divTaskCompleted) {
    if (divTaskCompleted.id == 'label-task-completed-container') {
      displayListTaskCompleted();
    }
  };
  checkCompletedTask();
});

buttonSearchTask.addEventListener('click', () => {
  console.log("Нажатие buttonSearchTask")
  console.log("statusSearch", statusSearch)
  console.log("inputTask.value = ", inputTask.value)
  if (statusSearch) {
    statusSearch = false;
    
    listTaskSearch.replaceChildren();
    listTaskSearch.style.display = 'none';
    listTaskStandart.style.display = 'block';
    buttonAddTask.style.display = 'block';
    inputTask.value = '';
    inputTask.placeholder = 'Создание задачи';
  }
  else {
    inputTask.placeholder = 'Поиск задачи';
    statusSearch = true;
    listTaskSearch.style.display = 'block';
    listTaskStandart.style.display = 'none';
    buttonAddTask.style.display = 'none';
    if (inputTask.value) {
      searchTaskByName(inputTask.value);
    }
  }  
});

inputTask.addEventListener('input', () => {
  console.log("statusSearch= ", statusSearch)
  if (statusSearch) {
    console.log("Изменен текст input= ", inputTask.value)
    searchTaskByName(inputTask.value)
  }
});


function getTasksList() {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  
  for (let task of tasks.active) {
    listTaskActive.append(addTaskInList(task));
  }
  for (let task of tasks.completed) {
    listTaskCompleted.append(addTaskCompletedInList(task));
  }
  checkCompletedTask();
}