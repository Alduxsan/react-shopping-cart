import React, { Component } from 'react'
import Logo from '../components/Logo'
import Cart from './Cart'

export default class Navbar extends Component {
  render() {
    const { cart, showCart, showCartList } = this.props
    return (
      <nav>
        <Logo />
        <Cart cart={cart} showCart={showCart} showCartList={showCartList} />
      </nav>
    )
  }
}
