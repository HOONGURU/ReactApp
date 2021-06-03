import React, { Component } from 'react'
import Box from './Box';
import './BoxContainer.css'

class BoxContainer extends Component{
    static defaultProps = {
        numBox: 18,
        colors: ['red', 'blue', 'green', 'purple', 'yellow', 'orange']
    }
    render(){
        const boxes = Array.from({length:this.props.numBox}).map(
            () => <Box colors={this.props.colors}/>
        )
        return(
            <div class="BoxContainer">
                {boxes}
            </div>
        )
    }
}

export default BoxContainer;