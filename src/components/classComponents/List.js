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
            email:"",
            employess: [
                {
                    empid: 15,
                    name: "Anji",
                    city: "Hyderabad",
                    salary: 15
                },
                {
                    empid: 18,
                    name: "Pragna",
                    city: "Bangalore",
                    salary: 20
                },
                {
                    empid: 9,
                    name: "User 3",
                    city: "Chennai",
                    salary: 25
                },
                {
                    empid: 2,
                    name: "User 4",
                    city: "Hyderabad",
                    salary: 20
                }
            ],
            numbers:[
                1, 2, 4, 6, 80, 39, 524, 64, 58
            ],
            uniNUmbers:[
                1, 3, 5, 4, 3, 1, 20, 20, 25, 15
            ]
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

    handleSort(){
        var tmpData = [...this.state.employess];
        tmpData.sort( (emp, prevEmp) =>  prevEmp.empid - emp.empid )
        this.setState({
            employess: tmpData
        })
    }

    handleAscSort(){
        var tempData = [...this.state.numbers]
        tempData.sort( (number, prevNum) => number - prevNum  )
        this.setState({numbers: tempData})
    }

    handleDscSort(){
        var tempData = [...this.state.numbers]; // ... is spread operator
        tempData.sort( (number, prevNum) => prevNum - number  )
        this.setState({numbers: tempData})
    }

    removeDuplicates(){
        var tempData = [...this.state.uniNUmbers]
        var newData = []
        tempData.map( number => {
            if( newData.includes(number) == false ){
                newData.push(number)
            }
        })
        this.setState( {uniNUmbers: newData} )
    }


    updateSalaryForHyd(){
        var tempData = [...this.state.employess]
        tempData.map( emp => {
            if(emp.city == "Hyderabad"){
                emp.salary = emp.salary + 10
            }
            return emp;
        })
        this.setState({employess: tempData})
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
                <table>
                    <thead>
                        <tr>
                            <td onClick={ e => this.handleSort() }>
                                Emp id
                            </td>
                            <td>Name</td>
                            <td>City</td>
                            <td onClick={ e => this.updateSalaryForHyd() } >Salary</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employess.map( emp => (
                                <tr>
                                    <td>{emp.empid}</td>
                                    <td>{emp.name}</td>
                                    <td>{emp.city}</td>
                                    <td>{emp.salary}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <br/>
                <div>
                    <button className="btn btn-success" onClick={ e => this.handleAscSort() }> Asc order </button> &nbsp; &nbsp;
                    <button className="btn btn-danger" onClick={ e => this.handleDscSort() } >Dsc Order</button>
                    {
                        this.state.numbers.map( number => (
                            <div>
                                {number}
                            </div>
                        ))
                    }
                </div>
                <div>
                    <button className="btn btn-primary" onClick={ e => this.removeDuplicates() }>Remove duplicates</button>
                    <div>
                        {
                            this.state.uniNUmbers.map( num => (
                                <div>
                                    {num}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }



}

export default List;
