import React, { useState } from "react";
import Success from "./Success.jsx";
import Fail from './Fail.jsx'
import './Login.css'
export default function Login() {
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')
    const[status, setStatus] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault();
        //  alert("Username: "+username + " & Password: "+password)
        if(username === "Sanjith Kumar H R" && password === "Sanjith@123"){
            setStatus(true)
        }
        else{
            setStatus(false)
        }
    }
    if(status === true){
        return(
            <Success/>
        );
    }
    else if(status === false){
        return(
            <Fail/>
        );
    }
    return(
        <>
        <h1>Welcome to Login page</h1>
        <form onSubmit={handleSubmit}>
            <label>USERNAME:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/><br /><br />
            <label>PASSWORD:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/><br /><br />
            <button>LOGIN</button>
        </form>
        </>
    )
};
