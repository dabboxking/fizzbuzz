// @flow
'use strict';

var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  fizzbuzz = require('./build/fizzBuzz.js'),
  helmet = require('helmet'),
  compression = require('compression'),
  port = process.env.PORT || 3000;


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// protect your app from some well-known web vulnerabilities
app.use(helmet());

// GZIP compression
app.use(compression());

// parse application/json
app.use(bodyParser.json());

// routes
app.get("/api", fizzbuzz.doFizzBuzz);

app.listen(port);
console.log('Magic happens at http://localhost:' + port);
