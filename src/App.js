import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      string: 'Hello bunghole'
    };
  }

  clickHandler = () => {
    this.setState({string: 'Hello moto'})
  }

  render() {
    return (
      <div>
        <h1>{this.state.string}</h1>
        <button onClick={this.clickHandler}>Change Text</button>
      </div>
    );
  }
}

export default App; 