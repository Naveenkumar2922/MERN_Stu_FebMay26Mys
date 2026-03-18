// Introduction to async/await
function getMessage(){
    return new Promise(function(resolve){
        setTimeout(()=>{
            resolve("aync/await makes promise based code to read");
        },1000);

    });

}
async function showMessage(){
    console.log("loading message...");
    const message=await getMessage();
    console.log(message);
}
showMessage();