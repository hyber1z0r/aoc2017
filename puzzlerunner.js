'use strict';
const InputLoader = require('./InputLoader');
const solve = require('./day04/part2');

(async () => {
  const input = await new InputLoader('day04').loadInput();
  console.log('input', input);
  const output = solve(input);
  console.log('answer', output);
})();
