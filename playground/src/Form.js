import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { username: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        console.log(evt);
        this.setState({ username: evt.target.value });
    }
    handleSubmit(evt) {
        evt.preventDefault();
        alert(`You typed: ${this.state.username}`);
        this.setState({ username: "" });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Form Demo</h1>
                    <label htmlFor="">Username</label>
                    <input type="text" id="username" value={this.state.username} onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;