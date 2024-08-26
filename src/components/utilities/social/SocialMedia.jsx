import { Component } from "react";
import MyButton from "../button/Mybutton";

import './SocialMedia.css'

class SocialMedia extends Component{
    render(){

        const {icon_name} = this.props

        return(
            <li>
                {/* <MyButton b_name="test" b_class="success" b_type="submit" /> */}
                <i class={`fa fa-${icon_name}`} aria-hidden="true"></i>
            </li>
        )
    }
}

export default SocialMedia;