import React from "react";

class ClassComp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: "anji",
            age: 30,
            numbers: [1, 6, 0, 10, 5],
            students:[
                {
                    name: "anji",
                    age: 30
                },
                {
                    name: "dd",
                    age: 28
                },
                {
                    name: "bhavi",
                    age: 36
                }
            ]
        }
    }

    handleUpdate(){
        this.setState({
            name: "Anji Reddy"
        })
    }

    componentDidMount(){
        this.setState({
            age: 31
        })
    }

    componentDidUpdate(){
        // alert("updating")
    }

    componentWillUnmount(){
        this.setState({
            age: 30,
            name: "anji"
        })
    }

    sortNumbers(){
        var num = [...this.state.numbers]
        console.log('num ', num)
        this.setState({
            numbers: num.sort((a,b) => b - a )
        })
    }

    render(){
        return(
            <>
                name is: {this.state.name} <br/>
                age is: {this.state.age} <br/>
                <button onClick={ e => this.handleUpdate() }>
                    Update
                </button>
                <br/>
                <button onClick={e=> this.sortNumbers() }>Sort numbers</button>
                {
                    this.state.numbers.map( i => (
                        <div>{i}</div>
                    ))
                }
            </>
        )
    }
}

export default ClassComp;