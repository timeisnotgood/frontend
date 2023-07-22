import React, { Component } from 'react'

const Rendering = Originalcomponent => {
   class Newcomponent extends Component {
    render() {
      return <Originalcomponent name={"bhoopahti"} />
    }
  }

  return Newcomponent

}

export default Rendering