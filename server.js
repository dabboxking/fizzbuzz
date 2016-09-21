'use strict';

var express = require('express');
var app = express();
var fizzbuzz = require('./app/fizzBuzz.js')
var port = 3000;

app.get('/api', function(req, res) {
  res.status(200);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
