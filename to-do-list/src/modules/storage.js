export function getTasksStorage() {
  return JSON.parse(localStorage.getItem('tasks'));
}

export function addTaskStorage(taskName, type = 'active') {
  const tasks = getTasksStorage();

  if (type == 'active') {
    tasks.active.unshift(taskName);
  }
  else {
    tasks.completed.unshift(taskName);
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function deletedTaskStorage(taskName) {
  const tasks = getTasksStorage();
  for (let i = 0; i < tasks.active.length; i++) {
    if (tasks.active[i] == taskName) {
      tasks.active.splice(i, 1);
      break;
    }
  }
  for (let i = 0; i < tasks.completed.length; i++) {
    if (tasks.completed[i] == taskName) {
      tasks.completed.splice(i, 1);
      break;
    }
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
}