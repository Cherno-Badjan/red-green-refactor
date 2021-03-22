const copyAndPush = require('./copyAndPush');

describe('copyAndPush function', () => {
  it('takes in array and returns a new array with a new item pushed in array', () => {
    const numbers = [1, 2, 3];
    const newArr = copyAndPush(numbers, 4);
    const newerArr = [1, 2, 3, 4];

    expect(newArr).toEqual(newerArr);
  });
});
