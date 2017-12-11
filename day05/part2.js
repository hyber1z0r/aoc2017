'use strict';

module.exports = function solve(input) {
  input = input.split(/[\r\n]/).map(Number);

  let jumps = 0;
  let index = 0;

  while (index >= 0 && index < input.length) {
    const offset = input[index];
    if (offset >= 3) {
      index += input[index]--;
    } else {
      index += input[index]++;
    }
    jumps++;
  }

  return jumps;
};
