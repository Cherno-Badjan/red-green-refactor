const capitalizeAndFilter = require('./capitalizeAndFilter');
describe('capitalizeAndFilter function', () => {
  it('takes an array of strings capitalizes all the strings and filter out any string that starts with the letter f', () => {
    const arr = ['person', 'woman', 'man', 'camera', 'tv', 'fight', 'forget'];

    const result = capitalizeAndFilter(arr);
    const expected = ['PERSON', 'WOMAN', 'MAN', 'CAMERA', 'TV'];
    

    expect(result).toEqual(expected);
  });
});
