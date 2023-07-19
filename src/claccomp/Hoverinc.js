import React, { Component } from 'react'

export class Hoverinc extends Component {
    render() {
        const {count, increment} = this.props
        return (
            <button onMouseOver={increment} >{count}</button>
        )
      }
}

export default Hoverinc