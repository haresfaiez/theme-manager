import React, { Component } from 'react';

class ConfigurationItemEditor extends Component {
  constructor(props) {
    super(props);

    const unitTypes = ['em', 'rem', 'px'];
    this.state = {
      value: props.rawValue,
      hasUnit: unitTypes.includes(props.type),
      types: ['text', ...unitTypes, 'color']
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  save() {
    this.props.save(this.state.value);
  }

  renderTypeOption(type) {
    return <li>
      <input
        type='radio'
        name={this.props.id + '-type'}
        value={type}
        checked={this.props.type === type}
        />
      <span>{type}</span>
    </li>
  }

  render() {
    return <div>
      <div class='configuration-item--row'>
        <div class='configuration-item--row-head'>Value:</div>
        <div class='configuration-item--row-body'>
          <input type='text' value={this.state.value} onChange={this.handleChange} />
        </div>
      </div>
      <div class='configuration-item--row'>
        <div class='configuration-item--row-head'>Type:</div>
        <div class='configuration-item--row-body'>
          <ul>
            {this.state.types.map(this.renderTypeOption.bind(this))}
          </ul>
        </div>
        <div class='configuration-item--row-tail'>
          <button onClick={this.save.bind(this)}>OK</button>
        </div>
      </div>
    </div>
  }
}

export default ConfigurationItemEditor;
