import { tasks } from './storage.js'
import { addTaskActiveInList, addTaskCompletedInList } from './render.js';

export function searchTaskByName(taskName) {
  for (let i = 0; i < tasks.active.length; i++) {
    if (tasks.active[i] == taskName) {
      listTaskSearch.append(addTaskActiveInList(taskName));
      break;
    }
  }
  for (let i = 0; i < tasks.completed.length; i++) {
    if (tasks.completed[i] == taskName) {
      listTaskSearch.append(addTaskCompletedInList(taskName));
      break;
    }
  }
}