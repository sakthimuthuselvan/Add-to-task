import React from "react";
import { useNavigate,Link } from "react-router-dom";



const Login=()=>{
    const nevigate=useNavigate()
    const btn=()=>{
        nevigate({
            pathname:"about",
            search:"?id=196758&name=sakthi"
        })
    }
return(
    <div>
        <h1>login</h1>
        <button onClick={()=>{btn()}}>login</button>
        <Link to="/home">go to home page</Link>
    </div>
)
}
export default Login