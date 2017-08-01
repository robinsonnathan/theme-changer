import React, { Component } from 'react';

export default class ColorChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowEdit: this.props.allowEdit
    };
  }

  componentWillReceiveProps(newProps){
    this.setState({
      allowEdit: newProps.allowEdit
    })
  }

  //Notes: wrapping updateColor() in an arrow function allows it to be called later instead of being immediately invoked

  render() {
    console.log("color changer allowEdit: ", this.state.allowEdit)
    return (
      <select className="dropDownContainer"
              onChange={ (e) => {this.props.updateColor(e.target.value)} }
              disabled={ this.state.allowEdit === "false" }>
        <option value="black"> Black </option>
        <option value="blue"> Blue </option>
        <option value="green"> Green </option>
      </select>
    )
  }
}
