// An async function always returns a promise
async function getStatusMessage(){
    return "Order is readdy";

}
const result=getStatusMessage();
console.log("is this returned value of promise?",result instanceof Promise);

result.then(function(message){
    console.log("Resolved value:",message);
});