import React, { Component } from 'react'
import Box from './Box';
import NewBoxForm from './NewBoxForm';

class BoxList extends Component {
    constructor(props){
        super(props);
        this.state ={
            boxes:[]
        }
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
    }
    add(newBox){
        this.setState({boxes: [...this.state.boxes, newBox]});
    }
    remove(id){
        this.setState({boxes: this.state.boxes.filter(box => box.id !== id)});
    }
    render() {
        let boxes = this.state.boxes.map(box => (
        <Box 
            id={box.id} 
            key={box.id}
            width={box.width} 
            height={box.height} 
            color={box.color}
            removeBox={() => this.remove(box.id)}
            />))
        return (
            <div>
                {boxes}
                <NewBoxForm addBox={this.add}/>
            </div>
        )
    }
}
export default BoxList;