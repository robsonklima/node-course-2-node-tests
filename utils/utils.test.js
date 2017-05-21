const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(40, 4);

  if (res !== 44) {
    throw new Error(`Expected 44, but got ${res}.`);
  }
});

it('should a square number', () => {
  var res = utils.square(3);

  if (res !== 9) {
    throw new Error(`Expected 100, but got ${res}.`);
  }
});
