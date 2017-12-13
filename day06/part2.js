'use strict';

module.exports = function solve(input) {
  const banks = input.split(' ').map(Number);
  const hashes = [];

  hashes[banks.join(',')] = true;

  let cycles = 0;

  while (true) {

    // Find the highest value of the banks (7, index 2)
    let highest = Math.max(...banks);

    // Set the value to 0 in the array
    let highestIndex = banks.indexOf(highest);
    banks[highestIndex] = 0;

    // Redistribute all values from highestBank
    while (highest > 0) {
      highestIndex = (highestIndex + 1) % banks.length;
      banks[highestIndex]++;
      highest--;
    }

    cycles++;

    // Check for infinite loop
    const hash = banks.join(',');
    if (hashes[hash]) {
      return cycles - hashes[hash];
    }

    hashes[hash] = cycles;
  }

};

