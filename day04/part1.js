'use strict';

module.exports = function solve(input) {
  return input.split(/[\r\n]/).reduce((passphrases, passphrase) => {
      if (new Set(passphrase.split(' ')).size === passphrase.split(' ').length) return passphrases + 1;
      return passphrases;
  }, 0);
};