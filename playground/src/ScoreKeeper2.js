import React, { Component } from 'react'

class MyScoreKeeper extends Component{
    constructor(props){
        super(props);
        this.state = {score: 0};
        this.singleKill = this.singleKill.bind(this);
        this.tripleKill = this.tripleKill.bind(this);
    }
    incrementScore(curState){
        return {score: curState.score+1};
    }
    singleKill(){
        this.setState(this.incrementScore);
    }
    tripleKill(){
        this.setState(this.incrementScore);
        this.setState(this.incrementScore);
        this.setState(this.incrementScore);
    }
    render(){
        return (
            <div>
                <h1>My Score is: {this.state.score}</h1>
                <button onClick={this.singleKill}>Single Kill!</button>
                <button onClick={this.tripleKill}>Triple Kill!</button>
            </div>
        ) 
    }
}

export default MyScoreKeeper;