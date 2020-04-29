import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Echo from './Echo';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <Echo />
      </div>
    );
  }
}

export default App;
