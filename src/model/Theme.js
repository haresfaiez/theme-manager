class Theme {

  constructor(configurations) {
    this.configurations = configurations;
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

  getType(categoryId, id) {
    return this.configurations[categoryId].items[id].type || 'text';
  }

  updateExpression(categoryId, id, newExpression, newType) {
    let category = this.configurations[categoryId];
    if (!category) {
      category = this.configurations[categoryId] = {};
    }

    const edited = category.items[id];
    edited.expression = newExpression;
    edited.type = newType;
  }

  evaluatedValue(categoryId, id) {
    const category = this.configurations[categoryId];
    if (!category || !category.items[id] || !category.items[id].expression) {
      return '';
    }

    return this.rawValue(categoryId, id)
      .replace(/{([^}]*)}/g, (reference) => {
        const id = reference.replace(/({|})/g, '').split('.');
        return this.evaluatedValue(id[0], id[1]) || reference;
      });
  }

  rawValue(categoryId, id) {
    const category = this.configurations[categoryId];
    if (!category || !category.items[id] || !category.items[id].expression) {
      return '';
    }
    return category.items[id].expression;
  }

  validateColor(value) {
    if (!RegExp(/^#[a-fA-F0-9]{3}$/).test(value) && !RegExp(/^#[a-fA-F0-9]{6}$/).test(value)) {
      return [`Failed to save color! "${value}" is not a valid hex code.`];
    } else {
      return [];
    }
  }

  validateText(value) {
    if (RegExp(/^\s*$/).test(value)) {
      return ['Text value cannot contain only spaces!'];
    } else {
      return [];
    }
  }

  validateNumber(rawValue) {
    if (RegExp(/^calc(.+)$/).test(rawValue)) {
      return [];
    }

    const value = Number(rawValue);
    if(Number.isNaN(value)) {
      return [`Failed to save value! "${rawValue}" is not a valid number.`];
    }
    if (value === Number.POSITIVE_INFINITY) {
      return ['Failed to save value! Positive infenity is not a valid number.'];
    }
    if (value < 0) {
      return [`Failed to save value! "${value}" is negative and a positive number is expected.`]
    }

    return [];
  }

  validate(value, type) {
    if (value === '' || value === null || value === undefined) {
      return ['The value cannot be empty!'];
    }

    if (type === 'color') {
      return this.validateColor(value);
    }

    if (type === 'text') {
      return this.validateText(value);
    }

    if (['px', 'em', 'rem'].includes(type)) {
      return this.validateNumber(value);
    }

    return [`Failed to recognize type "${type}"! Try to choose one of the offered options.`];
  }
}

module.exports = Theme;
