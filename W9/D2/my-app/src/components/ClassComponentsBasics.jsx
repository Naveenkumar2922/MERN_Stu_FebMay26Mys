import React from"react";
import { Component } from "react";

export class  ClassComponentBasics extends Component{
    // 1 Class extends React.Cmponent
    // state,lifecycle  methods, props, setState()
render(){
    // render();Returns JSX
     //called whenever coomponent needs to update
    return(
        <>
        <h2>Class Components</h2>
        <p>Class Components use register() and support lifestyle methods.
            
        </p>
        </>
    )
}
}