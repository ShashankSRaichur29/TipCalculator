import React,{Component} from "react";
import TipContainer from "./Component/TipContainer"
import "./App.css"

class App extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="container">
        <div className="title"> 
          <h1>Tip Calculator</h1>
          <TipContainer/>
        </div>
      </div>
    )
  }
}

  export default App