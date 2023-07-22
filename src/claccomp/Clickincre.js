import React, { Component } from 'react'
import Rendering from '../Rendering'


class Clickincre extends Component {
  render() {
    return (
      <p>{this.props.name}</p>
    )
  }
}

export default Rendering(Clickincre)