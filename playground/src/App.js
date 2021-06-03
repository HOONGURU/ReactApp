import React, { Component } from 'react';
import Game from './Game';
import './App.css';
import Rando from './Rando';
import Button from './Button';
import BrokenClick from './BrokenClick';
import RollDice from './RollDice';
import ScoreKeeper from './ScoreKeeper';
import IconList from './IconList';
import Ex from './Ex';
import CoinContainer from './CoinContainer';
import BoxContainer from './BoxContainer'
import ButtonList from './ButtonList';
import NumberList from './NumberList';
import Form from './Form';

class App extends Component {
  render(){
    return(
      <div className="App">
        <Form />
      </div>
    );
  }
}
export default App;
