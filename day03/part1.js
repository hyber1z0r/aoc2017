'use strict';

module.exports = function solve(input) {
  input = parseInt(input);
  const size = Math.ceil(Math.sqrt(input));
  const center = Math.ceil((size - 1) / 2);
  return Math.max(0, center - 1 + Math.abs(center - input % size));
};
