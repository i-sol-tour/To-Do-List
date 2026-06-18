import { getTasksStorage } from './storage.js'

export function checkingUniqueTaskName(taskName) {
  let tasks = getTasksStorage();
  for (let i = 0; i < tasks.active.length; i++) {
    if (tasks.active[i] == taskName) {
      return false;
    }
  }
  for (let i = 0; i < tasks.completed.length; i++) {
    if (tasks.completed[i] == taskName) {
      return false;
    }
  }
  return true;
}