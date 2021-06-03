import React, { Component } from 'react';

class ScoreKeeper extends Component {
    constructor(props) {
        super(props);
        this.state = { score: 0 };
        this.singleKill = this.singleKill.bind(this);
        this.tripleKill = this.tripleKill.bind(this);

    }

    singleKill() {
        this.setState({ score: this.state.score + 1 });
        // state값을 직접 이렇게 수정하는 것은 좋지 않다. 예를들어 아래처럼 Triple Kill이라는 버튼이 있어도 3번이 아닌 한번만 작용
    }

    incrementScore(curState) {
        return { score: curState.score + 1 };
    }
    tripleKill(){
        this.setState(this.incrementScore);
        this.setState(this.incrementScore);
        this.setState(this.incrementScore);
    }
    render() {
        return (
            <div>
                <h1>Socre is: {this.state.score}</h1>
                <button onClick={this.singleKill}>Single Kill!</button>
                <button onClick={this.tripleKill}>Triple Kill!</button>
            </div>
        );
    }
}

export default ScoreKeeper;