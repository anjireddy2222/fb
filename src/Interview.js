import { useState } from "react"

function Interview(){

    // declare array
    var emptyArray = [] // empty array
    var numbers = [1, 2, 3, 4, 5, 6] 
    var students = [ "pragna", "anji", "dd", "bhavitya"]
    var mixedDataArray = [1, "anji"]

    // JSON object
    var jsonObject = {
        name: "anji",
        age: "30",
        location: "Hyd"
    }

    // Json array
    var studentsObj = [
        {
            name:"anji",
            age: 30,
            location: "Hyd",

        },
        {
            name:"dd",
            age: 25,
            location: "Bnglr"
        },
        {
            name:"bhavitya",
            age: 26,
            location: "Hyd"
        }

    ]

    // sorting json data
    studentsObj.sort( (item, prevItem) => item.name  ) // 
    
    var HydStudents = studentsObj.filter( item => item.location == "Hyd"  )
    var bangaloreStudents = studentsObj.filter(item => item.location == "Bnglr" )
    var belowtwnty27 = studentsObj.filter( item => item.age > 27 )

    var ages = [20, 19, 30, 10, 14, 16]
    ages.sort() // ascending order
    ages.reverse() // decending order

    var cities = ["hyderabad", "mumbai", "bangalore", "delhi"]
    cities.sort()
    cities.reverse()
    
    // spread operator
    var names = [ "anji", "dd", "pragna", "dd"]
    var newNames = [...names]
    newNames[1] = "Dedeepya"
    names[2] = "pragna m"
    // in arrays, if we assing any array to another variable, chnages in any one varible will reflect in another variable automatically.

    var [xnumbers, setXNumbers] = useState([1, 5, 7, 2, 10, 20, 13])
    var [xemployees, setXEmployees] = useState([
        {
            name: "Anji",
            id: 10,
            city: "Hyd"
        },
        {
            name: "Pragna",
            id: 3,
            city: "Hyd"
        },
        {
            name: "Dedeepya",
            id: 8,
            city: "Hyd"
        }
    ])

    var nums = [1, 2, 4, 1, 4, 2, 5, 7, 7]
    var uniqNums = []
    nums.map( item => {
        if( uniqNums.includes(item) == false){
            uniqNums.push(item)
        }
    })
    console.log(uniqNums)


    function sortNumbers(){
        var num = [...xnumbers];
        setXNumbers(num.sort( (number, prevNumber) => number - prevNumber ))    
    }

    function sortTable(){
        var tempEmp = [...xemployees]
        tempEmp.sort( (present, prev) => present.id - prev.id)
        setXEmployees(tempEmp)
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    Names: {
                        names.map( item => (
                            <p>{item}</p>
                        ))
                    }
                    <br/>
                    New Names: {
                        newNames.map( item => (
                            <p>{item}</p>
                        ))
                    }
                    <br/>
                    {
                        numbers[4]
                    }
                    <br/>
                    number of students: { students.length }
                    <br/>
                    3rd student name: { students[2] }
                    <br/>
                    {
                        students.map( item => (
                            <p>
                                {item}
                            </p>
                        ))
                    }
                    <br/>
                    Name: {jsonObject.name} <br/>
                    Age: {jsonObject.age} <br/>
                    location: {jsonObject.location}
                    <br/>
                    {
                        studentsObj.map( item =>(
                            <p>
                                Name: {item.name}, Age: {item.age}, City: {item.location}
                            </p>
                        ))
                    }
                    <br/>
                    {
                        HydStudents.map( item =>(
                            <p>
                                Name: {item.name}, Age: {item.age}, City: {item.location}
                            </p>
                        ))
                    }
                    <br/>
                    {
                        bangaloreStudents.map( item =>(
                            <p>
                                Name: {item.name}, Age: {item.age}, City: {item.location}
                            </p>
                        ))
                    }
                    <br/>
                    Age below 27:
                    {
                        belowtwnty27.map( item =>(
                            <p>
                                Name: {item.name}, Age: {item.age}, City: {item.location}
                            </p>
                        ))
                    }
                    <br/>
                    Ages sort:
                    {
                        ages.map( item =>(
                            <p>
                                {item}
                            </p>
                        ))
                    }
                     <br/>
                    Cities sort:
                    {
                        cities.map( item =>(
                            <p>
                                {item}
                            </p>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Interview;

