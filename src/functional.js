
import React,{useState,useEffect} from "react"

function Example(){
    useEffect(()=>{
        return(
            console.log("will unmount")
        )

    },[])
    return(
        <h3>hello world </h3>
    ) 
}


function Main(val){
const [item,itemFun]=useState('sakthi')
const [age,setAge]=useState(20)
const[study,setStudy]=useState("b.com")
const [show,setShow]=useState(true)
useEffect(()=>{
    console.log("mount")
})
useEffect(()=>{
console.log("component did mount")
},[])
useEffect(()=>{
    console.log("componentdid update")
},[age,study])

return(
    <div>
    <h2>functional component</h2>
        <button onClick={()=>{itemFun("muthuselvan")}}>click</button>
        {item}
        <button onClick={()=>{setAge(21)}}>update age</button>
        {age}
        <button onClick={()=>{setStudy("frontend developer")}}>update study</button>
        {study}
    <button onClick={()=>{setShow(!show)}}> will unmount</button>
        {show ? <Example />:null}
    </div>
)
}
export default Main;