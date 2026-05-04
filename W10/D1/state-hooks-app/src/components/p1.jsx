import {useState} from "react";
// useState Basics
//Its a react hook that adds state to functional component
//return an array with 2 values
//1. current state value
//2. Function to  update state
//synatx:
//const [statValue,setStateValue]=useState(initialValue); 

export function UseStateBasics(){
    //counter
    const [count,setCount]=useState(0); 
    //cart
      const [cart,setCart]=useState(0); 
      return(
        <>
        <h2>useState Basics</h2>
        <p>Count:{count}</p>
        <button onnClick={()=>setCount(count+1)} >Increment</button>
        <button onnClick={()=>setCount(count-1)} >Decrement</button>
        </>
      )


}