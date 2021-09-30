import React, { Component } from 'react'
import Logo from '../components/Logo'

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <Logo />
        <p>Cart</p>
      </nav>
    )
  }
}
