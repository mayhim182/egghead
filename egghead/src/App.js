import React from "react";

class App extends React.Component{
  render(){
    return (
      <div>
         <h1>{this.props.txt}</h1>
          <b>Google</b>
      </div>
    );
  }
}

App.propTypes = {
  txt:React.propTypes.string,
  cat:React.propTypes.number
}

export default App;