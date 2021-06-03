import React, { Component } from 'react'
import './Coin.css'

class MyCoin extends Component{
    static defaultProps = {
        side: ["https://tinyurl.com/react-coin-heads-jpg", "https://tinyurl.com/react-coin-tails-jpg"]
    }
    
    render() {
        return (
            <div className="MyCoin">
                <img src={this.props.side[this.props.cPhase]}/>
            </div>
        )
    }
}

export default MyCoin;