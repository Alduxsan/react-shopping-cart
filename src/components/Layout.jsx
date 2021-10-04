import React, { Component } from 'react'
import '../css/App.css'

export default class Layout extends Component {
  render() {
    return (
      <div className={'layout'}>
        <div className={'layout-container'}>{this.props.children}</div>
      </div>
    )
  }
}
