// @flow
'use strict';

var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  fizzbuzz = require('./app/fizzBuzz.js'),
  port = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}))

// parse application/json
app.use(bodyParser.json())

app.get("/api", fizzbuzz.doFizzBuzz);

app.listen(port);
console.log('Magic happens at http://localhost:' + port);
