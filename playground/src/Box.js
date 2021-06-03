import React, { Component } from 'react';
import './Box.css'
import { choice } from './helper'

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: choice(this.props.colors)
        }
        this.handleClick = this.handleClick.bind(this);
    }

    pickColor() {
        let newColor;
        do {
            newColor = choice(this.props.colors);
        } while(this.state.color===newColor)
        this.setState({ color: newColor });
    }

    handleClick() {
        this.pickColor();
    }
    render() {
        return (
            <div
                className="Box"
                style={{ backgroundColor: this.state.color }}
                onClick={this.handleClick} />
        )
    }
}

export default Box;