import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: 'Frank'
        },
        {
          name: 'Dracula'
        },
        {
          name: 'Zombie'
        }
      ],
      string: 'Hello Aloha'
    };
  }

  clickHandler = () => {
    this.setState({string: 'Hello moto'})
  }

  render() {
    return (
      <div className='App'>
        { 
          this.state.monsters.map(monster => <p>{monster.name}</p>)
        }
        <div>
          <span>{this.state.string}</span>
          <button onClick={this.clickHandler}>Change State</button>
        </div>
      </div>
    );
  }
}

export default App; 