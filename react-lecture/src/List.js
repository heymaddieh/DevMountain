import React, { Component } from 'react';


class List extends Component {
 
  render(){
    var list = [];

    for(let i=0; i< this.props.list.length; i++){
      list.push(
        <li> {this.props.list[i]}</li>
      )
    }
    return (
      <div>
        <h1>{this.props.title}</h1>
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}

export default List;