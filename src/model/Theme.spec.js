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

  describe('validation', () => {
    it('rejects an empty value', () => {
      const actual = new Theme().validate('', 'text');
      expect(actual).toEqual(['The value cannot be empty!']);
    });

    it('rejects an non-recognized type', () => {
      const actual = new Theme().validate('Y', 'random');
      expect(actual).toEqual(['Failed to recognize type "random"! Try to choose one of the offered options.']);
    });
  });

  describe('text validation', () => {

    it('rejects a text value with only spaces', () => {
      const actual = new Theme().validate('     ', 'text');
      expect(actual).toEqual(['Text value cannot contain only spaces!']);
    });
  });

  describe('color validation', () => {
    it('accepts color uppercase hex code', () => {
      const actual = new Theme().validate('#ABC1EB', 'color');
      expect(actual).toEqual([]);
    });

    it('accepts color hex code', () => {
      const actual = new Theme().validate('#e42fDe', 'color');
      expect(actual).toEqual([]);
    });

    it('accepts color shortened hex code', () => {
      const actual = new Theme().validate('#fff', 'color');
      expect(actual).toEqual([]);
    });

    it('rejects non-hex color code', () => {
      const actual = new Theme().validate('red', 'color');
      expect(actual).toEqual(['Failed to save color! "red" is not a valid hex code.']);
    });
  });

  describe('em/rem/px validation', () => {
    it('rejects non-numbers', () => {
      const actual = new Theme().validate('3aY7', 'px');
      expect(actual).toEqual(['Failed to save value! "3aY7" is not a valid number.']);
    });

    it('rejects non-positive numbers', () => {
      const actual = new Theme().validate('-7', 'em');
      expect(actual).toEqual(['Failed to save value! "-7" is negative and a positive number is expected.']);
    });

    it('rejects positive infinity numberr', () => {
      const actual = new Theme().validate(Number.POSITIVE_INFINITY, 'em');
      expect(actual).toEqual(['Failed to save value! Positive infenity is not a valid number.']);
    });

    it('accepts zero', () => {
      const actual = new Theme().validate('0', 'rem');
      expect(actual).toEqual([]);
    });

    it('accepts a number', () => {
      const actual = new Theme().validate(310, 'px');
      expect(actual).toEqual([]);
    });

    it('accepts a number as a string', () => {
      const actual = new Theme().validate('30', 'rem');
      expect(actual).toEqual([]);
    });
  });
});
