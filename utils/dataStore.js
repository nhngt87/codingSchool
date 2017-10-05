const fs = require('fs');
const dataFilePath = './dataStore/data.json';

//TODO: GET ALL TODOS FROM DISK
function getAllTodos() {
  return JSON.parse(fs.readFileSync(dataFilePath));
}

//TODO: GET COMPLETED LIST OF TODOS
function getCompletedTodos() {
  return getAllTodos().filter(todo => todo.completed);
}

//TODO: GET INCOMPLETE TODO LIST
function getIncompleteTodos() {
  return getAllTodos().filter((todo) => {
    return !todo.completed;
  });
}

//TODO: ADD A NEW TODO TO THE LIST
function addTodo(todo) {
  const currentTodos = getAllTodos();
  currentTodos.push({
    completed: false,
    task: todo,
    id: new Date().getTime(),
  })
  fs.writeFileSync(dataFilePath, JSON.stringify(currentTodos));
}

//TODO: FIND AND COMPLETE A TODO ) {
//GET ALL TODOS BASED OFF OF THE ID
function completedToDo(id) {
  const todos = getAllTodos();
  const index = todos.findIndex(function (todo) {
    return todo.id === id;
  });
  todos[index].completed = true;
  fs.writeFileSync(dataFilePath, JSON.stringify(todos));
}

//TODO: REMOVE COMPLETED TASK AND MOVE TO INCOMPLETE
function notCompleted(id) {
  const incomplete = getAllTodos();
  const index = incomplete.findIndex(function (todo) {
    return todo.id === id;
  });
  incomplete[index].completed  = false;
  fs.writeFileSync(dataFilePath, JSON.stringify(incomplete));
}

//TODO: DELETE TASK FROM COMPLETED PAGE
function deleteTodo(id) {
  const deletedTasks = getAllTodos();
  const deleted = deletedTasks.findIndex(function (todo) {
    return todo.id === id;
  });
  deletedTasks.splice(deleted, 1);
  fs.writeFileSync(dataFilePath, JSON.stringify(deletedTasks));
}


//TODO: EXPORT ALL METHODS FOR ACCESS THROUGHOUT THE APP
module.exports = {
  getIncompleteTodos,
  getCompletedTodos,
  addTodo,
  completedToDo,
  notCompleted,
  deleteTodo
};
