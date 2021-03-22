const copyAndPush = require('./copyAndPush');

const numbers = [1, 2, 3];
describe('copyAndPush function', () => {
  it('takes in array and returns a new array with a new item pushed in array', () => {
    const newArr = copyAndPush(numbers, 4);
    const newerArr = [1, 2, 3, 4];

    expect(newArr).toEqual(newerArr);
  });
  it('takes in array and returns a new array with a new item pushed in array', () => {
    const newArr = copyAndPush(numbers, 6);
    const newerArr = [1, 2, 3, 6];

    expect(newArr).toEqual(newerArr);
  });
});
