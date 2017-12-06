'use strict';

module.exports = function solve(input) {
  input = input.split('');
  input.push(input[0]);

  return input.map(Number).reduce((sum, digit, idx, arr) => {
      if (digit === arr[idx + 1]) return sum + digit;
      return sum;
  }, 0)
};