//Dynamic params with useParams hook
//Dynamic Params are values that are taken from the URL 
import{useParams} from "react-router-dom";

export function DynamicParamsUseParams(){
    const{id}=useParams();
    return(
        <div>
            <h2>Dynamic params with useParams</h2>
            <p>Product ID  from Url</p>
        </div>
    );
}
