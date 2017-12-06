'use strict';
const util = require('util');
const fs = require('fs');
const path = require('path');
const readFile = util.promisify(fs.readFile);

class InputLoader {
  constructor(puzzlename) {
    this.puzzlename = puzzlename;
  }

  async loadInput() {
    return readFile(path.resolve(__dirname, this.puzzlename, 'input.txt'), 'UTF-8');
  }
}

module.exports = InputLoader;