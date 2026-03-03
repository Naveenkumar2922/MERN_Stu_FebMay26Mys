// call back function
// is a function which is passed as an argument
// to another function

function greetUser(name,callback){
    console.log("hello,",name);
    callback();
}
greetUser("Naveen",function(){
    console.log("callback function executed");
});