const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();

//TODO: IMPORT TODO DATABASE ACCESS
const todoDb = require('./utils/dataStore');

//SETUP HANDLEBARS VIEW ENGINE
app.engine('handlebars', hbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//TODO: SETUP MIDDLE WARE AND ALSO THE STATIC PAGE ROUTE
app.use(express.static('static')); //static folder ('static')
app.use(bodyParser.urlencoded({extended: true})); //takes all data and turns into JSON object

//TODO: SETUP ROUTE FOR INCOMPLETE TASKS
app.get('/', (request, response) => {
  const incompleteTodos = todoDb.getIncompleteTodos();
  response.render('todos', {home: true, incompleteTodos}); //shorthand version of pageData below
  //todos: render todos.handlebars

});

//TODO: SETUP ROUTE FOR COMPLETED TASKS
app.get('/completed', (request, response) => {
  const pageData = {
    completed: true,
    completeTodos: todoDb.getCompletedTodos()
  };
  response.render('completed', pageData);
});

//TODO: SETUP POSTING OF A NEW TODO
app.post('/todo', (request, response) => {
  const { body } = request;
  //const body = request.body;
  todoDb.addTodo(body.newTodo);
  response.redirect('/');
});

//TODO: SETUP THE COMPLETING OF A TASK
app.post('/completed', (request, response) => {
  const { id } = request.body;
  todoDb.completedToDo(Number(id));
  response.redirect('/completed');
});

//TODO: MOVE TASK FROM COMPLETED TO INCOMPLETE
app.post('/', (request, response) => {
  const id = request.body.id;
  todoDb.notCompleted(Number(id));
  response.redirect('/');
});

app.post('/deleteToDo', (request, response) => {
  const { id, redirectURL } = request.body;
  todoDb.deleteTodo(Number(id));
  response.redirect(redirectURL);
});


//TODO: SETUP ROUTE FOR ALL PAGES A USER COULD TYPE
app.get('/*', (request, response) => {
  response.redirect('/');
});

app.listen(3000);
