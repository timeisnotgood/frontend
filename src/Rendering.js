import { Component } from "react";
import Clickincre from "./claccomp/Clickincre";
import Hoverinc from "./claccomp/Hoverinc";

export class Rendering extends Component{
  constructor(){
    super()
    this.state = ({
      count : 0
    })
  }

  incre = () =>{
    this.setState(prev => {
      return {count : prev.count + 1}
    })
  }

  render(){
    return(
      <div>
        {this.props.func(this.state.count, this.incre)}
      </div>
    )
  }
}

