import React, { Component } from 'react';
import ConfigurationItemEditor from './ConfigurationItemEditor';

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

  save(newValue, newType) {
    this.props.updateExpression(newValue, newType);
    this.switchMode();
  }

  renderColorPreview() {
    return <span class="color-preview" style={{background: this.props.evaluatedValue}} />
  }

  render() {
    return (
      <li className={this.state.editMode ? 'configuration-item--edit-mode' : 'configuration-item'}>
        <div onClick={this.switchMode} class='configuration-item--row configuration-item--key'>
          <div class='configuration-item--row-head--large'>
            <span class='configuration-item--label'>
              {this.props.name}{this.state.hasUnit ? ` (${this.props.type})`: ''}:
            </span>
            <span>
              <b>{this.props.evaluatedValue}</b>
              {this.props.type === 'color' ? this.renderColorPreview() : null}
            </span>
          </div>
          <div class='configuration-item--row-body'>{this.props.id}</div>
          <div class='configuration-item--row-tail'>{this.state.editMode ? 'x' : ''}</div>
        </div>
        {this.state.editMode ?
         <ConfigurationItemEditor
           id={this.props.id}
           rawValue={this.props.rawValue}
           type={this.props.type}
           save={this.save.bind(this)}
           />
         : ''}
      </li>
    );
  }
}

export default ConfigurationItem;
