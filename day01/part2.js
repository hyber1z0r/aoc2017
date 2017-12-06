'use strict';

module.exports = function solve(input) {
  input = input.split('').map(Number);
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    const curr = input[i];
    const next = input[(i + input.length / 2) % input.length];
    if (curr === next) sum += curr;
  }

  return sum;
};
