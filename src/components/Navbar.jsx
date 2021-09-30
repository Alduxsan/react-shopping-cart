import React, { Component } from 'react'
import Logo from '../components/Logo'
import Cart from './Cart'

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <Logo />
        <Cart />
      </nav>
    )
  }
}
