import React, { Component } from 'react';

class ProductDetails extends Component {
  constructor(props){
    super(props);

    this.state = {
      product: {title: 'a red bull'}
    }
  }

  componentDidMount(){
    getOneProduct(this.props.params.id)
    .then(product => {
      this.setState({product:product})
    })
  }

  render(){
    const { product } = this.state;

    return(
      <div>
        <h1>{product.title}</h1>
      </div>
    )
  }
}

export default ProductDetails