const { model } = require('mongoose');
const { createTask, fetchAllTasks, updateTaskById, deleteTaskById } = require('../Controllers/TaskController');

const router = require('express').Router();


//to get all tasks
router.get('/', fetchAllTasks);
// to cresat a task

router.post('/', createTask);


//to update 
router.put('/:id', updateTaskById);

// to delete
router.delete('/:id', deleteTaskById);


module.exports = router;