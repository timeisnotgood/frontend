import React, { Component } from 'react'

export class Hoverinc extends Component {
    render() {
        const {count, incre} = this.props
        return (
            <p onMouseOver={incre} >{count}</p>
        )
      }
}

export default Hoverinc