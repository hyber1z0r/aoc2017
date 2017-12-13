'use strict';
const InputLoader = require('./InputLoader');
const solve = require('./day06/part2');

(async () => {
  const input = await new InputLoader('day06').loadInput();
  const output = solve(input);
  console.log('answer', output);
})();
