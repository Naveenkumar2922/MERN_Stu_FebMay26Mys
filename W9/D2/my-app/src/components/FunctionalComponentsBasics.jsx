import React from'react';
function Welcome(props){
    // Child components:reusable UI
    return(
        <p>Hello,{props.name}</p>
);
}
export function FunctionalComponentsBasics(){
    return(
        <div>
            <h2>Functional components Basics</h2>
            {/* We are passing 'Naveen' as prop
            Welcome function receives is as {name:"Naveen"} */}
            <Welcome name="Naveen"/>
              {/* We are passing 'Developer' as prop
            Welcome function receives is as {name:"Developer"} */}
            <Welcome name="Developer"/>

        </div>
    )
}