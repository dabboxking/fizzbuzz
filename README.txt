PURPOSE
=======
Small web application that presents a simple REST API

SETUP
=====
This project uses Node.js/Express, Jasmine for test
$ mkdir fizzbuzz && cd fizzbuzz
$ npm init
$ npm install express --save

Test dependencies
$ npm install jasmine-node --save
$ npm install request --save

Static code analysis (optional)
$ echo '{"scripts": {"flow": "flow; test $? -eq 0 -o $? -eq 2"}}' > package.json
$ touch .flowconfig
$ npm install --save-dev flow-bin
# add "// @flow" to top of file you want to check
# use the command below to check your file
$ npm run-script flow

# to have jasmine run test after saving
$ jasmine-node spec --autotest --watch .

INSTALLATION
============
$ npm install

EXAMPLE INPUT
=====
URI: /api
Method: GET
Required arguments:

* *word*: One of "fizz", "buzz" or "fizzbuzz".

* *max_value*: An integer greater than 0.

Example input:
    /api?word=fizz&max_value=30

EXAMPLE OUTPUT
======
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
