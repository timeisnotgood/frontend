import React, { Component } from 'react'

export class Rendering extends Component {

  constructor(){
    super()

    this.state = ({
      count : 0
    })
  }

  increment = () =>{
    this.setState(prev => {
      return {count : prev.count + 1}
    })
  }

  render() {
    return (
      <div>
        {this.props.render(this.state.count, this.increment)}
      </div>
    )
  }
}

export default Rendering