import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import List from './List';

class App extends Component {
 
  constructor(props){  // used to keep track of changes
    super(props)

    this.state = {
      groceries: ['eggs', 'milk', 'cheese'],
      chores: ['sweep', 'dishes', 'vacuum']
      }  
    }
    removeItem(listName, itemName){
      let targetList = this.state[listName];

      let index = targetList.indexOf(itemName);
      targetList.splice(index, 1);

      let newState= this.state;
      newState[listName] = targetList;

      this.setState(newState);
    }
  

  handleClick(){ // function to change the color on click
    this.setState({
      divStyle: {
        color: 'blue'
      }
    })

  }

  render(){

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>



        
        <List title="Groceries" list={this.state.groceries}/>
        <List title="Chores" list={this.state.chores}/>
      </div>
    );
  }
}

export default App;
