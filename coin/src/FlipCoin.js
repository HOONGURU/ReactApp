import React, { Component } from 'react'
import Coin from './MyCoin';
import './Coin.css'

class FlipCoin extends Component{
    static defaultProps = {
        side: ["https://tinyurl.com/react-coin-heads-jpg", "https://tinyurl.com/react-coin-tails-jpg"]
    }
    constructor(props){
        super(props);
        this.state = {recentPhase:0,heads:0, tails:0, startFlip:false};
        this.flip = this.flip.bind(this);
    }
    flip(){
        this.setState({startFlip: true});
        const rndPhase = Math.floor(Math.random()*2);
        rndPhase%2===0 ? this.setState({recentPhase: rndPhase, heads: this.state.heads+1}) : this.setState({recentPhase: rndPhase, tails: this.state.tails+1})

    }
    render() {
        return (
            <div className="FlipCoin">
                <h1>Let's flip a coin!</h1>
                {this.state.startFlip ? <Coin cPhase={this.state.recentPhase}/> : null}
                <button onClick={this.flip}>Flip Me!</button>
                <div>Out of {this.state.heads+this.state.tails} flips, there have been {this.state.tails} heads and {this.state.heads} tails</div>
            </div>
        )
    }
}

export default FlipCoin;