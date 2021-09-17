import React from 'react'

class InterviewTwo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            numbers: [1, 5, 7, 2, 10, 20, 13],
            employees: [
                {
                    name: "Anji",
                    id: 10,
                    city: "bangalore"
                },
                {
                    name: "Pragna",
                    id: 3,
                    city: "Hyd"
                },
                {
                    name: "Dedeepya",
                    id: 8,
                    city: "bangalore"
                }
            ],
            nums:[1, 2, 4, 1, 4, 2, 5, 7, 7]
        }
    }

    sortNumbers(){
        var num = [...this.state.numbers];
        this.setState({numbers: num.sort( (number, prevNumber) =>  number - prevNumber ) }) // ascending order sort
    }

    sortDescOrder(){
        var num = [...this.state.numbers]
        this.setState( {numbers: num.sort( (number, prevNumber) => prevNumber - number )} )
    }

    sortTable(){
        var tempEmp = [...this.state.employees];
        tempEmp.sort( (present, prev) => present.id - prev.id )
        this.setState({employees: tempEmp})
    }

    filterTable(){
        var tempEmp = [...this.state.employees]
        var filteredEMp = tempEmp.filter( item => item.city == "Hyd" )
        this.setState({employees: filteredEMp})
    }

    removeDuplicates(){
        var tempNums = [...this.state.nums]
        var finalNums = []
        tempNums.map( item =>{
            if( finalNums.includes(item) == false){
                finalNums.push(item)
            }
        })
        this.setState({nums: finalNums})
    }

    render(){
        return(
            <div className="p-3">
                {
                    this.state.numbers.map( item => (
                        <div>{item}</div>
                    ))
                }
                <button onClick={e => this.sortNumbers()} className="btn btn-primary">Sort Numbers</button> &nbsp; &nbsp;
                <button onClick={e => this.sortDescOrder()} className="btn btn-primary">Sort Numbers - Desc</button>
                <br/><br/>
                <button className="btn btn-danger" onClick={ e=> this.filterTable() } >Filter Hyd employees</button>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <td>
                                    <div onClick={ e => this.sortTable() } className="pointer">
                                        Id
                                    </div>
                                </td>
                                <td>Name</td>
                                <td>City</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map( item => (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.city}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <br/>
                <button onClick={ e=> this.removeDuplicates() } className="btn btn-success">Remove duplicates</button>
                {
                    this.state.nums.map( item => (
                        <div>
                            {item}
                        </div>
                    ))
                }
            </div>
        )
    }

}

export default InterviewTwo;