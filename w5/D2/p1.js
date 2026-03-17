// imtroduction to callback function
function greetUser(Name,callback){
    console.log("Hello,"+Name);
    // the callback is executed only after the execution of the current functiom
    callback();
}
function showComplitionMessage(){
    console.log("the greeting task is completed.");   
}
greetUser("Naveen",showComplitionMessage);