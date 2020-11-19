import React, { Component } from 'react';
import ConfigurationItem from './ConfigurationItem';
import Theme from '../model/Theme';
import Storage from '../model/Storage';

class ThemeConfiguration extends Component {
  constructor() {
    super();

    const storage = new Storage(window.localStorage, 'theme');
    const theme  = storage.getTheme();
    this.state = {
      storage,
      theme,
      collapsedCategories: {}
    };

    this.updateExpression = this.updateExpression.bind(this);

    this.saveTheme = storage.saveTheme.bind(storage, theme);
  }

  updateExpression(categoryId, id, newValue, newType) {
    this.state.theme.updateExpression.bind(this.state.theme)(categoryId, id, newValue, newType);
    this.setState({ theme: this.state.theme });
  }

  toggleCategory(categoryId) {
    const oldState = !!this.state.collapsedCategories[categoryId];
    const newState = !oldState;
    const newCollapsedCategories = Object.assign(this.state.collapsedCategories, { [categoryId]: newState });
    this.setState({ collapsedCategories: newCollapsedCategories });
  }

  renderConfigurationItem(categoryId, id) {
    return <ConfigurationItem
    id={`${categoryId}.${id}`}
    name={this.state.theme.getName(categoryId, id)}
    type={this.state.theme.getType(categoryId, id)}
    rawValue={this.state.theme.rawValue(categoryId, id)}
    evaluatedValue={this.state.theme.evaluatedValue(categoryId, id) || this.state.theme.rawValue(categoryId, id)}
    updateExpression={this.updateExpression.bind(this, categoryId, id)}
    validate={this.state.theme.validate.bind(this.state.theme)}
      />
  }

  renderCategory(categoryId) {
    return <div>
      <div class="configuration-category--header" onClick={this.toggleCategory.bind(this, categoryId)}>
        <span class="configuration-category--knob">
           {this.state.collapsedCategories[categoryId] ? '►' : '▼'}
        </span>
        <h2>{this.state.theme.categoryName(categoryId)}</h2>
      </div>
      {(!this.state.collapsedCategories[categoryId]) &&
        <div>
          <ul>
            {this.state.theme
             .configurationsIds(categoryId)
             .map(this.renderConfigurationItem.bind(this, categoryId))}
          </ul>
       </div>
      }
    </div>;
  }

  render() {
    return (
      <main>
        <h1>simple theme editor</h1>
        <div class="configuration-list">
          {this.state.theme.configurationCategoriesIds().map(this.renderCategory.bind(this))}
        </div>
        <div><button onClick={this.saveTheme}>Save</button></div>
      </main>
    );
  }
}

export default ThemeConfiguration;
