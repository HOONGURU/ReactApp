import './App.css';
import MyLottery from './MyLottery';
import React, { Component } from 'react'
import Ball from './Ball';
import Lottery from './Lottery'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Lottery />
        <Lottery title="Mini Game" numBalls={4} maxNum={10}/>
      </div>
    );
  }
}

export default App;
