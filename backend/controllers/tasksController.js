const Task = require("../models/task");

const getAllTasks = (req, res) => {
  res.json(Task.getTasks());
};

const getTaskById = (req, res) => {
  const task = Task.getTaskById(req.params.id);

  if(task){
    res.json(task);
  } else {
    res.status(404).send('Task Not Found!!');
  }
};

const createTask = (req, res) => {
  const {title, description, status, dueDate} = req.body;

  const newTask = Task.createTask(title, description, status, dueDate);
  res.status(201).json(newTask);
};

const updateTask = (req, res) => {
  const updatedTask = Task.updateTask(req.params.id, req.body);

  if(updatedTask) {
    res.json(updatedTask);
  } else {
    res.status(404).send('Task Not Found!');
  }
};

const deleteTask = (req,res) => {
  const deletedTask = Task.deleteTask(req.params.id);
  if (deletedTask) {
    res.status(204).send();
  } else {
    res.status(404).send('Task not found');
  }
};


module.exports = {getAllTasks, getTaskById, createTask, updateTask, deleteTask};