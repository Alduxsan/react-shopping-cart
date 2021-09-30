import React, { Component } from 'react'
import '../css/App.css'
import BubbleAlert from './BubbleAlert'

export default class Cart extends Component {
  render() {
    return (
      <div>
        <span className="bubble">
          <BubbleAlert value={11} />
        </span>
        <button className="cart">Cart</button>
      </div>
    )
  }
}
