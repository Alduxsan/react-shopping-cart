import React, { Component } from 'react'
import '../css/App.css'

export default class CartDetails extends Component {
  render() {
    const { cart } = this.props
    console.log({ cart })
    return (
      <div className="cartDetails">
        <ul className="cart-ul">
          {cart.map((item) => (
            <li className="cart-li" key={item.name}>
              <img src={item.img} alt={item.name} className="cartItem-image" />
              {item.name} <span>{item.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
