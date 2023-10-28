// Import Todo module
const Todos = require("../models/todosModel.js")
// Import mongoose default function
const { findAll, findOneByid, updateOne, deleteOne, createOne } = require("./factorHandler.js");

const createTodo = createOne(Todos)// function to create todo
const getTodos = findAll(Todos)// function to get all todos 
const getTodo = findOneByid(Todos)// function get todo by id
const updateTodo = updateOne(Todos)// function to udpate todo
const deleteTodo = deleteOne(Todos)//function to delete id

//exporting all functions

module.exports = { createTodo, getTodos, getTodo, updateTodo, deleteTodo } 