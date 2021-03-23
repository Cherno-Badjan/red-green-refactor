const fetchQuotes = require('./fetchQuotes');

describe('fetchQuotes function', () => {
  it('uses the futurama Quote Api to return a single quote with name, text and image properties in an object', async() => {
    const quote = await fetchQuotes();
    

    expect(quote).toEqual(expect.objectContaining({
      name: expect. any(String),
      text: expect. any(String),
      image: expect. any(String),
    }));

  });

});
