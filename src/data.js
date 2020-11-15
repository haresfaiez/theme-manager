export default {
  colors: {
    name: 'General colors',
    items: {
      primary: { name: 'Primary font color', expression: '#000000' }
    }
  },
  textField: {
    name: 'Text field',
    items: {
      border: { name: 'Border', expression: 'solid {colors.primary}'}
    }
  }
};
