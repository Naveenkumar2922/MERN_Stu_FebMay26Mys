// container /wrapper component
import {React} from"react";
// children is a special React prop
//it holds nested
function Contain({children}){
    return(
        <div className="card">
            {children}

        </div>
    );
}
// parent component
export function PropsChildren(){
    return(
        <>
        <Contain> 
            <h3>First child element  in Nested approach</h3>
       </Contain>
        </>
    )
}