'use strict';

module.exports = function solve(input) {
  return input.split(/[\r\n]/).reduce((checksum, digit) => {
    const lineNumbers = digit.split(' ').map(Number);
    return checksum + (Math.max(...lineNumbers) - Math.min(...lineNumbers));
  }, 0);
};