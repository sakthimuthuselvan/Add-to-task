import React, { useReducer } from 'react';
// import Class1 from "./App.js"
import ReactDOM from 'react-dom/client';
import './index.css';
// import Task from "./task1"
// import Fun from "./functional"

import {BrowserRouter,Routes,Route} from "react-router-dom"
// import Err from "./project/login/Error"


import Potfolio from './potfolio';
import About from "./about"
import Profile from './profile';
import Nav from "./nav"
import Login from './Login';


        //project 
import Loginjs from "./project/login/Login"
import Task from "./project/login/task/Task"
import Home from "./project/login/home/Home"
import {statecontext} from "./project/login/context/context"
import {initalvalue, stateReducer} from "./project/login/context/reduce"
import { Navigate } from 'react-router-dom';
// import {initalvalue} from "./project/login/context/reduce"





// function Main(){ 
//   return <div>function component</div>

// }

// function Fun1(a){
//   return(
//     <div>function1 {a.ins}
//     <button onClick={()=>{
//       a.get("react")
//     }}>click</button>
//     </div>
//   )
// }

// function Main(pro){

//   let getData=(data)=>{
//     console.log("how are you",data)
//   }
//   return(
//     <div>function component {pro.name}<Fun1 ins={pro.ins} get={getData}/></div>
//   )
// } 

import {store} from "./redux/store"
import { Provider } from 'react-redux';


function Overall(){
    // const [state,dispatch]=useReducer(stateReducer,{name:"sakthi",age:21})
   
    
    const [state,dispatch]=useReducer(stateReducer,initalvalue)
    console.log(state,"sakthi")

    return(
       
        // <div>
        // <BrowserRouter>
        // <Nav />
        //     <Routes>
           
        //         <Route path='/' element={<Home />}></Route>
        //         <Route path='about/:id' element={<About />}></Route>
        //         <Route path='*' element={<Home />}></Route>
        //         <Route path='profile' element={<Profile/>}></Route>
        //         <Route path='potfolio' element={<Potfolio />}></Route>
        //         <Route path='login' element={<Login />}></Route>
        //     </Routes>
        // </BrowserRouter>
        // </div>


        <div>
              
        {/* <Provider store={store}> */}

        <statecontext.Provider value={{state,dispatch}}>
        <BrowserRouter>
                   { state.Athenticated?(
                 
                        <Routes>
                            <Route path="/" element={<Home />}></Route>
                            {/* <Route path="home" element={<Home />}></Route> */}  
                            <Route path="task" element={<Task />}></Route>
                            <Route path="*" element={<Navigate to={"/"}/>}></Route>
                        
                        </Routes>
                        ):(
                            
                        <Routes>
                            <Route path="/login" element={<Loginjs />}></Route>
                            {/* <Route path="home" element={<Home />}></Route> */}
                            {/* <Route path="task" element={<Task />}></Route> */}
                            <Route path="*" element={<Navigate to={"/login"}/>}></Route>
                        </Routes>
                        
                        )
                      
}
                
</BrowserRouter>    
                </statecontext.Provider>

            
            {/* </Provider> */}

        </div>
    )
}










const root = ReactDOM.createRoot(document.getElementById('root'));

//<Main name={"sakthi"}/>
// root.render(<Class1 />);
// root.render(<Task name="semion" />);
// root.render(<Fun />)

root.render(
    

   
   <Overall />
  
    
 

)


