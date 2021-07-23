var express = require('express');
var app = express();

console.log("Hello World")

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/json', (req, res) => {
  const message = process.env.MESSAGE_STYLE === 'uppercase' ?
    'HELLO JSON' : 'Hello json';
  res.json({ message });
});

 module.exports = app;
