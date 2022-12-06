
import React from 'react'


import { useNavigate } from "react-router-dom";
import{Link}from "react-router-dom"
import{useParams}from "react-router-dom"


function Nav(){
   
    // let navigate=useNavigate()
    // const btn=()=>{
    //     navigate("login")
    // }
    return(
        <div className='overallnav'>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about/55">About</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/potfolio">Potfolio</Link></li>
                <li><Link to="/login"><button>Login</button></Link></li>

               
           
           {/* <li><Link to="/about">about</Link></li>  */}
            </ul>
            
        </div>
    )
} 
export default Nav;