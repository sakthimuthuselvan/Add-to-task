import React, { useEffect, useState } from 'react'
import "./home.scss"
import {createSearchParams, json, Link, useNavigate} from "react-router-dom"
import { useContext } from 'react'
import { statecontext } from '../context/context'
import axios, { Axios } from 'axios'
import { useSelector,useDispatch} from 'react-redux'
// import { type } from '@testing-library/user-event/dist/type'

//material UI
import { Checkbox , FormControlLabel,Button} from '@mui/material' 



const Home = () => {
  // const state=useSelector((item)=>item).sample
  // const dispatch=useDispatch()
  const [Priortize,setPriortize]=useState(false)
  const {state,dispatch}=useContext(statecontext);
  const [searchqry,setsearchqry]=useState("")
  const [task,settask]=useState([])
  const [val,setval]=useState([])
  // console.log(val)
  // const [date,setdate]=useState()
  console.log(state)

  const navigate=useNavigate()
  // const [todo,settodo]=useState()

  // console.log("todo : ",todo)

  console.log("state context ",state)


const upadateage=()=>{
  dispatch()
}





const edit=(id)=>{
navigate({
  pathname:"/task",
  search:createSearchParams({
    id:id
  }).toString()
})

}

const deletefun=(id)=>{
console.log(id)
dispatch({type:"deletefun",payload:id})
}


const handlecomplete=(index)=>{
  const temp=[...state.task]
const data=temp?.map((obj,i)=>{ 
  if(i===index){
    return{
      ...obj,
      complete:!obj.complete
    }
  }else return obj
  
})
dispatch({type:"complete", payload:data})

}



useEffect(()=>{
  fetchdata()
},[])
const fetchdata=()=>{

          // USE AXIOS METHOD

// axios.get("https://jsonplaceholder.typicode.com/posts")
// .then((item)=>settodo(item.data))

//doesn't work

// axios("https://jsonplaceholder.typicode.com/posts",{
//   method:"POST",
//   body:JSON.stringify({
//     title:"sakthi",
//     body:"sakthi",
//   }),
//   headers:{
//     'Content-type': 'application/json; charset=UTF-8',
//   }
// })

//.then((item)=>console.log(item))


        //USE FETCH METHOD

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((item)=> item.json()
// .then((res)=> settodo(res)))


// fetch("https://jsonplaceholder.typicode.com/posts",{
//   method:"POST",
//   body:JSON.stringify({
//     title:"sakthisakthi",
//   }),
//   headers:{
//     'Content-type': 'application/json; charset=UTF-8',
//   }
// })
// .then((item)=> item.json())
// .then((res)=>console.log(res))

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));


// fetch("https://jsonplaceholder.typicode.com/posts/1",{
//   method:"PUT",
//   body:JSON.stringify({
//     id:1,
//     title:"sakthi",
//     body:"muthuselvan",
//     userid:1,
//   }),
//   headers:{
//     'Content-type': 'application/json; charset=UTF-8',
//   }
// })
// .then(item =>item.json())
// .then(item =>console.log(item))

// fetch("https://jsonplaceholder.typicode.com/posts/1",{
//   method:"PATCH",
//   body:JSON.stringify({
   
//     title:"sakthi",
//   }),
//   headers:{
//     'Content-type': 'application/json; charset=UTF-8',
//   }
// })
// .then(item =>item.json())
// .then(item =>console.log(item))


}
// function filterContentAsd(){
//   const sort=state.task.sort((a,b)=> a.usertitle.localeCompare(b.usertitle));
//   console.log(sort);
//   dispatch({type:"sort_ascend" , payload: sort})
// }

const ascending=()=>{

  console.log(state.task)
  let sort=state.task.sort((a,b)=>a.task < b.task ? 1: -1)

dispatch({type:"ascending" , payload:sort})
}

const decending=()=>{
  let sort=state.task.sort((a,b)=>a.date > b.date ? -1: 1)

  dispatch({type:"decending" , payload:sort})
}

const filter=()=>{
 

setval(state.task)
console.log(val)

let data=val.filter((item)=>item.Priortize===true)

console.log("SAKTHI",data)


dispatch({type:"filter" , payload:data})
}

const logout=()=>{
  dispatch({type:"logout" , payload:state.Athenticated})
  // sessionStorage.setItem("isLogged",JSON.stringify(false))
}



useEffect(()=>{
  filtersearch()
},[searchqry])

useEffect(()=>{
  console.log("new " ,task);
  settask(state.task)
},[state.task])

const filtersearch=()=>{
  console.log("search ",searchqry)
  if(searchqry?.length){
   const res= state?.task?.filter((item)=>
   item.task.includes(searchqry)
  // console.log("sakthi ", item.task)
   );
  settask(res)
  }else{
    settask(state?.task)
  }
}
// const [value,setvalue]=useState("")
// const searchval=(e)=>{

//    setvalue(e.target.value)

  // // let copy=[...state.task]
  // let temp=copy.filter((item)=>item.lower)
  // const sample=state.task.filter((item)=>{
    // return item.task.toLowercase().includes(value.toLowerCase())
    //console.log("name",item.task)
  // })

// dispatch({type:"search", payload:sample})
// }


  return (
    
    <div>
      <div className='nav'>
            <div className='logo'></div>
            <div className='list'>
            <ul>
                <li><Link to={"/home"}>Home</Link></li>
                <li><Link to={"/task"}>Task</Link></li>
                <li><button onClick={()=>logout()}>logout</button></li>
                </ul>
            </div>
            {/* {item.task}{item.description} */}
      </div>
   
      <div className='container'>
      <h1>Home</h1>
    {/* <h1>sakthi</h1> */}
    <div className='btns'>
    <Button className='btn' onClick={()=>{ascending()}} size="small" variant="contained">ascending</Button>
    <Button className='btn' onClick={()=>{decending()}} size="small" variant="contained">decending</Button>
    <Button className='btn' onClick={()=>{filter()}} size="small" variant="contained">filter</Button>
    {/* <input  type={"search"} onchange={(value)=>searchval(value)}/> */}
    <input type={"search"} value={searchqry} onChange={(ev)=>setsearchqry(ev.target.value)} />
    
    </div>
    
      {state.value?.map((item,index)=><p key={index}>{item.task}{item.description}</p>)}
       {state.task?.map((item,index)=>{
      return(
        <div key ={index} className='overall1'>
        <div className='user'>
            <h3>{item.task}</h3>
            <h5>{item.description}</h5>
            <br />
            <FormControlLabel control={<Checkbox checked={item.complete} onChange={(index)=>handlecomplete(index)}/>} label="complete" /><br />
            
            <FormControlLabel control={<Checkbox checked={item.Priortize}/>} label="Priortize" /><br />
            
            <h5>{item.date}</h5>
            <button onClick={()=>{edit(item.id)}}>Edit</button><br />
           
           <button onClick={()=>{deletefun(item.id)}}>delete</button>
       


        </div>
        </div>
     
      )
    })}
    {/* {todo ?.map((item,index)=><p key={index}>{item.title}*/}
   
    </div>
    </div> 
  )
}

export default Home