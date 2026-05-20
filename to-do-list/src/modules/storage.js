export let tasks = JSON.parse(localStorage.getItem('tasks'));
if (tasks == null) {
  tasks = {
    active: [],
    completed: []
  }
}
else {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function addTaskStorage(taskName, type = 'active') {
  console.log("======= Вызвана функция addTaskStorage =======")
  console.log("Передано значение taskName:", taskName)
  console.log("Передано значение type:", type)

  const tasks = JSON.parse(localStorage.getItem('tasks'));

  if (type == 'active') {
    tasks.active.unshift(taskName);
  }
  else {
    tasks.completed.unshift(taskName);
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function deletedTaskStorage(taskName) {
  console.log("======= Вызвана функция deletedTaskStorage =======")
  console.log("Передано значение taskName:", taskName)
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  for (let i = 0; i < tasks.active.length; i++) {
    if (tasks.active[i] == taskName) {
      tasks.active.splice(i, 1);
      console.log("Элемент найден")
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
  console.log("Массив после удаления", tasks)
}