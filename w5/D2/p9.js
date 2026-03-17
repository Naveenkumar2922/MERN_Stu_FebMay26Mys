// promise states: pending,fulfilled,rejected
const fulfilledpromise = new Promise(function(resolve){
    console.log("fulfilledpromise is pending");
    setTimeout(function(){
        resolve("fulfilledpromise is fulfilled");
    },1000);
});
const rejectedPromise = new Promise(function(resolve,reject){
    console.log("rejetedPromise is pending");
    setTimeout(function(){
        reject("rejectedPromise is rejected");

    },1000);
})
fulfilledpromise.then(function(message){
    console.log(message);

});
rejectedPromise.catch(function(message){
    console.log(message);

});