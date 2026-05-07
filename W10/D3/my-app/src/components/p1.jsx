// Basics events in React
// what is an Event?
// An action triggered  by the user (mouse,keyboard,DOM)
// React use CamelCase attributes like onClick,onChange..
// React passes an event object (syntheticEvent) to the handler

export function EventBasics(){
    // Declaring a event handler function
    const handleClick=()=>alert("clicked");
    return(
        <section>
            <h2>Basic Events </h2>
            {/* Event binding */}
            <button onClick={handleClick}>
                Click me 
            </button>
            </section>
    )

}