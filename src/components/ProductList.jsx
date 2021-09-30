import React, { Component } from 'react'
import ProductItem from './ProductItem'
import '../css/productsStyles.css'

export class ProductList extends Component {
  render() {
    const { products, addToCart } = this.props
    return (
      <section className="productsList">
        {products.map((product) => (
          <ProductItem
            addToCart={addToCart}
            key={product.name}
            product={product}
          />
        ))}
      </section>
    )
  }
}

export default ProductList
