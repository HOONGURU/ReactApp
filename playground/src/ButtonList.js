import React, { Component } from 'react';



class ButtonList extends Component {
    static defaultProps = {
        colors: ["red", "orange", "yellow", "purple"]
    }
    constructor(props) {
        super(props);
        this.state = { color: "cyan" };
    }
    changeColor(newColor) {
        this.setState({ color: newColor });
    }
    render() {
        return (
            <div className='ButtonList' style={{ backgroundColor: this.state.color }}>
                {this.props.colors.map(c => {
                    const colorObj = { backgroundColor: c };
                    return <button onClick={() => {this.changeColor(c)}} style={colorObj}>Click on Me!</button>;
                })}
            </div>
        )
    }
}

export default ButtonList;