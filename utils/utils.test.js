// https://github.com/mjackson/expect
const expect = require('expect');
const utils = require('./utils');


it('should add two numbers', () => {
  var res = utils.add(40, 4);

  expect(res).toBe(44).toBeA('number');
});

it('should async add two numbers', (done) => {
  utils.asyncAdd(4, 3, (sum) => {
    expect(sum).toBe(7).toBeA('number');
    done();
  });
});

it('should async square a number', (done) => {
  utils.asyncSquare(3, (mult) => {
    expect(mult).toBe(9).toBeA('number');
    done();
  });
});

it('should a square number', () => {
  var res = utils.square(3);

  expect(res).toBe(9).toBeA('number');
});

it('should set first name and last name', () => {
  var user = {location: 'Arizona', age: 20};
  var res = utils.setName(user, 'Robson Lima');

  expect(res).toInclude({
    firstName: 'Robson',
    lastName: 'Lima'
  });
});

it('should expect some values', () => {
  // expect(12).toNotBe(12);
  // expect({name: 'Robson'}).toEqual({name: 'Robson'});
  // expect([2,3,4]).toInclude(4);
  // expect([2,3,4]).toExclude(4);
  // expect({
  //   name: 'Robson',
  //   age: 25,
  //   location: 'Gravataí'
  // }).toInclude({
  //   age: 25
  // });
  expect({
    name: 'Robson',
    age: 25,
    location: 'Gravataí'
  }).toExclude({
    age: 26
  });
});
