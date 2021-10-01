import React, { Component } from 'react'
import '../css/App.css'
import BubbleAlert from './BubbleAlert'
import CartDetails from './CartDetails'

export default class Cart extends Component {
  render() {
    const { cart, showCart, showCartList } = this.props
    const amount = cart.reduce((acc, el) => acc + el.amount, 0)
    return (
      <div>
        <span className="bubble">
          {amount !== 0 ? <BubbleAlert value={amount} /> : null}
        </span>
        <button className="cart" onClick={showCartList}>
          Cart
        </button>
        {showCart ? <CartDetails cart={cart} /> : null}
      </div>
    )
  }
}
