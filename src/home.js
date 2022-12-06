import {Link,Navigate,useNavigate} from "react-router-dom"

import {useSearchParams} from "react-router-dom"



function Home(){
    const navigate= useNavigate();
    const btn=()=>{
        navigate("about")
       }
     const getgo=()=>{
        navigate({
            pathname:"profile",
            search:"?id=47298jhds&name=sakthi"
        })
       
     } 
return(
    <div>
        <h1>Home</h1>
        <Link to="/about">click</Link>
         <Link to="/login">click</Link>
        <button onClick={()=>{btn()}}>click here</button>
        <button onClick={()=>{getgo()}}>go to profile</button>
    </div>
)
}
export default Home;