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

    this.evaluatedValue = theme.evaluatedValue.bind(theme);
    this.rawValue = theme.rawValue.bind(theme);
    this.getName = theme.getName.bind(theme);
  }

  updateExpression(id, newValue) {
    this.state.theme.updateExpression.bind(this.state.theme)(id, newValue);
    this.setState({ theme: this.state.theme });
  }

  renderConfigurationItem(id) {
    return <ConfigurationItem
    id={id}
    name={this.getName(id)}
    rawValue={this.rawValue(id)}
    evaluatedValue={this.evaluatedValue(id)}
    updateExpression={this.updateExpression}
      />
  }

  render() {
    return (
        <div>
        {this.state.theme.configurationsIds().map(this.renderConfigurationItem.bind(this))}
        </div>
    );
  }
}

export default ThemeConfiguration;
