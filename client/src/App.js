import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hello World</h1>
        </header>
        <p className="App-intro"></p>
      </div>
    );
  }
}

export default App;
