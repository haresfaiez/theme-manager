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

  describe('getType', () => {
    it('retrieves the type of an item', () => {
      const theme = new Theme({ a: { items: { b : { name: 'expected', type: 'color' } } } });
      expect(theme.getType('a', 'b')).toEqual('color');
    });

    it('sets the type of an item with not type to text', () => {
      const theme = new Theme({ a: { items: { b : { name: 'expected' } } } });
      expect(theme.getType('a', 'b')).toEqual('text');
    });
  });
});
