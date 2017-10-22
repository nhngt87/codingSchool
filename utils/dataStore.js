const fs = require('fs');
//

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://nhngt87:Lunabelly09051202!@ds117625.mlab.com:17625/codingschool';
let db;
MongoClient.connect(url, (err, _db) => {
  if (err) {
    throw err
  } else {
    db = _db;
    console.log('Connected to server');
  }
});

//TODO: GET ALL TODOS FROM DISK
function getAllTodos(callback) {
  const collection = db.collection('todos');
  collection.find({}).toArray((err, docs) => {
    callback(docs);
  });
}

//TODO: GET COMPLETED LIST OF TODOS
function getCompletedTodos(callback) {
  const collection = db.collection('todos');
  collection.find({completed: true}).toArray((err, docs) => {
    callback(docs);
  });
}

//TODO: GET INCOMPLETE TODO LIST
function getIncompleteTodos(callback) {
  const collection = db.collection('todos');
  collection.find({completed: false}).toArray((err, docs) => {
    callback(docs);
  });
}

//TODO: ADD A NEW TODO TO THE LIST
function addTodo(todo, callback) {
  const collection = db.collection('todos');
  collection.insertOne({
    completed: false,
    task: todo,
    id: new Date().getTime()
  }, (err, result) => {
    callback(result);
  });
}

//TODO: FIND AND COMPLETE A TODO ) {
//GET ALL TODOS BASED OFF OF THE ID
function completedToDo(id, callback) {
  const collection = db.collection('todos');
  collection.updateOne(
    {id: id},
    {$set: {completed: true}}, (err, result) => {
      callback(result)
    });
}

//TODO: REMOVE COMPLETED TASK AND MOVE TO INCOMPLETE
function notCompleted(id, callback) {
  const collection = db.collection('todos');
  collection.updateOne(
    {id: id},
    {$set: {completed: false}},
    (err, result) => {
      callback(result)
    });
}

//TODO: DELETE TASK FROM COMPLETED PAGE
function deleteTodo(id, callback) {
  const collection = db.collection('todos');
  collection.deleteOne(
    {id: id},
    (err, result) => {
      callback(result);
    });
}

function completeAll(callback) {
  const collection = db.collection('todos');
  collection.updateMany(
    {completed: false},
    {$set: {completed: true}},
    (err, result) => {
      callback(result);
    });
}

function incompleteAll(callback) {
  const collection = db.collection('todos');
  collection.updateMany(
    {completed: true},
    {$set: {completed: false}},
    (err, result) => {
      callback(result);
    });
}

//TODO: EXPORT ALL METHODS FOR ACCESS THROUGHOUT THE APP
module.exports = {
  getAllTodos,
  getIncompleteTodos,
  getCompletedTodos,
  addTodo,
  completedToDo,
  notCompleted,
  deleteTodo,
  completeAll,
  incompleteAll
};
