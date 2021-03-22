const getName = require('./getName');
describe('getName function', () => {
  it('takes in object and returns value of name property', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };

    const nameProp = getName(spot);

    expect(nameProp).toEqual('spot');

  });
  it('takes in object and returns value of name property', () => {
    const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };


    const nameProp = getName(character);

    expect(nameProp).toEqual('Aang');

  });
});
