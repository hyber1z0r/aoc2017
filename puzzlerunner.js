'use strict';
const InputLoader = require('./InputLoader');
const solve = require('./day05/part2');

(async () => {
  const input = await new InputLoader('day05').loadInput();
  const output = solve(input);
  console.log('answer', output);
})();
