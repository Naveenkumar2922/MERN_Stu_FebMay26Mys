//Immediately invoked func expression(IIFE)
//with parameters 
(function(appName,version){
    console.log("app:appName,",version);

})("Nodejs","v22.20.0");
 
//without parameters 
(function(){
    console.log("basic IIFE executed immediately");

})();

//with return value
const  result=(function(){
    const a=10,b=20;
    return a+b;

})();
console.log("sum is",result);

