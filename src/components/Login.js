import Nav from '../Nav'
import { useState } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import cookie from 'react-cookies'

function Login(){
    // variables
    var router = useHistory()
    var [email, setEmail] = useState("")
    var [password, setPassword] = useState("")
    var [msg, setMsg] = useState("")

    const updateEmail = (e) =>{
        console.log(document.getElementById("container"))
        setEmail(e.target.value)
    }

    const updatePassword = (e) =>{
        setPassword(e.target.value)
    }

    const handleLogin = async () =>{


        var noOfErrors = 0;
        if( email == ""){
            noOfErrors = noOfErrors + 1;
            setMsg("Email is Empty")
        }

        if( password == ""){
            noOfErrors = noOfErrors + 1
            setMsg("Password is empty")
        }

        if( noOfErrors == 0){
            try{
                var form = new FormData();
                form.append("email", email)
                form.append("password", password)

                var response = await axios.post("https://www.backend.joinping.co/auth/login", form)
                console.log(response)
                if( response.data.result == "SUCCESS" ){
                    cookie.save("userid", response.data.data.userId)
                    cookie.save("token", response.data.data.token)
                    router.push("/")
                }else{
                    setMsg(response.data.message)
                }

            }catch(err){
                setMsg(err.message)
            }
        }
    }

    // HTML
    return(
        <div className="container" id="container">
            <Nav />
            <div className="row">
                <div className="col-12 mb-3 mt-3">
                    <h5>Login</h5>
                </div>
                <div className="col-4">
                    <input type="email" className="form-control" placeholder="Email" onChange={ e => updateEmail(e)} /><br/>
                    <input type="password" className="form-control" placeholder="Password" onChange={ e=> updatePassword(e)} /><br/>
                    <button className="btn btn-primary" onClick={e => handleLogin() }>
                        Login
                    </button>
                    <br/>
                    <div className="text-danger">
                        {msg}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login;
