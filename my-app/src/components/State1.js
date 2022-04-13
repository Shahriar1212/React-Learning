import React, {Component} from "react";

class State1 extends Component{


    constructor(props){
        super(props)

        this.state = {
            changedCalue : ""
        }
    }

    handleOnChange = (e) => {

        this.setState({
            changedValue : e.target.value
        }, () => {
            console.log(this.state.changedValue)
        })
    }

    render(){
        return(
            <div>
                <input type="test" onChange={this.handleOnChange}/>
                <p>{this.state.changedValue}</p>
            </div>
        )
    }
}

export default State1;