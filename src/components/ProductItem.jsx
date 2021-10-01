import React, { Component } from 'react'
import '../css/productsStyles.css'
import Button from './Button'

class ProductItem extends Component {
  render() {
    const { product, addToCart } = this.props
    //console.log(this.props)
    return (
      <article className="productCard">
        <img src={product.img} alt={product} />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <Button onClick={() => addToCart(product)}>Add to cart</Button>
      </article>
    )
  }
}

export default ProductItem
