import React, { Component } from 'react';

class ConfigurationItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      actualValue: this.interpretValue(props.valueOf, props),
      newValue: props.expression || props.valueOf(props.id)
    };

    this.switchMode = this.switchMode.bind(this);
  }

  switchMode() {
    this.setState(() => ({ editMode: !this.state.editMode }));
  }

  interpretValue(valueOf, { expression, id }) {
    if (!expression) {
      return valueOf(id);
    }

    return expression.replace(/{([^}]*)}/g, (id) => valueOf(id.replace(/({|})/g, '')));
  }

  renderEditor() {
    if (this.state.editMode) {
      return <div>
        <input type='text' value={this.props.expression} />
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
            <span>{this.state.actualValue}</span>
          </div>
          <div>{this.props.id}</div>
        </div>
        {this.renderEditor()}
      </div>
    );
  }
}

export default ConfigurationItem;
