import React, { Component } from 'react';

class ConfigurationItem extends Component {
  constructor() {
    super();

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
        <input type='text' value={this.props.value} />
        <button>OK</button>
        </div>
    }
  }

  render() {
    return (
      <div>
        <div onClick={this.switchMode}>
          <div>
             <span>{this.props.name}:</span>
            <span>{this.props.value}</span>
          </div>
          <div>{this.props.id}</div>
        </div>
        {this.renderEditor()}
      </div>
    );
  }
}

export default ConfigurationItem;
