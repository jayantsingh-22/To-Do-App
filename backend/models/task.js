// models/task.js
let tasks = [];
let currentId = 1;

const getTasks = () => tasks;

const getTaskById = (id) => tasks.find(task => task.id === parseInt(id));

const createTask = (title, description, status, dueDate) => {
  const newTask = { id: currentId++, title, description, status, dueDate };
  tasks.push(newTask);
  return newTask;
};

const updateTask = (id, updatedTask) => {
  const index = tasks.findIndex(task => task.id === parseInt(id));
  if (index !== -1) {
    tasks[index] = { id: parseInt(id), ...updatedTask };
    return tasks[index];
  }
  return null;
};

const deleteTask = (id) => {
  const index = tasks.findIndex(task => task.id === parseInt(id));
  if (index !== -1) {
    const deletedTask = tasks.splice(index, 1);
    return deletedTask;
  }
  return null;
};

module.exports = { getTasks, getTaskById, createTask, updateTask, deleteTask };
