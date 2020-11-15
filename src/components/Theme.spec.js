const Theme = require('./Theme');

describe('Theme', () => {
  it('retrieves configuration name when configuration exists', () => {
    const theme = new Theme({
      a: {
        items: {
          b : { name: 'expected' }
        }
      }
    });
    expect(theme.getName('a', 'b')).toEqual('expected');
  });
});
