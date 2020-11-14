import React, { Component } from 'react';
import ConfigurationItem from './ConfigurationItem';

class ThemeConfiguration extends Component {
  constructor() {
    super();

    this.state = {
      items: {
        'colors.primary': { name: 'Primary font color', expression: '#000000' },
        'textfield.border': { name: 'Border', expression: 'solid {colors.primary}'}
      }
    };
  }

  valueOf(id) {
    return this.state.items[id].expression;
  }

  updateValue(id, newExpression) {
    this.state.items[id].expression = newExpression;
  }

  renderConfigurationItem(id) {
    const { name, expression} = this.state.items[id];

    return <ConfigurationItem
    name={name}
    id={id}
    expression={expression}
    valueOf={this.valueOf.bind(this)}
    update={this.updateValue.bind(this)}
      />
  }

  render() {
    return (
        <div>
        {Object.keys(this.state.items).map(this.renderConfigurationItem.bind(this))}
        </div>
    );
  }
}

export default ThemeConfiguration;
