# FIZZ BUZZ API
<p>Small web application that presents a simple REST API.</p>

### Application structure
A. fizzbuzz/
  1. build/
  2. src/
    1. fizzBuzz.js - pure javascript code base
  3. reports/ - artillery reports are moved here
  4. spec/
    1. fizzBuzzSpec.js - test for code base
  5. src/
    1. fizzBuzz.js - code base with flow js annotations
  6. .babelrc - cool stuff
  7. .exlintrc - style guide
  8. .flowconfig - configuration for static code analysis
  9. .gitignore - source control file
  10. art.yml - performance analysis config
  11. package.json - node config
  12. README.txt - please read me!
  13. server.js - node entry point, contains server setup

### Prerequisities
Node

### Getting Started
```bash
$ git clone https://github.com/dabboxking/exercises/fizzBuzzApi.git
$ cd fizzBuzzApi
```

### Installing
```bash
$ cd fizzbuzz
$ npm install
```

### Running the service
```bash
$ npm run dev
```

### Running test
```bash
$ npm test
```

#### Have jasmine run test after file changes
```bash
$ npm run test:watch
```

### Linter
```bash
$ npm run lint
```

### Static code analysis (optional)
1. Add "//@flow" to top of file you want to check
2. Use the command below to check your file
```bash
$ npm run flow
```

### Developing with flow
<p>Transform code during development</p>

```bash
$ npm install babel-plugin-transform-flow-strip-types
$ babel --watch=./src --out-dir=./build
```

### Performance Testing
<p><a href="https://artillery.io/docs/index.html">Using Artillery</p>

```bash
$ npm install -g artillery
$ npm run dev
$ npm run art
```

#### To views reports
```bash
$ cd /reports
```

### SECURITY
```bash
$ nsp check
```

<p>3 vulnerabilities found (Regular Expression Denial of Service)</p>

#### Security Checklist
<a href="https://blog.risingstack.com/node-js-security-checklist/">Node Security Checklist</a>

#### Additional resources
https://www.owasp.org/index.php/Top_10_2013-Top_10

### Consuming
#### via console

```bash
$ curl -X GET "http://localhost:3000/api?word=fizz&max_value=30"
```

####via browser
1. Open your favorite browser (EDGE)
2. Go to http://localhost:3000/api?word=fizz&max_value=30
