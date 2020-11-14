import React, { Component } from 'react';
import ConfigurationItem from './ConfigurationItem';

class ThemeConfiguration extends Component {
  constructor() {
    super();

    this.state = {
      values: {
        'colors.primary': '#000000'
      },
      items: [
        {name: 'Primary font color', id: 'colors.primary'},
        {name: 'Border', id: 'textfield.border', expression: 'solid {colors.primary}'}
      ]
    };
  }

  valueOf(key) {
    return this.state.values[key];
  }

  updateValue(id, newValue) {
    this.state.values[id] = newValue;
  }

  updateConfigurationItem() {
    return {
      value: this.updateValue.bind(this)
    };
  }

  renderConfigurationItem({ id, name, expression}) {
    return <ConfigurationItem
    name={name}
    id={id}
    expression={expression}
    valueOf={this.valueOf.bind(this)}
    update={this.updateConfigurationItem()}
      />
  }

  render() {
    return (
        <div>
        {this.state.items.map(this.renderConfigurationItem.bind(this))}
        </div>
    );
  }
}

export default ThemeConfiguration;
