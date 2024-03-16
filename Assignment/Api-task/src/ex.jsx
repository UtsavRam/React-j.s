import { render } from "@testing-library/react";
import React from "react";

export default class Htask extends React.Component {


    state = {valueString: "Hii", value:22 , valuebollen: true , valuearry: [1,2,3,5], valuerept: 0}
  
  render() {
    return (
      <>
       <button onClick={()=> this.setState({value:this.state.value  +1})}>Change Number Value</button>
       <h1>{this.state.value}</h1>

       <button onClick={()=> this.setState({valueString:this.state.valueString="Heloo MY Name Is Utsav "})}>Change String</button>
       <h2>{this.state.valueString}</h2>

       <button onClick={() => this.setState({ valuebollen: !this.state.valuebollen })}>
          Change Boolean
        </button>
        <p>{this.state.valuebollen.toString()}</p>

        <button onClick={()=> this.setState({valuearry:this.state.valuearry[3]})}>Change The Arry</button>
        <p>{this.state.valuearry}</p>

        <button onClick={()=> this.setState({valuerept:this.state.valuerept +1})}>+</button>
       
        <p>{this.state.valuerept}</p>

        <button onClick={()=> this.setState({valuerept:this.state.valuerept -1})}>-</button>
      </>
    );
  }
}
