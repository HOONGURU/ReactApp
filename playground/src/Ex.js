import React, { Component } from 'react'

class Ex extends Component {
    static defaultProps = {
        options: [
            "angry",
            "anchor",
            "archive",
            "at",
            "archway",
            "baby",
            "bell",
            "bolt",
            "bone",
            "car",
            "city",
            "cloud",
            "couch"
        ]
    }
    constructor(props) {
        super(props);
        this.state = {
            icons: ["baby", "car"]
        };
        this.addIcons = this.addIcons.bind(this);
    }
    addIcons() {
        const idx = Math.floor(Math.random() * this.props.options.length);
        const newIcon = this.props.options[idx];
        this.setState({ icons: [...this.state.icons, newIcon] });
    }
    render() {
        const Icons = this.state.icons.map(i => <i class={`fas fa-${i}`} />)
        return (
            <div>
                <h1>My Icons: {Icons}</h1>
                <button onClick={this.addIcons}>Add Icons!</button>
            </div>
        )
    }
}

export default Ex;