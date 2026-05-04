// props destructuring
import {React} from "react";
function UserProfile({username,skill}){
    return(
        <div>
            <p>User:{username}</p>
            <p>skill:{skill}</p>
        </div>
    )
}
// parent component
 export function propDestructuring(){
    return(
        <>
        <h2>prop <Destructuring/></h2>
        <UserProfile username ="Naveen" skill="React"/>
        </>
    );
 }