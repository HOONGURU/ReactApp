import './App.css';
import { Component } from 'react';
import Coin from './MyCoin';
import FlipCoin from './FlipCoin';
import CoinContainer from './CoinContainer'

class App extends Component {
  render() {
    return (
      <div>
        <CoinContainer />
      </div>
    )
  }
}

export default App;
