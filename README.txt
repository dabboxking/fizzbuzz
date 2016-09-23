FIZZ BUZZ
=========
Small web application that presents a simple REST API

Application structure
=====================
fizzbuzz/
  | build/
    | src/
      | fizzBuzz.js - pure javascript code base
    | spec/
      | fizzBuzzSpec.js - test for code base
    | src
      | fizzBuzz.js - code base with flow js annotations
  | .babelrc - cool stuff
  | .exlintrc - style guide
  | .flowconfig - configuration for static code analysis
  | .gitignore - source control file
  | art.yml - performance analysis config
  | package.json - node config
  | README.txt - please read me!
  | server.js - node entry point, contains server setup

GETTING STARTED
===============
Unzip fizzbuzz.zip
$ unzip fizzbuzz.zip

Prerequisities
==============
Target system: Mac
Node.js

Installing
==========
$ cd fizzbuzz
$ npm install

This will install:
Express.js
Helmet
Babel Eslint
Eslint
Gzip Compression
Jasmine Node
Supertest
Flow.js

RUNNING THE APP
===============
$ npm install -g babel-cli
$ npm run transform
$ npm run dev OR npm run prod

HOW TO CONSUME
via console
$ curl -X GET "http://localhost:3000/api?word=fizz&max_value=30"

via browser
open your favorite browser (EDGE)
http://localhost:3000/api?word=fizz&max_value=30

RUNNING THE TESTS
=================
$ npm test
runs: ./node_modules/.bin/jasmine-node spec

Linter
$ npm run lint

# to have jasmine run test after file changes
$ npm run test:watch
runs: jasmine-node spec --autotest --watch .

Static code analysis (optional)
===============================
# add "// @flow" to top of file you want to check
# use the command below to check your file
$ npm run-script flow

Running Flow code
=================
Transform code during development
$ npm install babel-plugin-transform-flow-strip-types
$ babel --watch=./src --out-dir=./build

Performance Testing
===================
Using Artillery
https://artillery.io/docs/index.html

$ npm install -g artillery
$ npm run art
runs: artillery run ./art.yml
running this script will create a json file in root dir containing performance stats

Sync function Test
node --trace-sync-io server.js

SECURITY
========
$ nsp check
3 vulnerabilities found (Regular Expression Denial of Service)

# Security Checklist
https://blog.risingstack.com/node-js-security-checklist/
If this api was in production using resources a rate limiter would be wrap around it
https://www.owasp.org/index.php/Top_10_2013-Top_10

EXAMPLE INPUT
=============
URI: /api
Method: GET
Required arguments:

* *word*: One of "fizz", "buzz" or "fizzbuzz".
* *max_value*: An integer greater than 0.

Example input:
    /api?word=fizz&max_value=30

EXAMPLE OUTPUT
=============
Format: JSON.
HTTP status: 400 if *status* is "error", otherwise 200.
Key/values:

* *numbers*: An array of all integers between and including 1 and *max_value*
that are divisible by 3 if *word* is "fizz", 5 if *word* is "buzz" and by both
3 and 5 if *word* is "fizzbuzz". The array should be in ascending order. If
*status* is "error", this should be an empty array.

* *status*. "error" if a required argument is missing or invalid, otherwise
"ok".

Example output matching example input:
    {"status": "ok", "numbers": [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]}
