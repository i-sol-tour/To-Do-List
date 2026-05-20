import { addTaskActiveInList, addTaskCompletedInList } from "./modules/render";
import { checkCompletedTask } from "./modules/render";
import { addTaskStorage, deletedTaskStorage, tasks } from "./modules/storage";
import { checkingUniqueTaskName } from "./modules/utils";
import { displayListTaskCompleted } from "./modules/render";
import { searchTaskByName } from "./modules/search"

const listTaskStandart = document.getElementById('list-task-wrapper');
const listTaskSearch = document.getElementById('list-task-search-container');
const formAddTask = document.getElementById('form-add-task');
const inputTaskNew = document.getElementById('input-task-new');
const listTaskActive = document.getElementById('list-task-active');
const listTaskCompleted = document.getElementById('list-task-completed');

const inputSearchTask = document.getElementById('input-search-task');
const buttonSearchTask = document.getElementById('button-task-search');
const buttonCloseSearchTask = document.getElementById('button-task-close-search');

getTasksList();


formAddTask.addEventListener('submit', (event) => {
  event.preventDefault();
  if (inputTaskNew.value != '') {
    if (!checkingUniqueTaskName(inputTaskNew.value)) {
      alert("Задача с таким название уже существет!");
      return;
    };
    addTaskStorage(inputTaskNew.value);
    listTaskActive.prepend(addTaskActiveInList(inputTaskNew.value));
    inputTaskNew.value = '';
  }
});

listTaskStandart.addEventListener('click', (event) => {
  console.log("Клик")
  const checkbox = event.target.closest('input');
  const button = event.target.closest('button');

  if (button) {
    const label = button.closest('div')
      .querySelector('.taskLeftContainer label');
    if (!label){
      return;
    }
    const liText = label.textContent
    if (button.id == 'butDeletedTask') {
      deletedTaskStorage(liText); // передаем в функцию только 1 фрагмент текста без кнопок
      const li = button.closest('li');
      li.remove();
    }
  };
  if (checkbox) {
    const label = checkbox.parentElement.querySelector('label');
    if (!label){
      console.log('lable')
      return;
    }
    const liText = label.textContent
    console.log("liText", liText)
    if (checkbox.checked == true) {
      console.log("Перевод в выполнено")
      deletedTaskStorage(liText);
      addTaskStorage(liText, 'complete');
      listTaskCompleted.prepend(addTaskCompletedInList(liText));
      const li = checkbox.closest('li');
      li.remove();
    }
  }
  const divTaskCompleted = event.target.closest('div');
  if (divTaskCompleted) {
    if (divTaskCompleted.id == 'labelTaskCompled') {
      console.log('Нажата кнопка Завершенные')
      displayListTaskCompleted();
    }
  };
  checkCompletedTask();
  console.log(tasks)
});

buttonSearchTask.addEventListener('click', () => {
  listTaskStandart.style.display = 'none';
  listTaskSearch.style.display = 'block';
  searchTaskByName(inputSearchTask.value);
});

buttonCloseSearchTask.addEventListener('click', () => {
  const divToRemove = listTaskSearch.querySelector('div');

  if (divToRemove) {
    divToRemove.remove();
  }
  inputSearchTask.value = '';
  listTaskStandart.style.display = 'block';
  listTaskSearch.style.display = 'none';
});



function getTasksList() {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  console.log(tasks)
  for (let task of tasks.active) {
    listTaskActive.append(addTaskActiveInList(task));
  }
  for (let task of tasks.completed) {
    listTaskCompleted.append(addTaskCompletedInList(task));
  }
  checkCompletedTask();
}