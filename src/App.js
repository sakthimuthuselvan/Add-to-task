import React,{Component} from "react";

      //CLASS COMPONENT


// class Fun2 extends Component{
//   render(){
//     return <div>fun2</div>
//   }
// }

// class Fun1 extends Component{
//   render(){
//     return <div>fun1<Fun2 /></div>
//   }
// }


// class Main extends Component {
//   render(){
//     return <div>class compondent <Fun1 /></div>
//   }
// }
// export default Main;



          //class method props/getdata mehod

// class Fun2 extends Component{

//   render(){
//     return(
//       <div>function 2 {this.props.name}
//       <button onClick={()=>{
//         this.props.get("sakthi")
//       }}>click </button>
//       </div>
//     )
//   }
// }

// class Fun1 extends Component{
//   getdata=(data)=>{
//     console.log(data)
//   }
//   render(){
//     console.log(this)
//     return(
//       <div>class compondent {this.props.name}<Fun2 name={this.props.name} get={this.getdata}/></div>
//     )
    
//   }
// }
// export default Fun1;


// class Name extends component{
// constructor(){
//   super()
// }
// render(){
//   return(
// <p>{this.state.name}</p>
//   )
  
// }
// }



class Fun1 extends Component{
  constructor(){
    console.log("constractor")
    super()
    this.state={
      name:"simeon",
      age:22 
    }
    
  }

// Hlo=(a)=>{
//   this.setState({
//     name:a
//   })
// }
// hii=()=>{
//   this.setState({
//     name:"sakthi",
//     age:21 ,
//     show:true
//   })  
// }
 
  render(){
    console.log("rendr")
    return(
      <div>{this.state.name} 
     {this.state.age}

    
<button onClick={()=>{this.hii()}}>click</button>



    
      <p></p>
      {/* <Name call={this.state.name}/> */}
    
      </div>
      

    )
  }
}
export default Fun1;
