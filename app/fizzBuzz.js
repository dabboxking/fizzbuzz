// @flow
'use strict';

const fizz = 'fizz';
const buzz = 'buzz';
const fizzbuzz = 'fizzbuzz';

function isValidMaxValue(max) {
    return max > 0 && max <= Number.MAX_SAFE_INTEGER;
};

function isValidFizzBuzzWord(word) {
    return word === fizz || word === buzz || word === fizzbuzz;
};

function processWordAndMaxValue(word, max) {
    var arr = [];
    if (word === fizzbuzz) {
        for (var i = 1; i < max + 1; i++) {
            if (divisibleBy3(i) && divisibleBy5(i)) {
                arr.push(i);
            }
        }
    } else if (word === fizz) {
        for (var i = 1; i < max + 1; i++) {
            if (divisibleBy3(i)) {
                arr.push(i);
            }
        }
    } else if (word === buzz) {
        for (var i = 1; i < max + 1; i++) {
            if (divisibleBy5(i)) {
                arr.push(i);
            }
        }
    }
    return arr;
};

var divisibleBy3 = function(num) {
    return num % 3 === 0;
};

var divisibleBy5 = function(num) {
    return num % 5 === 0;
};

module.exports = {
    isValidMaxValue: isValidMaxValue,
    isValidFizzBuzzWord: isValidFizzBuzzWord,
    processWordAndMaxValue: processWordAndMaxValue
};
