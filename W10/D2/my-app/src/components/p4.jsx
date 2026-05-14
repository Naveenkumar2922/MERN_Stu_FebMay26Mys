//useReducer hook
// A managing state with reducer function
// Helps keep update logic in one place

//Where to use?
//Forms
// Shopping carts
//Counters with multiple actions
//Games

//How does it work?
//1. We dwfine a reducer(state, action)
//2. We call useReducer(reducer, initialState)
//3. We dispatch actions:
    //e.g: dispatch({type:'increment'})

//initial state object
import { useReducer } from "react";
const initialState = {
    count: 0
};   

//Reducer function
//Current state and action object

//it return the NEXT state
function reducer(state, action){
    switch(action.type){
        case 'increment':
            return { ...state, count: state.count + 1 };
        case 'decrement':
            return { ...state, count: state.count - 1 };
        case 'incrementByAmount':
            return { ...state, count: state.count + action.payload };
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

export function UseReducerIntro(){
    //return 
    //state:current state object
    //dispatch:function to send actions to reducer

    const [state, dispatch] = useReducer(reducer, initialState);

    return(
       <section>
        <h2>UseReducer Introduction</h2>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({type: 'decrement'})}>-1</button>
        <button onClick={() => dispatch({type: 'increment'})}>+1</button>
        <button onClick={()=> dispatch({type: 'incrementByAmount',payload:5})}>+5</button>
         <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
       </section>
    )
}