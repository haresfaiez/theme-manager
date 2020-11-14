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
        <input type='text' value={this.state.value} onChange={this.handleChange} />
        <button onClick={() => this.props.updateExpression(this.props.id, this.state.value)}>OK</button>
      </div>
    }
  }

  render() {
    return (
      <div>
        <div onClick={this.switchMode}>
          <div>
            <span>{this.props.name}:</span>
            <span>{this.props.evaluatedValue}</span>
          </div>
          <div>{this.props.id}</div>
        </div>
        {this.renderEditor()}
      </div>
    );
  }
}

export default ConfigurationItem;
