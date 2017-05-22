const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo app v1.0'
  });
});

app.get('/users', (req, res) => {
  res.send([{
    name: 'Mike',
    age: 25
  }, {
    name: 'Robson',
    age: 31
  }, {
    name: 'Joan',
    age: 45
  }]);
});

app.listen(3000);
module.exports.app = app;
