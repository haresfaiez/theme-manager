export default class Theme {

  constructor() {
    this.configurations = {
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
  }

  configurationCategoriesIds() {
    return Object.keys(this.configurations);
  }

  configurationsIds(categoryId) {
    return Object.keys(this.configurations[categoryId].items);
  }

  categoryName(categoryId) {
    return this.configurations[categoryId].name;
  }

  getName(categoryId, id) {
    return this.configurations[categoryId].items[id].name;
  }

  updateExpression(categoryId, id, newExpression) {
    this.configurations[categoryId].items[id].expression = newExpression;
  }

  evaluatedValue(categoryId, id) {
    return this.rawValue(categoryId, id)
      .replace(/{([^}]*)}/g, (reference) => {
        const id = reference.replace(/({|})/g, '').split('.');
        return this.rawValue(id[0], id[1]);
      });
  }

  rawValue(categoryId, id) {
    return this.configurations[categoryId].items[id].expression;
  }
}
