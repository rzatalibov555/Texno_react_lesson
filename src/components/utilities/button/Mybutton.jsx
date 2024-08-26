import {Component} from "react"

class MyButton extends Component{

    render(){
      const {b_name, b_type, b_class, cssStyle, ...data} = this.props
      
      return(
        <button type={b_type} className={`btn btn-${b_class}`} style={cssStyle}>{b_name}</button>
      )
    }
  
  }

  export default MyButton;