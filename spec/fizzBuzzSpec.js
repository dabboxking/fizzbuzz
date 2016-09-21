'use strict';
var fizzBuzz = require('../app/fizzBuzz');
var request = require('supertest');


const fizz = 'fizz';
const buzz = 'buzz';
const fizzbuzz = 'fizzbuzz';
const max_value_1 = 1;
const max_value_3 = 3;
const max_value_5 = 5;
const max_value_15 = 15;
const max_value_30 = 30;

describe("Fizz Buzz Test Suite:", () => {
  //TODO Test the API Endpoint GET /api?word=fizz&max_value=30
});

describe('Fizz Buzz Test Suite: isValidMaxValue(word)', () => {
    it('should return false when max_value null', () => {
        expect(fizzBuzz.isValidMaxValue(null)).toBe(false);
    });
    it('should return false when max_value is null', () => {
        expect(fizzBuzz.isValidMaxValue("")).toBe(false);
    });
    it('should return false when max_value is undefined', () => {
        expect(fizzBuzz.isValidMaxValue(undefined)).toBe(false);
    });
    it('should return false when max_value 0', () => {
        expect(fizzBuzz.isValidMaxValue(0)).toBe(false);
    });
    it('should return false when max_value 0', () => {
        expect(fizzBuzz.isValidMaxValue(1)).toBe(true);
    });
    it('should return false when max_value Number.MAX_SAFE_INTEGER', () => {
        expect(fizzBuzz.isValidMaxValue(Number.MAX_SAFE_INTEGER)).toBe(true);
    });
});

describe('Fizz Buzz Test Suite: isValidFizzBuzzWord(word)', () => {
    it('should return false when word is null', () => {
        expect(fizzBuzz.isValidFizzBuzzWord(null)).toBe(false);
    });
    it('should return false when word is empty', () => {
        expect(fizzBuzz.isValidFizzBuzzWord("")).toBe(false);
    });
    it('should return false when word is undefined', () => {
        expect(fizzBuzz.isValidFizzBuzzWord(undefined)).toBe(false);
    });
    it('should return true when word is fizz', () => {
        expect(fizzBuzz.isValidFizzBuzzWord(fizz)).toBe(true);
    });
    it('should return true when word is buzz', () => {
        expect(fizzBuzz.isValidFizzBuzzWord(buzz)).toBe(true);
    });
    it('should return true when word is fizzbuzz', () => {
        expect(fizzBuzz.isValidFizzBuzzWord(fizzbuzz)).toBe(true);
    });
});

describe('Fizz Buzz Test Suite: processWordAndMaxValue(word,max_value)', () => {
    it('should return an empty array [] when word is fizz and max_value is 1', () => {
        var expectedArray = [];
        expect(fizzBuzz.processWordAndMaxValue(fizz, max_value_1)).toEqual(expectedArray);
    });

    it('should return an empty array [] when word is buzz and max_value is 1', () => {
        var expectedArray = [];
        expect(fizzBuzz.processWordAndMaxValue(buzz, max_value_1)).toEqual(expectedArray);
    });

    it('should return an empty array [] when word is fizzbuzz and max_value is 1', () => {
        var expectedArray = [];
        expect(fizzBuzz.processWordAndMaxValue(fizzbuzz, max_value_1)).toEqual(expectedArray);
    });

    it('should return an array [3] when word is fizz and max_value is 3', () => {
        var expectedArray = [3];
        expect(fizzBuzz.processWordAndMaxValue(fizz, max_value_3)).toEqual(expectedArray);
    });

    it('should return an array [5] when word is buzz and max_value is 5', () => {
        var expectedArray = [5];
        expect(fizzBuzz.processWordAndMaxValue(buzz, max_value_5)).toEqual(expectedArray);
    });

    it('should return an array [3,6,9,12,15] when word is fizz and max_value is 15', () => {
        var expectedArray = [3, 6, 9, 12, 15];
        expect(fizzBuzz.processWordAndMaxValue(fizz, max_value_15)).toEqual(expectedArray);
    });

    it('should return an array [3,6,9,12,15] when word is buzz and max_value is 15', () => {
        var expectedArray = [5, 10, 15];
        expect(fizzBuzz.processWordAndMaxValue(buzz, max_value_15)).toEqual(expectedArray);
    });

    it('should return an array [3,6,9,12,15] when word is fizzbuzz and max_value is 15', () => {
        var expectedArray = [15];
        expect(fizzBuzz.processWordAndMaxValue(fizzbuzz, max_value_15)).toEqual(expectedArray);
    });

    it('should return an array [3, 6, 9, 12, 15, 18, 21, 24, 27, 30] when word is fizz and max_value is 30', () => {
        var expectedArray = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];
        expect(fizzBuzz.processWordAndMaxValue(fizz, max_value_30)).toEqual(expectedArray);
    });

    it('should return an array [5, 10, 15, 20, 25, 30] when word is buzz and max_value is 30', () => {
        var expectedArray = [5, 10, 15, 20, 25, 30];
        expect(fizzBuzz.processWordAndMaxValue(buzz, max_value_30)).toEqual(expectedArray);
    });

    it('should return an array [15, 30] when word is fizzbuzz and max_value is 30', () => {
        var expectedArray = [15, 30];
        expect(fizzBuzz.processWordAndMaxValue(fizzbuzz, max_value_30)).toEqual(expectedArray);
    });
});
