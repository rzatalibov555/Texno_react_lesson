import { Component } from "react"

import './WhoAmI.css'

class WhoAmI extends Component{

    render(){
     
      const {name, surname, age, ...data} = this.props
      console.log(data) 
      return(
          <div className="whoAmI">
            <h1>My name is {name} {surname}. I am {age} years old. </h1>
          </div>
      )
    }
  
  }

  export default WhoAmI;