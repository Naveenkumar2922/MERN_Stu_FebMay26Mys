// React Event Object
// what is it ??
// React automatically  passes an event object to event handlers
// this object contains details about the event
// eg: input field : event.target.value
// event: info about the input change 
// event.target:the HTML input element
//  event.target.value: the  current text typed by the user 
import { useState } from "react";
export function EventObject(){
    const[text,setText]=useState('');
    const handlesChange=(event)=>{
        const currentValue=event.target.value;
        console.log(currentValue);
        setText(currentValue);
    };
    return(
        <section>
            <h2>Event object</h2>
            <input type="text" value={text} 
            onChange={handlesChange}
            placeholder = "Type something"/>
            <p>you typed:{text}</p>
        </section>
    );

}