import { getTasksStorage } from './storage.js'
import { addTaskInList, addTaskCompletedInList } from './render.js';

const listTaskSearch = document.getElementById('list-task-search-container');

export function searchTaskByName(taskName) {
  console.log("Поиск задачи:", taskName)
  let tasks = getTasksStorage();
  listTaskSearch.replaceChildren();
  for (let i = 0; i < tasks.active.length; i++) {
    if (tasks.active[i] == taskName) {
      listTaskSearch.append(addTaskInList(taskName));
      break;
    }
  }
  for (let i = 0; i < tasks.completed.length; i++) {
    if (tasks.completed[i] == taskName) {
      listTaskSearch.append(addTaskCompletedInList(taskName));
      break;
    }
  }
  listTaskSearch.style.display = 'block'
  console.log("listTaskSearch", listTaskSearch)
  console.log("listTaskSearch.children.length", listTaskSearch.children.length)
  if (listTaskSearch.children.length === 0) {
    const wrapper = document.createElement('div');
    wrapper.className = 'empty-message-wrapper';
    
    const h4 = document.createElement('h4');
    h4.textContent = 'Список пуст';
    
    wrapper.append(h4);
    listTaskSearch.append(wrapper);
  }
}