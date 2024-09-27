import React,{Component} from "react";
import Button from "./Button";

class TipContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            amount: 0,
            tip: 0,
            view: true,
            person: 0,
            pTip: 0,
            total: 0,
            final: 0

        }

        //this.method = this.method.bind(this)
        this.readTip = this.readTip.bind(this)
        this.readBill = this.readBill.bind(this)
        this.readPerson = this.readPerson.bind(this)
        this.calculate = this.calculate.bind(this)

    }

    readBill(val){
        this.setState({
            amount: val
        })
    }

    readTip(val){
        if(val==="custom"){
            this.setState({
                view : false
            })
        }else{
            this.setState({
                tip:val
            })
        }
        
    }

    readPerson(val){
        this.setState({
            person: val
        })
    }

    calculate(){
        let tipTotal = Number(this.state.amount) * Number(this.state.tip / 100)
        let perTip = tipTotal/Number(this.state.person)
        let finalBill = Number(this.state.amount) + tipTotal
        this.setState({
            total : tipTotal,
            pTip : perTip,
            final : finalBill
        })
    }


    render(){
        return(
            <div className="tip-container">
                <div className="left">
                    <div className="bill">
                        <label htmlFor="amount">Bill Amount (&#8377;)</label>
                        <input type="number" name="amount" id="amount" value={this.state.amount} onChange={(e) => this.readBill(e.target.value)} placeholder="bill amount" required />
                    </div>
                    <div>
                        <p>Tip Percentage(%)</p>
                    </div>
                    <div className="tip">
                        {
                            this.state.view ?(
                                <>
                                <Button title="5"  class="primary" clickHandler={this.readTip}></Button>
                                <Button title="10" class="primary" clickHandler={this.readTip}></Button>
                                <Button title="15" class="primary" clickHandler={this.readTip}></Button>
                                <Button title="20" class="primary" clickHandler={this.readTip}></Button>
                                <Button title="25" class="primary" clickHandler={this.readTip}></Button>
                                <Button title="custom" class="secondary" clickHandler={this.readTip}></Button></>
                            ):null
                        }
                        
                        
                    </div>
                    {
                        this.state.view ? null : (
                            <div className="custom">
                                <label htmlFor="tip">Tip Percentage</label>
                                <input type="number" name="tip" value={this.state.tip}
                                onChange={(e)=> this.readTip(e.target.value)} id="tip" placeholder="tip percentage" required/>
                            </div>
                        )
                    }
                    
                    <div className="persons">
                        <label htmlFor="person">Persons</label>
                        <input type="number" name="person" value={this.state.person}
                                onChange={(e)=> this.readPerson(e.target.value)}  id="person" placeholder="No. of persons" />
                    </div>
                </div>
                <div className="right">
                    <div className="amount-block">
                    <div className="tip-amount">
                            <span className="tip-title">Tip-Percent</span>
                            <span className="price">{this.state.tip}%</span>
                        </div>
                        <div className="tip-amount">
                            <span className="tip-title">Tip-Amount(/person)</span>
                            <span className="price"> &#8377;{this.state.pTip}</span>
                        </div>
                        <div className="tip-amount">
                            <span className="tip-title">Total-Tip</span>
                            <span className="price"> &#8377;{this.state.total}</span>
                        </div>
                        <div className="tip-amount">
                            <span className="tip-title">Final-Bills</span>
                            <span className="price"> &#8377;{this.state.final}</span>
                        </div>
                    </div>
                    
                    <button className="primary" onClick={() => this.calculate()}>Calculate</button>
                    <button className="danger">Reset</button>
                </div>
            </div>
        )
    }
}


export default TipContainer