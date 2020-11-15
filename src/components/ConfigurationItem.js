import React, { Component } from 'react';

class ConfigurationItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      value: props.rawValue
    };

    this.switchMode = this.switchMode.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  switchMode() {
    this.setState(() => ({ editMode: !this.state.editMode }));
  }

  renderEditor() {
    if (this.state.editMode) {
      return <div>
        <div class='configuration-item--row'>
          <div class='configuration-item--row-head'>Value:</div>
          <div class='configuration-item--row-body'>
            <input type='text' value={this.state.value} onChange={this.handleChange} />
          </div>
        </div>
        <div class='configuration-item--row'>
          <div class='configuration-item--row-head'>Type:</div>
          <div class='configuration-item--row-body'><input type='radio' />text</div>
          <div class='configuration-item--row-tail'>
            <button onClick={() => this.props.updateExpression(this.state.value)}>OK</button>
          </div>
        </div>
      </div>
    }
  }

  render() {
    return (
      <li className={this.state.editMode ? 'configuration-item--edit-mode' : 'configuration-item'}>
        <div onClick={this.switchMode} class='configuration-item--row configuration-item--key'>
          <div class='configuration-item--row-head--large'>
            <span class='configuration-item--label'>{this.props.name}:</span>
            <span><b>{this.props.evaluatedValue}</b></span>
          </div>
          <div class='configuration-item--row-body'>{this.props.id}</div>
          <div class='configuration-item--row-tail'>{this.state.editMode ? 'x' : ''}</div>
        </div>
        {this.renderEditor()}
      </li>
    );
  }
}

export default ConfigurationItem;
