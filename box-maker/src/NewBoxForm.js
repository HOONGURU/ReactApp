import React, { Component } from 'react'
import {v4 as uuidv4} from 'uuid';

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: "",
            height: "",
            color: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }
    handleSubmit(evt){
        evt.preventDefault();
        let newBox = {...this.state, id:uuidv4()}
        this.props.addBox(newBox);
        this.setState({width: "", height: "", color: ""});
    }
    

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="width">Width</label>
                    <input name="width" value={this.state.width} onChange={this.handleChange} />
                </div>
                <div>
                    <label htmlFor="height">Height</label>
                    <input name="height" value={this.state.height} onChange={this.handleChange} />
                </div>
                <div>
                    <label htmlFor="color">Color</label>
                    <input name="color" value={this.state.color} onChange={this.handleChange} />
                </div>
                <button>Submit</button>
            </form>
        )
    }
}
export default NewBoxForm;