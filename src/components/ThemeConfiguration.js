import React, { Component } from 'react';
import ConfigurationItem from './ConfigurationItem';
import Theme from './Theme';

class ThemeConfiguration extends Component {
  constructor() {
    super();

    const theme = new Theme();
    this.state = {
      theme
    };

    this.updateExpression = this.updateExpression.bind(this);

    this.configurationCategoriesIds = theme.configurationCategoriesIds.bind(theme);
    this.configurationsIds = theme.configurationsIds.bind(theme);
    this.categoryName = theme.categoryName.bind(theme);
    this.evaluatedValue = theme.evaluatedValue.bind(theme);
    this.rawValue = theme.rawValue.bind(theme);
    this.getName = theme.getName.bind(theme);
  }

  updateExpression(categoryId, id, newValue) {
    this.state.theme.updateExpression.bind(this.state.theme)(categoryId, id, newValue);
    this.setState({ theme: this.state.theme });
  }

  renderConfigurationItem(categoryId, id) {
    return <ConfigurationItem
    id={id}
    name={this.getName(categoryId, id)}
    rawValue={this.rawValue(categoryId, id)}
    evaluatedValue={this.evaluatedValue(categoryId, id)}
    updateExpression={this.updateExpression.bind(this, categoryId)}
      />
  }

  renderCategory(categoryId) {
    return <div>
      <div>{this.categoryName(categoryId)}</div>
      {this.configurationsIds(categoryId).map(this.renderConfigurationItem.bind(this, categoryId))}
    </div>;
  }

  render() {
    return (
        <div>
        {this.configurationCategoriesIds().map(this.renderCategory.bind(this))}
        </div>
    );
  }
}

export default ThemeConfiguration;
