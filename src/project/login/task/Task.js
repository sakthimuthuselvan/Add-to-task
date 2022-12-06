import React, { useState, } from 'react'
import "./task.css"
import { statecontext } from '../context/context'
import { useContext } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { FormControlLabel,Checkbox ,} from '@mui/material'
// import { useDispatch,useSelector } from 'react-redux'
// import {addtask} from "../../../Slice"



const Task = () => {
  const {state,dispatch}=useContext(statecontext)
  // const dispatch=useDispatch()
  // const state=useSelector((item)=>item)
  // console.log(state)

  const navigate=useNavigate()
   const [param]=useSearchParams()
  const id=parseInt(param.get("id"))
  // console.log(id)

  let getid=state.task?.findIndex((item)=>item.id===id)
  
  // console.log(getid)

  const [tasks,setTask]=useState(state.task[getid]?.task || "")
  const [des,setDes]=useState(state.task[getid]?.description || "")
  const [Priortize,setPriortize]=useState(false)
  const [date, setdate]=useState(state.task[getid]?.date || "")
  const [collect,setcollect]=useState([])
 
 
// console.log(state)
// console.log(dispatch)
 

const sumbit=(event)=>{
  event.preventDefault()
  console.log(tasks)
  console.log(des)
  
if(id){
  const temp={
    id:id,
   task:tasks,
   description:des
  };
  console.log(temp) 
  dispatch({type:"update", payload : temp});
  setTask("")
  setDes("")
  setdate("")
  navigate("/home")
}else{
  const temp={
    id:state.task.length+1,
   task:tasks,
   description:des,
   complete:false, 
   Priortize,
   date

  };
  console.log(temp)
  dispatch({type:"addtask", payload : [...state.task,temp]})
  // dispatch(addtask({...state.task,temp}));
  setTask("")
  setDes("")
  setdate("")
}

}

  
const area=(a)=>{
setDes(a.target.value)
}

  
const task=(a)=>{
setTask(a.target.value)

}
const dateobj=(a)=>{
  console.log(a.target.value)
  setdate(a.target.value)
}

  return (
    <div>
         <div className='task'>
          <Link to="/home">Go to home page</Link>
        <div className='overall'>
          <h2>Add Tasks</h2>
          <div></div>
            <form> 
              <input onChange={task} name={"username"} value={tasks} type={"text"} placeholder={"Task Name"}></input><br />
              <textarea onChange={area} name={"description"} value={des} placeholder='Description'></textarea><br />

                <FormControlLabel control={<Checkbox color='success' checked={Priortize} />} label="Label" onChange={()=>setPriortize(!Priortize)}/><br />

              <input type={"date"} value={date} onChange={(a)=>dateobj(a)}/>

              <button className='button' onClick={(event)=>{sumbit(event)}}>submit</button>
              {collect?.map((item,index)=><p key={index}>{item.task}</p>)}
            </form>
        </div>
        
    </div>
    </div>
   
  ) 
}

export default Task