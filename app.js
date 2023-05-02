const express = require('express');
const app = express();

app.use(express.static('public'));
 
// our first Route before linking to home-page:
// app.get('/home', (request, response, next) => response.send('<h1>Wayne Rooney</h1>'));

app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home-page.html'));

app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about.html'));

app.get('/works', (request, response, next) => response.sendFile(__dirname + '/views/works.html'));
 
// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000! '));


//----------------------------------------------------------------------

app.get('/cat', (request, response, next) => {
  response.send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Cat</title>
        <link rel="stylesheet" href="/stylesheets/style.css" />
      </head>
      <body>
        <h1>Cat</h1>
        <p>This is my second route</p>
        <img src="/images/cool-cat.jpg" />
      </body>
    </html>
  `);
});




