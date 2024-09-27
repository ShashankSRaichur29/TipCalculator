import React,{Component} from "react";

class Button extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <button className={this.props.class} onClick={()=> this.props.clickHandler(this.props.title)}>{this.props.title} </button>
        )
    }
}


export default Button