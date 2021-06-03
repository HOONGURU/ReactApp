import React, { Component } from 'react'
import ShoppingListForm2 from './ShoppingListForm2';

class ShoppingList2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { name: 'Milk', qty: '2 Liter' },
                { name: 'Egg', qty: '1 Dozen' }
            ]
        };
        this.renderItems = this.renderItems.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    addItem(item) {
        this.setState(st => ({
            items: [...st.items, item]
        }))
    }

    renderItems() {
        return (
            <ul>
                {this.state.items.map(item => (
                    <li>{item.name}:{item.qty}</li>
                ))}
            </ul>
        )
    }

    render() {
        return (
            <div>
                <h1>Shopping List</h1>
                {this.renderItems()}
                <ShoppingListForm2 addItem={this.addItem} />
            </div>
        )
    }
}

export default ShoppingList2;