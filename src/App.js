import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  constructor(){
    super();

    this.state = {
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'monospace',
      allowEdit: 'true'
    }

    //Explicitly set context for Methods
  this.updateColor = this.updateColor.bind(this);
  this.updateSize = this.updateSize.bind(this);
  this.updateFamily = this.updateFamily.bind(this);
  this.updateEditStatus = this.updateEditStatus.bind(this);
  }

//QUESTION: Why can we staticly set fontColor here but have to make a copy when updating an array or object

// updateColor
  updateColor(newColor){
    this.setState({
      fontColor: newColor
    })
  }

  // updateSize
  updateSize(newSize){
    this.setState({
      fontSize: newSize
    })
  }

  // updateFamily
  updateFamily(newFont){
    this.setState({
      fontFamily: newFont
    })
  }

  // updateEditStatus
  updateEditStatus(editStatus){
    console.log("Pre State Change editStatus Value: ", editStatus)
    this.setState({
      allowEdit: editStatus
    })
    console.log("Post State Change editStatus Value: ", this.state.allowEdit)
  }


  render() {
    console.log("main app allowEdit: ", this.state.allowEdit)
    return (
      <div>
        <div className="headerBar">
          <EditToggle updateEditStatus={this.updateEditStatus}/>
          <ColorChanger updateColor={this.updateColor} allowEdit={this.state.allowEdit}/>
          <SizeChanger updateSize={this.updateSize} allowEdit={this.state.allowEdit}/>
          <FamilyChanger updateFamily={this.updateFamily} allowEdit={this.state.allowEdit}/>
        </div>

        <div className="textArea">
          <TextContainer fontFamily={this.state.fontFamily}
                         fontColor={this.state.fontColor}
                         fontSize={this.state.fontSize}
                         allowEdit={this.state.allowEdit}/>
        </div>
      </div>
    )
  }
}

export default App;
