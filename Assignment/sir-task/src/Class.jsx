// import React from "react"

// export default  class Chancgenu extends React.Component {

//     state = {count:0};

//     handelclick = ()=>
//     {
//         this.setState(
//             {count:11}
//         )
//     }


//     render() {

//         return( 
//             <>
//             <button onClick={this.handelclick}>Change</button>
//             <h1>{this.state.count}</h1>
//             </>
//         )
//     }

// }

import React, { Component } from 'react'

export default class Milan extends Component {

    state = {Text:0}

    Handelclick = () => {
        this.setState({ Text: this.state.Text - 1});
    }

  render() {
    return (
      <div>
        <button onClick={()=> {this.setState({Text:this.state.Text+1})}}>+</button>
        <h1>{this.state.Text}</h1>
        <button onClick={this.Handelclick}>-</button>
      </div>                            
    )
  }
}
