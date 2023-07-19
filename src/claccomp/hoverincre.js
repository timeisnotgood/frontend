import React, { Component } from 'react'

export class hoverincre extends Component {
  render() {
    const {count, increment} = this.props
    return (
        <button onMouseOver={increment} >{count}</button>
    )
  }
}

export default hoverincre