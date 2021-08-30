import React from 'react'
import Nav from '../../Nav'
import Child from './Child'

class List extends React.Component{
    
    constructor(props) {
        
        super(props)
        this.state = {
            name: "",
            latitude: 0,
            longitude: 0,
            email:""
        }
    }

    handleNameChange(){
           this.setState({name: "Pragna"})
           //this.setState({latitude: 10})
           //this.setState({name: "", latitude: 10})
    }

    updateEmail(e){
        this.setState({email: e.target.value})
    }

    componentDidMount(){
        this.setState({name: "Anji2"})
        console.log("before displaying the web page")
    }

    componentDidUpdate(){
        console.log("while updating state")
    }

    componentWillUnmount(){
        console.log("Page will be removed from the screen")
    }




    render(){
        return(
            <div className="conatiner">
                <Nav />
                <br/>
                {this.state.name} <br/>
                <input type="text" placeholder="User email" className="form-control" onChange={ e => this.updateEmail(e)} />
                <br/>
                {this.state.email}
                <br/>
                <Child />
                <br/>
                <button className="btn btn-primary" onClick={e => this.handleNameChange() }>Change user name</button>

            </div>
        )
    }



}

export default List;
