import { tasks } from './storage.js'
import { addTaskInList, addTaskCompletedInList } from './render.js';

const listTaskSearch = document.getElementById('list-task-search-container');
const searchList = document.getElementById('list-task-search');

export function searchTaskByName(taskName) {
  listTaskSearch.replaceChildren();
  for (let i = 0; i < tasks.active.length; i++) {
    if (tasks.active[i] == taskName) {
      searchList.append(addTaskInList(taskName));
      break;
    }
  }
  for (let i = 0; i < tasks.completed.length; i++) {
    if (tasks.completed[i] == taskName) {
      searchList.append(addTaskCompletedInList(taskName));
      break;
    }
  }
  listTaskSearch.append(searchList);
  listTaskSearch.style.display = 'block'
}