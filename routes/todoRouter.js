const express = require('express');

// Importing functions from controller file
const { createTodo, getTodos, getTodo, updateTodo, deleteTodo } = require('../controllers/todoController');
const router = express.Router();
// All routes
router.get("/todos", getTodos) // router to get all todos
router.get("/todos/:id", getTodo) // router to get single todo based on id
router.put("/todos/:id", updateTodo)// update todo  based on id
router.delete("/todos/:id", deleteTodo)// delete todo based on id
router.post("/todos", createTodo)// create new todo

module.exports = router