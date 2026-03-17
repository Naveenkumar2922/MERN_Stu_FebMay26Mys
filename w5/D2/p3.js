// Asynchronous approach of Node.js
console.log("step 1:script started");
setTimeout(()=>{

},10000);
setTimeout(function(){
    console.log("step 3: delayed  callback finished. F1");

},2000);
setTimeout(function(){
    console.log("step 3: delayed  callback finished. F2");

},3000);
console.log("step  2: script did not stop while waiting");