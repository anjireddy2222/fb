import React from 'react'

class Child extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            framework: "ReactJS"
        }

    }

    componentWillMount(){
        console.log("child 2 : did mount")
    }

    componentDidUpdate(){
        console.log("child 2 : did update")
    }

    shouldComponentUpdate(){
        return false;
    }

    render(){
        return(
            <div className="row child">
                i am child component
            </div>
        )
    }


}
export default Child;