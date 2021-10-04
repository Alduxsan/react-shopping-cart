import React, { Component } from 'react'
import '../css/App.css'
import BubbleAlert from './BubbleAlert'
import CartDetails from './CartDetails'

export default class Cart extends Component {
  render() {
    const { cart, showCart, showCartList, removeFromCart } = this.props
    const amount = cart.reduce((acc, el) => acc + el.amount, 0)
    return (
      <div>
        <span className="bubble">
          {amount !== 0 ? <BubbleAlert value={amount} /> : null}
        </span>
        <button className="cart" onClick={showCartList}>
          <img className="cartImg" src="/productos/basket.svg" alt="" />
        </button>
        {showCart ? (
          <CartDetails cart={cart} removeFromCart={removeFromCart} />
        ) : null}
      </div>
    )
  }
}
