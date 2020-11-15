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
  }

  updateExpression(categoryId, id, newValue) {
    this.state.theme.updateExpression.bind(this.state.theme)(categoryId, id, newValue);
    this.setState({ theme: this.state.theme });
  }

  renderConfigurationItem(categoryId, id) {
    return <ConfigurationItem
    id={id}
    name={this.state.theme.getName(categoryId, id)}
    rawValue={this.state.theme.rawValue(categoryId, id)}
    evaluatedValue={this.state.theme.evaluatedValue(categoryId, id)}
    updateExpression={this.updateExpression.bind(this, categoryId)}
      />
  }

  renderCategory(categoryId) {
    return <div>
      <div>{this.state.theme.categoryName(categoryId)}</div>
      {this.state.theme.configurationsIds(categoryId).map(this.renderConfigurationItem.bind(this, categoryId))}
    </div>;
  }

  render() {
    return (
        <div>
        {this.state.theme.configurationCategoriesIds().map(this.renderCategory.bind(this))}
        </div>
    );
  }
}

export default ThemeConfiguration;
