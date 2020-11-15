module.exports = {
  colors: {
    name: 'General colors',
    items: {
      primary: { name: 'Primary font color', expression: '#4a86e8', type: 'color' }
    }
  },
  textField: {
    name: 'Text field',
    items: {
      border: { name: 'Border', expression: 'solid {colors.primary}', type: 'em' }
    }
  }
};
