import React, { Component } from "react";
import ShoppingList from "./ShoppingList";
import ShoppingList2 from './ShoppingList2';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <ShoppingList2 />
      </div>
    );
  }
}

export default App;
