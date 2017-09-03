const express = require('express');
const app = express();

function index() {
  //THIS WILL RETURN OUR INDEX PAGE
}

function aboutUs() {
  //THIS WILL RETURN ABOUT US PAGE
}

//SETS UP EXPRESS JS TO RESPOND TO ROOT URL
app.get('/', (request, response) => {
  response.send('hello, world!');
});

//START OUR EXPRESS SERVER
app.listen(3000);
