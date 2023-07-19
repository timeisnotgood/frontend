import React, { Component } from 'react'

export class Clickincre extends Component {
  render() {
    const {count, increment} = this.props
    return (
      <button onClick={increment} >{count}</button>
    )
  }
}

export default Clickincre