export const initalvalue={
 
    Athenticated:JSON.parse(sessionStorage.getItem("isLogged")) || false,
    task:[]
}
//task:[]
export const stateReducer =(state,action)=>{

// console.log(action)
console.log(state);

 switch(action.type){
    case "addtask":
        return{
            ...state,
           task:action.payload
 }
 case "deletefun":
    console.log(state)
    return{
        ...state,
        task: state.task.filter((item)=>item.id!==action.payload)
        
    }
  case "update":
    console.log(action.payload)
    return{
        ...state,
        task: [...state.task.filter((item)=>item.id !== action.payload.id),action.payload]
    }
    case "complete":
        console.log(action)
        return{
                  ...state,
                  task:action.payload  
        } 
        case "check":
                console.log(state)
            return{

            }

    case "login":
        console.log("login",state)
        return{
            ...state,
            Athenticated:state.Athenticated=true
        }
    case "filter":
        return{
         
        ...state,
        task:action.payload
        }    
    case "ascending":
        return{
            ...state,
            task:action.payload
        }    
        case "decending":
            return{
                ...state,
                task:action.payload
            }
            case "logout":
                return{
                  ...state,
                  Athenticated:state.Athenticated=false 
                } 
     case "search":
        return{
            ...state,
            task:action.payload
        }    
         
   default: return state;
}

}


