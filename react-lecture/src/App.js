import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import MyFirstComponent from './MyFirstComponent'
import List from './List'



//***********************
class App extends Component {
 constructor(props) {
   super(props)

   this.state = {
     divStyle: {
       color: 'red'
     },
     groceries: ['eggs', 'milk', 'cheese'],
     chores: ['sweep', 'dishes', 'vacuum']
   }
   this.removeItem = this.removeItem.bind(this);
   this.handleClick = this.handleClick.bind(this);

 }

 removeItem(listName, itemName) {
   let targetList = this.state[listName];

   let index = targetList.indexOf(itemName); //remove item from array
   targetList.splice(index, 1);

   let newState = this.state;
   newState[listName] = targetList;

   this.setState(newState);
 }

 handleClick(){
   this.setState({
     divStyle: {
       color: 'blue'
     }
   })
 }

 render() {

   return (
       <div className="App">
         <div className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
           <h2>Welcome to React</h2>
         </div>
         {/*<MyFirstComponent name="Chase"/>*/}
         <List list={['Chase','Jake','Maddie']} title="I am sitting next to"/>

         <List listName='chores'
         whenClicked={this.removeItem}
         title="Chores"
         list={this.state.chores} />

         <List listName='groceries'
         whenClicked={this.removeItem}
         title="Groceries"
         list={this.state.groceries} />
       
       <div onClick={this.handleClick} style={this.state.divStyle}>
         Click Me!
       </div>
       </div>
   );
 }
}
// ******^^^JSX^^^*********

export default App;