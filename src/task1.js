import { Component } from "react";
// import Fun1 from "./App";




class First extends Component{
    constructor(){
        super()
        this.state={
            products:[],
            add:[]
        }
    }
   

  num1=()=>{
    console.log(this.state) 
    return(
        this.setState({
            products:this.state.products.push("sakthi","semion")
          
        })   
    )
  }  
  num2=()=>{
    console.log(this.state) 
    return(
        this.setState({
            products:this.state.products.push("realme")
        })
       
    )
  }  
//   num3=()=> {
//     console.log(this.state) 
//     return(
//         this.setState({
//             products:this.state.products.push("sumsung") 
//         })   
//     )
//   }  
//   num4=()=>{
//     console.log(this.state) 
//     return(
//         this.setState({
//             products:this.state.products.push("oppo") 
//         })   
//     )
//   }  
  
    render(){
        return(
            <div>
                <div className="product">
                    <h3>redmi</h3>
                    <button onClick={this.num1}>click</button>
                </div>
                <div className="product">
                    <h3>realme</h3>
                    <button onClick={this.num2}>click</button>
                </div>
                {/* <div className="product">
                    <h3>samsung</h3>
                    <button onClick={this.num3}>click</button>
                </div>
                <div className="product">
                    <h3>oppo</h3>
                    <button onClick={this.num4}>click</button>
                </div> */}
            </div>
        )
    }
}
export default First;