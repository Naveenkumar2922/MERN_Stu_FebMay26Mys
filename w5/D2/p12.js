// chaining promises with centralised error handling
function validatelogin(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("login validated");
        },400);
    });
}
function fetchAccountData(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            const accountFound=true;
            if(accountFound){
                resolve("Account data loaded.")

            }else{
                reject("account data could not be found");

            }
        },700);
    })
}
validatelogin()
.then(function(message){
    console.log(message);
    return fetchAccountData();
})

.then(function(accountMessage){
    console.log(accountMessage);
})
.catch(function(error){
    console.log("chain error:",error);
});