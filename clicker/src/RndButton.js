import React, { Component } from 'react'

class RndButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 1,
            clicked: false
        };
        this.getNewNum = this.getNewNum.bind(this);
    }
    getNewNum(e) {
        let rndNumber;
        rndNumber = Math.floor(Math.random() * 10 + 1);
        this.setState({ num: rndNumber });
    }

    render() {
        return (
            <div>
                <h1>Number is {this.state.num}</h1>
                <button onClick={this.getNewNum}>My Button</button>
            </div>
        )
    }
}
export default RndButton;