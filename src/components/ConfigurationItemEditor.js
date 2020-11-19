import React, { Component } from 'react';
import { types } from '../model/Types';

class ConfigurationItemEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.rawValue,
      editedType: props.type,
      types,
      errors: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleTypeChange(event) {
    this.setState({editedType: event.target.value});
  }

  save() {
    const errors = this.props.validate(this.state.value, this.state.editedType);
    if (!errors.length) {
      this.props.save(this.state.value, this.state.editedType);
    } else {
      this.setState({ errors });
    }
  }

  renderTypeOption(type) {
    return <li>
      <input
        type='radio'
        name={this.props.id + '-type'}
        value={type}
        checked={this.state.editedType === type}
        onChange={this.handleTypeChange}
        />
      <span>{type}</span>
    </li>
  }

  render() {
    return <div>
      <div class='configuration-item--row'>
        <div class='configuration-item--row-head'><label for={this.props.id+'-value'}>Value:</label></div>
        <div class='configuration-item--row-body'>
          <input
            type={this.type === 'color' ? 'color' : 'text' }
            value={this.state.value}
            onChange={this.handleChange}
            id={this.props.id+'-value'}
          />
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
      <div class='configuration-item--row errors'>
      {this.state.errors.map(message => <li>{message}</li>)}
      </div>
    </div>
  }
}

export default ConfigurationItemEditor;
