var express = require('express');
var currentTimeMiddleware = require('./middlewares/currentTimeMiddleware');

var app = express();

console.log("Hello World")

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
})

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/json', (req, res) => {
  const message = process.env.MESSAGE_STYLE === 'uppercase' ?
    'HELLO JSON' : 'Hello json';
  res.json({ message });
});

app.get('/now', currentTimeMiddleware, (req, res) => {
  res.json({ time: req.time });
});
 module.exports = app;
