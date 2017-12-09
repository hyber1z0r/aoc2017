'use strict';

module.exports = function solve(input) {
  return input.split(/[\r\n]/).reduce((passphrases, passphrase) => {
    const words = passphrase.split(' ').map((word) => [...word].sort().join(''));
    if (new Set(words).size === words.length) return passphrases + 1;
    return passphrases;
  }, 0);
};