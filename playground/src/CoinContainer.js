import React, { Component } from 'react'
import { choice } from './helpers.js';
import Coin from './Coin'
class CoinContainer extends Component {
    static defaultProps = {
        coins: [
            { side: "heads", imgSrc:"https://tinyurl.com/react-coin-heads-jpg" },
            { side: "tails", imgSrc:"https://tinyurl.com/react-coin-tails-jpg" }
        ]
    }
    constructor(props) {
        super(props);
        this.state = {
            curCoin:null,
            nFlips:0,
            nHead:0,
            nTail:0
        }
        this.handleClick = this.handleClick.bind(this);
    }
    flipCoin() {
        const newCoin = choice(this.props.coins);
        this.setState(st => {
            return {
                curCoin: newCoin,
                nFlips: st.nFlips + 1,
                nHead: st.nHead + (newCoin.side === "heads" ? 1 : 0),
                nTail: st.nTail + (newCoin.side === "tails" ? 1 : 0)
            }
        })
    }
    handleClick(e){
        this.flipCoin();
    }
    render() {
        return (
            <div className="CoinContainer">
                <h2>Let's flip a Coin</h2>
                {this.state.curCoin &&<Coin info={this.state.curCoin}/>}
                <button onClick={this.handleClick}>Filp Me!</button>
                <p>Out of {this.state.nFlips} flips, there have been {this.state.nHead} heads and {this.state.nTail} tails</p>
            </div>
        )
    }
}

export default CoinContainer;