const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
//TODO: IMPORT TODO DATABASE ACCESS

//SETUP HANDLEBARS VIEW ENGINE
app.engine('handlebars', hbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//TODO: SETUP MIDDLE WARE AND ALSO THE STATIC PAGE ROUTE

//TODO: SETUP ROUTE FOR INCOMPLETE TASKS
app.get('/', (request, response) => {});

//TODO: SETUP ROUTE FOR COMPLETED TASKS
app.get('/completed', (request, response) => {});

//TODO: SETUP POSTING OF A NEW TODO
app.post('/todo', (request, response) => {});

//TODO: SETUP THE COMPLETING OF A TASK
app.post('/complete', (request, response) => {});

//TODO: SETUP ROUTE FOR ALL PAGES A USER COULD TYPE
app.get('/*', (request, response) => {});

app.listen(3000);
