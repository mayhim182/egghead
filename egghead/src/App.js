import React from "react";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      txt:'this is the state txt'
    }
  }

  update(e){
    this.setState({txt:e.target.value});
  }

  render(){
    return (
      <div>
        <Widget update={this.update.bind(this)} />
        <h1>{this.props.txt}</h1>
        <h2>{this.state.txt}</h2>
        <Button>React</Button>
      </div>
    );
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

export default App;