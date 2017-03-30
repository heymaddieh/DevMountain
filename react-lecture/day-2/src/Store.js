import React, { Component } from 'react';
import {getProducts} from './services/products';
import { Link } from 'react-router';

class Store extends Component {
  constructor(props){
    super(props)

    this.state={
      products: []
    }
  }

  componentDidMount(){
    getProducts().then(products => {
      this.setState({
        products: products
      })
    })
  }

  componentWillMount(){
    console.log('component about to mount')
  }
  componenetWillUpdate(){
    console.log('component about to update')
  }

  componentDidUpdate(){
    console.log('Componenet is updated!')
  }
  render(){
    const products = this.state.products.map((product, i) => {
      return <div key={i}><Link to={'/product/' + product.id}></Link>{product.title}</div>
    })
    return (
      <div>
        <h1>This is the store!</h1>
        {products[0] ? products : 'Loading...'}
      </div>
    )
  }
}

export default Store