import React, { Component } from 'react';
import {v4 as uuidv4} from 'uuid';
import './NewTodoForm.css'

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { task: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }
    handleSubmit(evt) {
        evt.preventDefault();
        let newTodo = {...this.state, id:uuidv4(), completed: false};
        this.props.createTodo(newTodo);
        this.setState({task: ""});
    }
    render() {
        return (
            <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                <label htmlFor="task">New Todo</label>
                <input
                    type="text"
                    name="task"
                    placeholder="New Todo"
                    id="task"
                    value={this.state.task}
                    onChange={this.handleChange} />
                <button>Add Todo</button>
            </form>)
        
    }
}
export default NewTodoForm;





// import React, { Component } from 'react';
// import {v4 as uuidv4} from 'uuid';

// class NewTodoForm extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             todo: ""
//         }
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//     }

//     handleSubmit(evt){
//         evt.preventDefault();
//         let NewTodo = {...this.state, id:uuidv4(), fixmark:false};
//         this.props.addTodo(NewTodo);
//         this.setState({todo: ""});
//     }

//     handleChange(evt){
//         this.setState({[evt.target.name]: evt.target.value})
//     }
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <h2>New Todo</h2>
//                 <label htmlFor="addTodo"></label>
//                 <input placeholder="New Todo" name="todo" value={this.state.todo} onChange={this.handleChange} fixflag={this.fixmark} />
//                 <button>ADD TODO</button>
//             </form>
//         )
//     }
// }
// export default NewTodoForm;