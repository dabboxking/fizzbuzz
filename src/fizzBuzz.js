// @flow
'use strict';

const fizz = 'fizz';
const buzz = 'buzz';
const fizzbuzz = 'fizzbuzz';

function doFizzBuzz(req, res) {
  var word = req.query.word || req.body.word,
    max = req.query.max_value || req.body.max_value,
    arr = [];

  if (isValidMaxValue(max) && isValidFizzBuzzWord(word)) {
    arr = getFizzBuzzNumbers(word, max);
    res.status(200).json({
      'status': 'ok',
      'numbers': arr
    });
  } else {
    res.status(400).json({
      'status': 'error'
    });
  }
}

function isValidMaxValue(max: number) {
  return max > 0 && max <= Number.MAX_SAFE_INTEGER;
}

function isValidFizzBuzzWord(word: string) {
  return word === fizz || word === buzz || word === fizzbuzz;
}

function getFizzBuzzNumbers(word: string, max: number) {
  switch (word) {
    case fizzbuzz:
      return getArrayOfNumbersDivBy5And3(max);
    case fizz:
      return getArrayOfNumbersDivBy3(max);
    case buzz:
      return getArrayOfNumbersDivBy5(max);
    default:
      console.log('How did this happen?');
  }
}

function getArrayOfNumbersDivBy5And3(max) {
  var arr = [];
  for (var i = 1; i <= max; i++) {
    if (divisibleBy3(i) && divisibleBy5(i)) {
      arr.push(i);
    }
  }
  return arr;
}

function getArrayOfNumbersDivBy5(max) {
  var arr = [];
  for (var i = 1; i <= max; i++) {
    if (divisibleBy5(i)) {
      arr.push(i);
    }
  }
  return arr;
}

function getArrayOfNumbersDivBy3(max) {
  var arr = [];
  for (var i = 1; i <= max; i++) {
    if (divisibleBy3(i)) {
      arr.push(i);
    }
  }
  return arr;
}

function divisibleBy3(num) {
  return num % 3 === 0;
}

function divisibleBy5(num) {
  return num % 5 === 0;
}

module.exports = {
  doFizzBuzz: doFizzBuzz,
  isValidMaxValue: isValidMaxValue,
  isValidFizzBuzzWord: isValidFizzBuzzWord,
  getFizzBuzzNumbers: getFizzBuzzNumbers
};
