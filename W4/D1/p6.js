// // finally
// function example(){
// try{
//     console.log("example in try block");
//     return "TRY_RETURN";

// }
// finally{
//     console.log("this is printrd");
// }
// }
//     console.log("example result:",example());


// return in catch block and still not finally
function Example1(){
    try{

    
try{
    throw new Error("new Error");
}
catch(e){
    console.log("Example1: cauught error");
    return 10;

}
finally{
    console.log("Example1 : finally still runs ");``
    }
}
catch (e){
    console.log("Example1 outer catch",e.message);
}
}
console.log(Example1());
