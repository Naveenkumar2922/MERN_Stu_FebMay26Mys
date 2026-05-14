//useEffect for side effects
//Side effects are operations in a component that affect something outside the component or happen after rendering
//fetching data from an API
//Updating the DOM
//Setting up subscription(websockets)
import { use } from "react";
import { useState,useEffect } from "react";
export function useEffectBasics(){
    const [count,setCount]=useState(0);
    const [name,setName]=useState('Guest');
    useEffect(()=>{
        console.log('useEffect runs once');
        document.title=`React useEffect example.welcome ${name}`;
        return()=>{
            document.title='React useeffect';
        };
    },[]);
    // DOM updating based on state 
    useEffect(()=>{
        console.log(`count changed to ${count}`);
},[count]);
//No dependency array
useEffect(()=>{
        console.log('runs after every render');
});
const increment=()=>setCount(count+1);
const updateName=(e)=>setName(e.target.value);
return(
    <>
    
    </>
)
}