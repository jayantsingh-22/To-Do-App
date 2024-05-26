// routes/tasks.js
const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController');

router.get('/', tasksController.getAllTasks);      // tasks/
router.get('/:id', tasksController.getTaskById);   // tasks/:id
router.post('/', tasksController.createTask);      // tasks/
router.put('/:id', tasksController.updateTask);    // tasks/:id
router.delete('/:id', tasksController.deleteTask); // tasks/:id

module.exports = router;
