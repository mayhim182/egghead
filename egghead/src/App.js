import React from "react";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      txt:'this is the state txt',
      currentEvent:'---' //This one is for synthetic event system
    }
    this.update = this.update.bind(this)
  }

  update(e){
    this.setState({txt:e.target.value,currentEvent:e.type});
  }

  render(){
    return (
      <div>
        <Widget update={this.update.bind(this)} />
        <h1>{this.props.txt}</h1>
        <h2>{this.state.txt}</h2>
        <Button>I <Heart /> React</Button>
        <Title text="GRAND Gesture"/>
        <textarea
          onKeyPress={this.update}
          onCopy={this.update}
          onPaste={this.update}
           cols="30" rows="10" />
          <h1>{this.state.currentEvent}</h1>
      </div>
    );
  }
}

class Heart extends React.Component{
  render(){
    return <span>&hearts;</span>
  }
}

// App.propTypes = {
//   txt:React.propTypes.string,
//   cat:React.propTypes.number
// }

// App.defaultProps = {
//   txt:"this is the default text"
// }

const Widget = (props) =>{
  return <input type="text" onChange={props.update.bind(this)}></input>
}

const Button = (props) =>{
  return <button>{props.children}</button>
}

const Title = (props) => <h1>Title:{props.text}</h1>

Title.propTypes = {
  text(props, propName, component){
    if(!(propName in props)){
      return new Error(`missing ${propName}`)
    }
    if(props[propName].length < 6){
      return new Error(`${propName} is too short`)
    }
  }
}

//Normalise events with reacts synthetic event system


export default App;