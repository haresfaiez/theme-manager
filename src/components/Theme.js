export default class Theme {

  constructor() {
    this.configurations = {
      'colors.primary': { name: 'Primary font color', expression: '#000000' },
      'textfield.border': { name: 'Border', expression: 'solid {colors.primary}'}
    };
  }

  configurationsIds() {
    return Object.keys(this.configurations);
  }

  getName(id) {
    return this.configurations[id].name;
  }

  valueOf(id) {
    return this.configurations[id].expression;
  }

  updateExpression(id, newExpression) {
    this.configurations[id].expression = newExpression;
  }

  evaluatedValue(id) {
    const expression = this.configurations[id].expression;

    if (!expression) {
      return this.valueOf(id);
    }

    return expression.replace(/{([^}]*)}/g, (id) => this.valueOf(id.replace(/({|})/g, '')));
  }

  rawValue(id) {
    const expression = this.configurations[id].expression;
    return expression || this.valueOf(id);
  }
}
