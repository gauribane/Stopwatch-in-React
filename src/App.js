import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import  Stopwatch  from './components/Stopwatch';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Stopwatch />
      </div>
    );
  }
}

export default App;