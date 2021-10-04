import React, { Component } from 'react'
import '../css/productsStyles.css'
import Button from './Button'

class ProductItem extends Component {
  render() {
    const { product, addToCart } = this.props
    //console.log(this.props)
    return (
      <article className="productCard">
        <div className="imgContainer">
          <img src={product.img} alt={product} />
        </div>

        <h3>{product.name}</h3>
        <p>$ {product.price}</p>
        <Button className="itemCardButton" onClick={() => addToCart(product)}>
          Add to basket
        </Button>
      </article>
    )
  }
}

export default ProductItem
