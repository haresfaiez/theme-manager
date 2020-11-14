import React, { Component } from 'react';

class ConfigurationItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false
    };

    this.switchMode = this.switchMode.bind(this);
  }

  switchMode() {
    this.setState(() => ({ editMode: !this.state.editMode }));
  }

  renderEditor() {
    if (this.state.editMode) {
      return <div>
        <input type='text' value={this.props.rawValue} />
        <button onClick={() => this.props.updateExpression(this.props.id, this.props.rawValue)}>OK</button>
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
