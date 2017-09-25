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

//TODO: ADD A NEW TODO TO THE LSIT
function addTodo(todo) {
    const currentTodos = getAllTodos();
    currentTodos.push({
        completed: false,
        task: todo,
        id: new Date().getTime(),
    })

    fs.writeFileSync(dataFilePath, JSON.stringify(currentTodos));
}

//TODO: FIND AND COMPLETE A TODO BASED OFF OF THE ID
function completeTodo(id) {
    //GET ALL TODOS
    //FIND TODO BY ID HINT: todoList.findIndex(todo => todo.id === id)
    //MODIFY TODO BY SETTING COMPLETED = TRUE HINT: todoList(index).completed = false;
    //SAVE LIST BACK TO DISK
}

//TODO: EXPORT ALL METHODS FOR ACCESS THROUGHOUT THE APP
module.exports = {
    getIncompleteTodos,
    getCompletedTodos,
    addTodo
};
