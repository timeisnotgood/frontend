import React, { Component } from 'react'

export class Clickincre extends Component {

  render(){
    const {count, incre} = this.props
    return(
      <button onClick={incre} >{count}</button>
    )
  }
}

export default Clickincre