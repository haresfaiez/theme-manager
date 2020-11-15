import React, { Component } from 'react';
import ConfigurationItem from './ConfigurationItem';
import Theme from '../model/Theme';
import data from '../data';

class ThemeConfiguration extends Component {
  constructor() {
    super();

    const theme = new Theme(data);
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
      <div>
        <h2>{this.state.theme.categoryName(categoryId)}</h2>
      </div>
      <div>
      <ul>
        {this.state.theme.configurationsIds(categoryId).map(this.renderConfigurationItem.bind(this, categoryId))}
      </ul>
      </div>
    </div>;
  }

  render() {
    return (
      <main>
        <h1>simple theme editor</h1>
        <div class="configuration-list">
          {this.state.theme.configurationCategoriesIds().map(this.renderCategory.bind(this))}
        </div>
        <div><button>Save</button></div>
      </main>
    );
  }
}

export default ThemeConfiguration;
