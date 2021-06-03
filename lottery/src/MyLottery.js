import React, { Component } from 'react'

class MyLottery extends Component {
    static defaultProps = {
        title: "Lotto",
        numBall: 6,
        maxNum: 40
    }

    constructor(props) {
        super(props);
        this.state = {
            basket: [],
            l_basket: []
        };
        for (let i = 1; i <= this.props.maxNum; i++) {
            this.state.basket.push(i);
        }
        this.makeBasket = this.makeBasket.bind(this);
    }
    pickBall(curState) {
        const rndIdx = Math.floor(Math.random() * curState.basket.length + 1) ;
        const rndNum = curState.basket[rndIdx];
        return { basket: curState.basket.filter(i => i !== rndNum), l_basket: [...curState.l_basket, rndNum]};
    }
    makeBasket() {
        for(let i=0;i<this.props.numBall;i++){
        this.setState(this.pickBall);
    }
    }
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <button onClick={this.makeBasket}>generate</button>
            </div>
        )
    }
}

export default MyLottery;