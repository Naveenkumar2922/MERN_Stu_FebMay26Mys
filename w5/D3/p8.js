//  try catch finally with async/await

function processPayment(isSuccessed){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(isSuccessed){
                resolve("payment could't processed");

            }
            else{
                reject("payment could't processed successfully");
            }
        },700);
    });
}
async function runPaymentflow(isSuccessed){
try{
    const result = await processPayment(isSuccessed);
    console.log("Success",result);
}
catch(error){
    console.log("failure:",error);

}
finally{
    console.log("payment flow completed");
}
}
runPaymentflow(false).then(function(){
    return runPaymentflow(true);
});

