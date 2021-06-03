import React, { Component } from 'react'

class NumberItem extends Component {
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(){
        this.props.remove(this.props.value);
    }
    render() {
        return (
            <li>
                {this.props.value}
                <button onClick={this.handleClick}>x</button>
            </li>
        )
    }
}

export default NumberItem;