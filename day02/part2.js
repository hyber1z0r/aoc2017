'use strict';

module.exports = function solve(input) {
  return input.split(/[\r\n]/).reduce((checksum, line) => {
    const lineNumbers = line.split(' ').map(Number);
    lineNumbers.forEach((num) => {
      const divisbleNum = lineNumbers.find((n) => n % num === 0 && n !== num);
      if (divisbleNum) checksum += divisbleNum / num;
    });
    return checksum;
  }, 0)
};
