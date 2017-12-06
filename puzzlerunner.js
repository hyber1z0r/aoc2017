'use strict';
const InputLoader = require('./InputLoader');
const solve = require('./day02/part2');

(async () => {
  const input = await new InputLoader('day02').loadInput();
  console.log('input', input);
  const output = solve(input);
  console.log('answer', output);
})();
