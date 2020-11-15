import React, { Component } from 'react';

class ConfigurationItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      value: props.rawValue,
      hasUnit: ['em', 'rem', 'px'].includes(props.type)
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

  save() {
    this.props.updateExpression(this.state.value);
    this.switchMode();
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
            <button onClick={this.save.bind(this)}>OK</button>
          </div>
        </div>
      </div>
    }
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
        {this.renderEditor()}
      </li>
    );
  }
}

export default ConfigurationItem;
