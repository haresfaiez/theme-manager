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

  updateExpression(id, newExpression) {
    this.configurations[id].expression = newExpression;
  }

  evaluatedValue(id) {
    return this.rawValue(id).replace(/{([^}]*)}/g, (id) => this.rawValue(id.replace(/({|})/g, '')));
  }

  rawValue(id) {
    return this.configurations[id].expression;
  }
}
