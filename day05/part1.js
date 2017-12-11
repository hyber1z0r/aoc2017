'use strict';

module.exports = function solve(input) {
  input = input.split(/[\r\n]/).map(Number);

  let jumps = 0;
  let index = 0;

  while (index >= 0 && index < input.length) {
    index += input[index]++;
    jumps++;
  }

  return jumps;
};