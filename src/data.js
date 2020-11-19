module.exports = {
  colors: {
    name: 'General colors',
    items: {
      primary: { name: 'Primary font color', expression: '#000000', type: 'color' },
      primaryBackground: { name: 'Primary background color', expression: '#ffffff', type: 'color' },
      secondary: { name: 'Secondary font color', expression: '#ffffff', type: 'color' },
      secondaryBackground: { name: 'Secondary background color', expression: '#4a86e8', type: 'color' },
      highlight1: { name: 'Highlight on primary background', expression: '#4a86e8', type: 'color' },
      highlight2: { name: 'Highlight on secondary background', expression: '#ffab40', type: 'color' }
    }
  },
  sizes: {
    name: 'Global sizes',
    items: {
      text: { name: 'Default text size', expression: '1.1', type: 'em' },
      h1: { name: 'Header1 text size', expression: '1.4', type: 'em' },
      h2: { name: 'Header2 text size', expression: '1.2', type: 'em' },
      borderWidth: { name: 'Defaut border width', expression: '1', type: 'px' }
    }
  },
  textField: {
    name: 'Text filed',
    items: {
      textSize: { name: 'Text size', expression: '1.1', type: 'em' },
      color: { name: 'Font color', expression: '#000000', type: 'color' },
      border: { name: 'Border', expression: '1px solid #000000', type: 'text' },
      background: { name: 'Background', expression: '#ffffff', type: 'color' }
    }
  },
  buttons: {
    name: 'Buttons',
    items: {
      fontSize: { name: 'Text size', expression: 'calc(1.1*1.2)', type: 'em' },
      color: { name: 'Font color', expression: '#000000', type: 'color' },
      background: { name: 'Background', expression: '#4a86e8', type: 'color' }
    }
  }
};
