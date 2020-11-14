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

  render() {
    return (
        <div>
        {
          this.state.items.map(({ id, name, expression}) => <ConfigurationItem
                               name={name}
                               id={id}
                               expression={expression}
                               valueOf={this.valueOf.bind(this)}
                               />)
        }
        
      </div>
    );
  }
}

export default ThemeConfiguration;
